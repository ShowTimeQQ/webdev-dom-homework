import { renderComments } from './renderComments.js'
import { updateComments } from './newComments.js'

const list = document.getElementById('list')

// list.Disabled = true
// list.textContent = 'ИДЕТ ЗАГРУЗКА...'

document.querySelector(".comments").innerHTML = "Пожалуйста подождите , идет загрузка комментариев..."

export function getComments() {
    fetch('https://wedev-api.sky.pro/api/v1/mikhail-ermishin/comments', {})
    .then(() => {
        return fetch('https://wedev-api.sky.pro/api/v1/mikhail-ermishin/comments')
        })
        .then((respons) => {
            return respons.json()
        })
        .then((data) => {
            list.ariaDisabled = false
            list.textContent = ''
            updateComments(data.comments)
            renderComments()
        
        })
}
  


export function sendComment() {
    const commentsEl = document.getElementById('comment')
    const name = document.getElementById('name')

    const newComments = {
        name: name.value.replaceAll('>', '&#62').replaceAll('<', '&#60'),
        text: commentsEl.value.replaceAll('>', '&#62').replaceAll('<', '&#60'),
    }
      document.querySelector('.form-loading').style.display = 'block'
      document.querySelector(".add-form").style.display = 'none'

    fetch('https://wedev-api.sky.pro/api/v1/mikhail-ermishin/comments', {
        method: 'POST',
        body: JSON.stringify(newComments),
        
    })
        .then(() => {
        return fetch('https://wedev-api.sky.pro/api/v1/mikhail-ermishin/comments')
        })

        .then((respons) => {
         return respons.json()
            
        })
        .then((text) => {
        document.querySelector('.form-loading').style.display = 'none'
        document.querySelector(".add-form").style.display = 'flex'
        updateComments(text.comments)
        getComments()
        name.value= ''
        commentsEl.value= ''
        

        })
       
}


