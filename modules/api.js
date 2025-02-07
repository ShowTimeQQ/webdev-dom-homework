import { renderComments } from './renderComments.js'
import { updateComments } from './newComments.js'



const host = 'https://wedev-api.sky.pro/api/v1/mikhail-ermishin'


   




export function getComments() {
    fetch(host + '/comments')
    
        .then((respons) => {
            return respons.json()
        })
        .then((data) => {
            updateComments(data.comments)
            renderComments()
        })
}
  


     
export function sendComment(text,name) {
      return fetch(host +'/comments', {
        method: 'POST',
        body: JSON.stringify({
            text, 
            name,
        }),
    
     }) .then(() => {
        return getComments()
        })

    }

       


