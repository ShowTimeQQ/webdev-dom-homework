import { renderComments } from './renderComments.js'
import { comments } from './newComments.js'
import { sendComment } from './api.js'

const button = document.getElementById('add')
const name = document.getElementById('name')

export const initClickComment = () => {
    const commentsElements = document.querySelectorAll('.comment')

    for (const commentElement of commentsElements) {
        commentElement.addEventListener('click', (event) => {
            const indexli = commentElement.dataset.li
            const currentComment = comments[indexli]
            comments.value = `${currentComment.author.name} > ${currentComment.text}`
            event.stopPropagation()
        })
    }
}

export function makeLike(el) {
    const commentIndex = el.dataset.index
    console.log(commentIndex)

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
    button.addEventListener('click', function (e) {
        if (isEmptyField(name) || isEmptyField(comments)) {
            return false
        }
        sendComment()
    })
}

export function initEventListeners() {
    document
        .querySelectorAll('.like-button')
        .forEach((el) => el.addEventListener('click', () => makeLike(el)))
    add()
}

export function isEmptyField(field) {
    return field.value === ''
}
