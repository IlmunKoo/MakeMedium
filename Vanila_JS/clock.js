// 1. 항상 처음엔 init함수를 생성

const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");
// query selector는 element의 자식을 탐색
//이경우 js-clock class의 자식을 탐색

function getTime(){
    // 여기서 Date는 클래스, 여기서는 객체라고 생각하고 넘어감
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // 업데이트 보여주기 위함
    // clockTitle.innerText = `${hours< 10 ? `0${hours}`: hours}: ${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` :seconds}`;
    
    // 객체 안에 텍스트를 넣음
    // 삼항연산자(mini if) ? :
    // if seconds가 10보다 작으면 앞부분 실행, 거짓이면 뒷부분 실행
    // `${value}` : 템플릿 리터럴, 처리된 값을 문자열로 반환

}



function init(){
// (1)현재 시각 얻기
    getTime();
    setInterval(getTime, 1000);
    // setInterval(fn, 1000) 함수,실행할 시간 간격: 일정간격마다 함수 실행
    // 실시간 업데이트: 1초마다 갱신되도록 설정(setInterval)
}
init();