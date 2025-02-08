import { comments } from './newComments.js'
import { initEventListeners, initClickComment } from './initListeners.js'


export const renderComments = () => {
   
    const name = document.getElementById('name')
    const list = document.getElementById('list')
    const comment = document.getElementById('comment')
    
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
    list.innerHTML = commentsHtml
    name.value = ''
    comment.value = ''

    initEventListeners()
    initClickComment()
}
