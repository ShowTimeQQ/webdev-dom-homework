import { setToken, setName, getComments } from './api.js'
import { renderComments } from './renderComments.js'
import { registration } from './api.js'
import { renderLogin } from './renderLogin.js'
export const renderRegistration = () => {
    const container = document.querySelector('.container')
    const loginHtml = `
     <section class = "add-form">
     <h1 class="text-form-enter">Форма регистрации</h1>
     <input
     type="text"
     class="add-form-name"
     placeholder="Введите имя"
     id="name"
     required
     /> <input
     type="text"
     class="add-form-name"
     placeholder="Введите логин"
     id="login"
     required
     />
     <input
     type="password"
     class ="add-form-name"
     placeholder="Введите пароль"
     id="password"
     required
     ></input>
     <fieldset class="add-form-registry">
     <button class="add-form-button-main button-main" type="submit">
    Зарегистрируйтесь</button>
     <u class="add-form-button-link entry" >
     Войти
     </u>
     </fieldset>
     </section>
     `
    container.innerHTML = loginHtml

    document.querySelector('.entry').addEventListener('click', () => {
        renderLogin()
    })

    const loginEl = document.querySelector('#login')
    const passwordEl = document.querySelector('#password')
    const submitButtonEl = document.querySelector('.button-main')
    const nameEl = document.querySelector('#name')

    submitButtonEl.addEventListener('click', () => {
        registration(nameEl.value, loginEl.value, passwordEl.value)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setToken(data.user.token)
                setName(data.user.name)
                getComments()
                renderComments()
            })
    })
}
