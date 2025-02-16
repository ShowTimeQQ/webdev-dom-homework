import { comments } from './newComments.js'
import { initEventListeners, initClickComment } from './initListeners.js'
import { renderLogin } from './renderLogin.js'
import { add } from './initListeners.js'
import { token } from './api.js'
export const renderComments = () => {
    const container = document.querySelector('.container')
    // const name = document.getElementById('name')
    // const comment = document.getElementById('comment')
    // const list = document.getElementById('list')

    const commentsHtml = comments
        .map((comments, index) => {
            return `<li data-li = "${index}" class="comment">
          <div class="comment-header">
            <div>${comments.author.name}</div>
            <div>${comments.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comments.text}
            </div>
          </div>
          <div class="comment-footer">
             <div class="likes">
              <span class="likes-counter">${comments.likes}</span>
              <button class="like-button ${comments.isLiked ? '-active-like' : ''}" data-index = "${index}"></button>
            </div>
          </div>
        </li>`
        })
        .join('')

    // name.value = ''
    // comment.value = ''
    const addCommentsHtml = `
      
            <div class="add-form" id="form">
                <input
                    id="name"
                    type="text"
                    class="add-form-name"
                    placeholder="Введите ваше имя"
                />
                <textarea
                    id="formtext"
                    type="textarea"
                    class="add-form-text"
                    placeholder="Введите ваш коментарий"
                    rows="4"
                ></textarea>
                <div class="add-form-row">
                    <button class="add-form-button" id="add">Написать</button>
                </div>
            </div>
            <div class="form-loading" style="display: none; margin-top: 20px">
                Комментарий добавляется...
            </div> `

    const linkToLoginText = `<p>чтобы отправить комментарий , <span class= "link-login">войдите</span></p>`

    const baseHtml = `
    <ul class="comments">${commentsHtml}</ul>
             ${token ? addCommentsHtml : linkToLoginText}
             `

    container.innerHTML = baseHtml

    if (token) {
        initEventListeners(renderComments)
        initClickComment()
        add(renderComments)
    } else {
        document.querySelector('.link-login').addEventListener('click', () => {
            renderLogin()
        })
    }
}
