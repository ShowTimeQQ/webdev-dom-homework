import { getComments } from './modules/api.js'
import { updateComments } from './modules/newComments.js'
import { renderComments } from './modules/renderComments.js'

export function getNowDate() {
    const date = new Date()
    return date.toLocaleTimeString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    })
}
document.querySelector('.comments').innerHTML = 'Подождите, идет загрузка ...'

getComments().then((data) => {
    updateComments(data.comments)
    renderComments()
})