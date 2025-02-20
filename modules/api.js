const host = 'https://wedev-api.sky.pro/api/v2/:mikhail-ermishin'
const autHost = ' https://wedev-api.sky.pro/api/user'

export function getComments() {
    return fetch(host + '/comments').then((response) => {
        return response.json()
    })
}
export let token = ''
export const setToken = (newToken) => {
    token = newToken
}
export let name = ''
export const setName = (newName) => {
    name = newName
}

export function sendComment(name, text) {
    return fetch(host + '/comments', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({
            text,
            name,
            forceError: true,
        }),
    }).then((response) => {
        if (response.status === 500) {
            throw new Error('Сервер упал')
        }
        if (response.status === 400) {
            throw new Error('Неверный запрос')
        }
        if (response.status === 201) {
            return response.json()
        }
    })
}

export const login = (login, password) => {
    return fetch(autHost + '/login', {
        method: 'POST',
        body: JSON.stringify({ login: login, password: password }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Введены неккоректные данные')
        }

        if (response.status === 201) {
            return response.json()
        }
    })
}
export const registration = (name, login, password) => {
    return fetch(autHost, +'/login', {
        method: 'POST',
        body: JSON.stringify({ name: name, login: login, password: password }),
    })
}
