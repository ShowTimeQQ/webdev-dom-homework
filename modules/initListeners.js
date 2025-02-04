import { renderComments } from './renderComments.js'
import { comments } from './newComments.js'
import { sendComment } from './api.js'
const comment = document.getElementById('comment')
export const initClickComment = () => {
    const commentsElements = document.querySelectorAll('.comment')

    for (const commentElement of commentsElements) {
        commentElement.addEventListener('click', () => {
            const indexli = commentElement.dataset.li
            const currentComment = comments[indexli]
            comment.value = `${currentComment.author.name} > ${currentComment.text}`
          
        })
    }
  
}

export function makeLike(el) {
    const commentIndex = el.dataset.index
    console.log(commentIndex)
event.stopPropagation()
    const commentObject = comments[commentIndex]
    if (commentObject.isLiked === true) {
        commentObject.likes -= 1
    } else {
        commentObject.likes += 1
    }
    commentObject.isLiked = !commentObject.isLiked
    renderComments()
}

export function add() {
    const buttonEl = document.getElementById('add')
    const textEl = document.getElementById('comment')
    const nameEl = document.getElementById('name')
    buttonEl.addEventListener('click', function () {
        if (isEmptyField(nameEl) || isEmptyField(textEl)) {
            return false
        }
        // document.querySelector('.form-loading').style.display = 'block'
        // document.querySelector(".add-form").style.display = 'none'
        sendComment()
    })
}
add()

export function initEventListeners() {
  
    document
    .querySelectorAll('.like-button')
 .forEach((el) => el.addEventListener('click', () => makeLike(el)))
        
}

export function isEmptyField(field) {
    return field.value === ''
}
