// 이벤트란?
// click, resize, submit, input change, load, before closing print 
// 중간에 가로챌 수 있음

const title = document.querySelector("#title");


// window.addEventListener("resize");

function handleResize(event){
    console.log(event);
    //이벤트를 다룰 함수 만들 때마다 자바스크립트는 자동적으로 함수를 객체에 붙임
    // console.log("I have been resized");
}

title.addEventListener("resize",handleResize(event));
// 특정 이벤트를 기다리는 역할
// 모든 이벤트를 기다리고 싶지 않음
// handleResize: 필요할 때 함수를 호출하라!(여기서는 사이즈가 변경될 때)
// handleResize(): 함수를 당장 호출하라
// form이나 링크를 클릭할 때 유용

