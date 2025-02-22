import { renderComments } from './renderComments.js'
import { comments, updateComments } from './newComments.js'
import { sendComment } from './api.js'
import { getComments } from './api.js'

export const initClickComment = () => {
    const commentsElements = document.querySelectorAll('.comment')
    const comment = document.querySelector('.add-form-text')
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
    const textEl = document.getElementById('formtext')
    const nameEl = document.getElementById('name')

    buttonEl.addEventListener('click', function () {
        if (isEmptyField(nameEl) || isEmptyField(textEl)) {
            return false
        }
        document.querySelector('.form-loading').style.display = 'block'
        document.querySelector('.add-form').style.display = 'none'

        sendComment(
            nameEl.value.replaceAll('>', '&#62').replaceAll('<', '&#60'),
            textEl.value.replaceAll('>', '&#62').replaceAll('<', '&#60'),
        )
            .then(() => {
                document.querySelector('.form-loading').style.display = 'none'
                document.querySelector('.add-form').style.display = 'flex'
                nameEl.value = ''
                textEl.value = ''
            })
            .then(() => {
                return getComments()
            })
            .then((data) => {
                updateComments(data.comments)
                renderComments()
            })
            .catch((error) => {
                document.querySelector('.form-loading').style.display = 'none'
                document.querySelector('.add-form').style.display = 'flex'

                if (error.message === 'Failed to fetch') {
                    alert('нет интернета , проверьте соеденение')
                }

                if (error.message === 'Сервер упал') {
                    alert(error.message)
                }

                if (error.message === 'Неверный запрос') {
                    alert('Имя и комментарий должны быть не короче 3х символов')
                    nameEl.classList.add('-error')
                    textEl.classList.add('-error')
                    setTimeout(() => {
                        nameEl.classList.remove('-error')
                        textEl.classList.remove('-error')
                    }, 2000)
                }
            })
    })
}

export function initEventListeners() {
    document.querySelectorAll('.like-button').forEach((el) =>
        el.addEventListener('click', (event) => {
            makeLike(el)
            event.stopPropagation()
        }),
    )
}

export function isEmptyField(field) {
    return field.value === ''
}

export function isEmptyFieldLogin(field) {
    return field.value === ''
}

export function isEmptyFieldRegistration(field) {
    return field.value === ''
}
