import { login, setToken, setName } from './api'
import { renderRegistration } from './renderRegistration'
import { isEmptyFieldLogin } from './initListeners'
import { renderComments } from './renderComments'
export const renderLogin = () => {
    const container = document.querySelector('.container')
    const loginHtml = `
     <section class = "add-form">
     <h1 class="text-form-enter">Форма входа</h1>
     <input
     type="text"
     class="add-form-name"
     placeholder="Введите логин"
     id="login"
     required
     />
     <input
     type="text"
     class ="add-form-name"
     placeholder="Введите пароль"
     id="password"
     required
     ></input>
     <fieldset class="add-form-registry">
     <button class="add-form-button-main button-main" type="submit">
     Войдите</button>
     <u class="add-form-button-link registry" >
     Зарегистрироваться 
     </u>
     </fieldset>
     </section>
     `
    container.innerHTML = loginHtml

    document.querySelector('.registry').addEventListener('click', () => {
        renderRegistration()
    })

    const loginEl = document.querySelector('#login')
    const passwordEl = document.querySelector('#password')
    const submitButtonEl = document.querySelector('.button-main')

    submitButtonEl.addEventListener('click', () => {
        if (isEmptyFieldLogin(loginEl) || isEmptyFieldLogin(passwordEl)) {
            return false
        }
        login(loginEl.value, passwordEl.value)
            .then((data) => {
                setToken(data.user.token)
                setName(data.user.name)
                renderComments()
            })
            .catch((error) => {
                if (error.message === 'Введены неккоректные данные!!!') {
                    alert(error.message)
                }
            })
    })
}
