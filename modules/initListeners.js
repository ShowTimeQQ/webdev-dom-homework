import {renderComments} from "./renderComments.js";
import {comments} from "./comments.js";
import { updateComments } from "./newComments.js";

const button = document.getElementById("add");
const name = document.getElementById("name");

fetch('https://wedev-api.sky.pro/api/v1/mikhail-ermishin/comments', {
})
.then((respons) => {
return respons.json();
})
.then((data) =>{

updateComments(data.comments)
renderComments()


})


export const initClickComment = () => {
    const commentsElements = document.querySelectorAll('.comment');

    for (const commentElement of commentsElements  ) {
      commentElement.addEventListener ("click" , (event) => {
        

        const indexli = commentElement.dataset.li;
        const currentComment = comments[indexli];
        comment.value = `${currentComment.name} > ${currentComment.text}`;
       
});

    }
    event.stopPropagation();
  }

   export function makeLike(el) {
      const commentIndex = el.dataset.index
      console.log(commentIndex);
      
      const commentObject = comments[commentIndex];
      if (commentObject.isLike === true) {
      commentObject.like -= 1;
      }
      else {
      commentObject.like += 1;
      }
      commentObject.isLike =!commentObject.isLike;
      renderComments();
      }

    
      export function add () {
      
        button.addEventListener('click', function (e) {
        
        
        if (isEmptyField(name) || isEmptyField(comment)) {
          return false;
        
        }
        const newComments = 
        { "name":name.value.replaceAll(">","&#62").replaceAll("<","&#60"), "date": getNowDate(), "text":comment.value.replaceAll(">","&#62").replaceAll("<","&#60"), like: 0};
        
        fetch('https://wedev-api.sky.pro/api/v1/mikhail-ermishin/comments' ,{
        method:"POST",
        body: JSON.stringify(newComments) ,

        })
        .then((respons) => {
          return respons.json()

        })
        .then((text) =>{
          updateComments(text.Comments)
          
        })
        renderComments();
        })
      }
    

     export function  initEventListeners ()  {

        document.querySelectorAll('.like-button').forEach(el => 
        el.addEventListener('click',  () => makeLike(el,)) 
        
        
        );
        add();
        
        }

        export function isEmptyField(field) {
            return field.value === "";
          
          
          }

          export function getNowDate() {
            const date = new Date();
              return date.toLocaleTimeString('ru-RU', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: "2-digit",
              minute: "2-digit"
            });
            }

  
  