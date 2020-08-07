const form = document.querySelector(".js-form"),  //클래스, 태그, 아이디 다 가져올 수 있음
    input= form.querySelector("input"),
    greetings = document.querySelector(".js-greetings");

// 쿼리셀렉터: 찾은 첫번째 것 가져옴
// 쿼리셀렉트 올: 찾은 모든 element의 array([])를 가져옴()
// array안에 하나의 엘리먼트 가져오는 것이 귀찮아서 잘 안씀

const USER_LS = "currentUser", //css에 있는 클래스 이름 가져옴
    SHOWING_CN = "showing";

function handleSubmit(event){
    event.preventDefault();    //디폴트 이벤트: form에 입력 후 엔터치면 입력한 것 사라짐
    const currentvalue = input.value; //input창의 값을 currentValue에 집어넣어라
    paintGreetings(currentvalue); //html에 이름이 뜨게 해라
    saveName(currentvalue)
}

// event가 발생하면 form(root)에서 일어남
// form을 제출하는 event가 발생하면 event가 계속 위로 올라감(document가지)

function askForName(){
    form.classList.add(SHOWING_CN); 
    // 유저이름이 저장된 것이 없을 때 "showing"을 드러내라
    form.addEventListener("submit", handleSubmit);
}


// 인자로 text를 받아줌, 색칠해주는 함수
function paintGreetings(text){
    form.classList.remove(SHOWING_CN); //텍스트를 색칠하려면 form폼을 숨겨야 함
    greetings.classList.add(SHOWING_CN); // 글자 클래스를 보임
    greetings.innerText = `Hello ${text}`;

}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS); //로컬스토리지에서 가져온 유저
    if (currentUser === null){ //유저가 없을 때
        askForName();
    } else{ //유저가 있을 때 
        paintGreetings(currentUser);

    }
}




function init(){
loadName();
}

init();

// local storage: 작은 정보를 사용자의 컴퓨터에 저장
 
//누군가 submit하면 painGreetings, saveName()