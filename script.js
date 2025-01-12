const button = document.getElementById("add");
const name = document.getElementById("name");
const list = document.getElementById("list");
const comment = document.getElementById("comment");
const date = new Date();


const comments = [
{name :"Глеб Фокин", like :1, text: "Это будет первый комментарий на этой странице",date:"10.02.24 12:18", isLike:false },
{name :"Варвара Н", like :0, text: " Мне нравится как оформлена эта страница! ❤",date:"13.02.24 19:44", isLike:false}
]

const initClickComment = () => {
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


const renderComments = () => {
const commentsHtml = comments.map((comments, index) => {
return `<li data-li = "${index}" class="comment">
      <div class="comment-header">
        <div>${comments.name}</div>
        <div>${comments.date}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${comments.text}
        </div>
      </div>
      <div class="comment-footer">
         <div class="likes">
          <span class="likes-counter">${comments.like}</span>
          <button class="like-button ${comments.isLike ? "-active-like":""}" data-index = "${index}"></button>
        </div>
      </div>
    </li>`
}).join("");
list.innerHTML = commentsHtml;
name.value = "";
comment.value ="";


initEventListeners();
initClickComment();
}

renderComments();





function  initEventListeners ()  {

document.querySelectorAll('.like-button').forEach(el => 
el.addEventListener('click',  () => makeLike(el,)) 


);
add();

}


function add () {
button.addEventListener('click', function (e) {


if (isEmptyField(name) || isEmptyField(comment)) {
  return false;

}

comments.push({name: name.value.replaceAll(">","&#62").replaceAll("<","&#60"), date: getNowDate(), text:comment.value.replaceAll(">","&#62").replaceAll("<","&#60"), like: 0});


renderComments();

});
}

function makeLike(el) {
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

function getNowDate() {
const date = new Date();
  return date.toLocaleTimeString('ru-RU', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: "2-digit",
  minute: "2-digit"
});
}

function isEmptyField(field) {
  return field.value === "";


}