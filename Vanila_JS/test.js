// HTML에서는 HTML파일만, CSS에선 CSS 파일만, 자바스크립트는 로직처리
// 자바스크립트가 스타일 처리 원치 않음

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked"; //CSS에서 clicked라는 클래스를 문자에 담음

function handleClick(){
    // if(currentClass !== CLICKED_CLASS){
    //     title.classList.add(CLICKED_CLASS);
    // } else{ 
    //     title.classList.remove(CLICKED_CLASS); 
    // }
    //이렇게하면 버튼 누를 때 커서가 사라짐
    title.classList.toggle(CLICKED_CLASS);

    // toggle함수와 정확히 같은 작업
    // const hasClass = title.classList.contains(CLICKED_CLASS); 먼저 clicked되어 있는지 확인
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS); 
    // } else{
    //     title.classList.add(CLICKED_CLASS);
    // }
}

// 초기화 함수(색)
function init(){
    title.addEventListener("click", handleClick);
}

init();

function handleOffline(){
    console.log("lalala");
}

function handleOnline(){
    console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
// queryselector가 무엇인지 : 자바스크립트로 DOM 선택(CSS스타일 선택자로 DOM 선택)
//돔이란 <div id = "app"></div>와 같은 것을 말함
// addEventListener의 사용
// classlist의 사용
// 클래스를 조작하는 매서드
// classList.add() : 클래스를 삽입
// classList.remove() : 클래스를 제거 