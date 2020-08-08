const timeContainer = document.querySelector(".js-clock"),//js-clock 클래스의 h1을 불러옴
     timeHolder = timeContainer.querySelector("h1");


function getTime(){
    const date = new Date();  //Date라는 객체에서 받아옴, const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    //html에 직접 글씨쓰기: querySelector로 받아와서 innerText사용
    timeHolder.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    //삼항연산자: 10보다 작으면 ?뒤 수행, 크면 : 뒤 수행
}





function init(){
    getTime();
    setInterval(getTime, 1000); //getTime을 여러 번 부르니 const도 괜찮음
}

init();