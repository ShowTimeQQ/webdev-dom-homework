export const renderLogin = () => {
    const container = document.querySelector('.container')
    const loginHtml = `
     <section class = "add-form">
     <h1>Форма входа</h1>
     <input
     type="text"
     class="add-form-name"
     palceholder="Введите логин"
     id="login"
     required
     />
     <input
     type="text"
     class ="add-form-name"
     palceholder="Введите пароль"
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
    container.innerHtml = loginHtml
}
