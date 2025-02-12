const host = 'https://wedev-api.sky.pro/api/v1/mikhail-ermishin'

export function getComments() {
    return fetch(host + '/comments').then((response) => {
        return response.json()
    })
}

export function sendComment(name, text) {
    return fetch(host + '/comments', {
        method: 'POST',
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
