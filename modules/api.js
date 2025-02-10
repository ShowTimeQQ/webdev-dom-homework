const host = 'https://wedev-api.sky.pro/api/v1/mikhail-ermishin'

export function getComments() {
   return  fetch(host + '/comments')
    
        .then((respons) => {
            return respons.json()
        })
        
}
  


     
export function sendComment(name,text) {
      return fetch(host +'/comments', {
        method: 'POST',
        body: JSON.stringify({
            text, 
            name,
            forceError: true,
        }),
     }).then((respons) => {
        if (respons.status === 500) {
            throw new Error("Ошибка сервера")
        }
        if (respons.status === 400) {
            throw new Error("Неверный запрос")
     }
     if (respons.status === 201) {
      return response.json()
 }
    })
}
       


