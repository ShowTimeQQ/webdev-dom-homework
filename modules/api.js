import {renderComments} from"./renderComments.js";
import { updateComments } from "./newComments.js";

export function getComments() {
    fetch('https://wedev-api.sky.pro/api/v1/mikhail-ermishin/comments', {
    })
    .then((respons) => {
    return respons.json();
    })
    .then((data) =>{
    updateComments(data.comments)
    renderComments()
    
    })
    }


    export function sendComment () {
        const commentsEl = document.getElementById("comment")
        const name = document.getElementById("name");
        
        
        
        const newComments = 
        { "name":name.value.replaceAll(">","&#62").replaceAll("<","&#60"),
           "text":commentsEl.value.replaceAll(">","&#62").replaceAll("<","&#60") };
        
        
         fetch('https://wedev-api.sky.pro/api/v1/mikhail-ermishin/comments' ,{
                method:"POST",
                body: JSON.stringify(newComments) ,
        
                })
                .then((respons) => {
                  return respons.json()
        
                })
                .then((text) =>{
                console.log(text)
                getComments()
                })
        }