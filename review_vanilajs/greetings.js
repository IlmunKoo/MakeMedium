const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".js-greetings");
    //js-greetings가 계속 null이 뜸
    // 클래스가 제대로 선택x


const USER_LS = "currentUser", //로컬스토리지에서 불러온 이름
 SHOWING_CN = "showing"; //css에 있는 클래스 이름



function handleSubmit(event){ //eventListener로 받았으므로 event를 인자로 받아준다
    event.preventDefault(); // 검색어 사라지는 것 막음 
    //제출되면?
    const currentValue = input.value; //input에서 들어온 value를 저장
    paintGreetings(currentValue);
    saveName(currentValue);
}



function askForName(){
    form.classList.add(SHOWING_CN); //formclass를 보여서 제출 기다리게 함
    form.addEventListener("submit", handleSubmit); //submit이 오면 함수를 실행해라

}


function paintGreetings(text){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello, ${text}`;

    // showing(display: none)과 
    // classList.add()와 remove()를 이용해
    // 이름이 들어오면 숨겨줌
}

function saveName(text){
    localStorage.setItem(USER_LS,text); //LS에 USER_LS라는 이름으로 text 저장
}



function loadname(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        //유저이름 없을 때
        askForName();
    } else{ //있을 때 띄워주기
        paintGreetings(currentUser);
    }
}





function init(){
loadname();
}

init();