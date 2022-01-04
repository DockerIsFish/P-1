
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USENAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();                     //브라우저의 기본 동작을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);  //form에 hiddem이라는 class 추가
    const username = loginInput.value;          //입력값 변수에 저장
    localStorage.setItem(USENAME_KEY,username);   //local storage에 저장
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;   //출력
    greeting.classList.remove(HIDDEN_CLASSNAME);//hidden 삭제
}


const savedUsername = localStorage.getItem(USENAME_KEY);

if(savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit)
}
else{
    paintGreetings(savedUsername);
}