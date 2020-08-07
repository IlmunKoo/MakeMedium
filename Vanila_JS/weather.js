const weather = document.querySelector(".js-weather");
// span class ="js-weather" 지칭



const API_KEY = "426b6ab51201c39286faa181291edc47"; 
//날씨 정보 받아올 API
// API(Application Programming Interface)
// 다른 서버로부터 손쉽게 데이터 가져올 수 있는 수단
// 이 경우 데이터만이 목적임, 디자인같은 부분은 필요없음
// open API: 공짜로 데이터 얻을 수 있음
// 예컨대 URL 예제로 Request를 보내면 데이터 얻을 수 있음

const COORDS = "coords";


//새로고침 없이 JS를 이용해 특정 URL을 호출하는 방법(JS가 강력해진 이유)
// 웹사이트로 Request 보내고 응답을 통해 데이터 얻을 수 있음(refresh없이 가져온 데이터를 웹사이트에 적용 가능)
// 이메일 체크할 때 새로고침하지 않아도 오는 이메일 확인할 수 있는 이유
function getWeather(lat, lng){ //fetch()를 사용, https://넣어주고 `(backtick사용)
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
).then(function(response){
    return response.json(); //json을 response에서 가져오고 싶음, response에는 network정보만 보이므로
    //필요한 건 이 안의 내용
}).then(function(json){ //앞 함수에서 return받은 json을 인수로 다시 함수 실행
    const temperature = json.main.temp; // json에서 main항목의 temp를 가져와라
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`;

});
// API KEY를 통해 데이터를 너무 빡세게 요청하지 않는지 알 수 있음
// 공짜니 너무 많이 사용하게 해 줄수는 없음
}

//then: 데이터가 완전히 들어온 다음 함수를 호출(JS문법)
// fetch가 완료되지 않고 함수를 부르면 뒤에 함수만 실행되고 fetch는 완료되지 않을 수 있음


//받은 좌표 저장
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj)); //localStorage에서는 string밖에 읽지 못하므로 JSON.stringify(coordsObj) 
    //setItem: LS에 저장하는 메소드
}

function handleGeoSuccess(position){ //position 객체를 인자로 받음
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = { //좌표 객체 생성
        latitude,
        longitude  }; 
    // 밑과 같은 뜻을 간단히 표현
    // latitude : latitude,
    // longitude : longitude
    //자바스크립트에서 객체의 변수 이름과 key이름을 같게 저장할 때

  
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){ //좌표 받아오는 함수 , navigator라는 API 사용
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError); 
    // geolocation이라는 객체에서 함수 호출 
    //마우스 커서 이름에 대면 설명이 나옴
    //첫번째 인수에 성공시 실행 함수, 두번째인수에 실패시 함수
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    } else{ 
        const parsedCoords = JSON.parse(loadedCoords); //원래 string이기 때문에 object로 바꿔줌
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
        // local storage에 아무것도 없으면 getWeather함수가 실행
        //  local storage에 아무것도 없으면 askForCoords 실행,
        //이 함수 안에서 정상적으로 위치정보 가져오면 handleGeoSuccess 실행, 그 안에서 API최종 호출
        // 좌표값 이미 가지고 있는 경우 해놓은 것이 없음
    }
}


function init(){
    loadCoords();
}
init();


//에러: LS에 longtitude만 저장되어 있어서 계속 에러가 떴다. 이를 삭제해주자 정상적인 값이 들어왔다. 
// network패널에서는 우리가 request한 내용을 보여줌, 이게 우리가 request한 내용]
// by geo coordinates가 있는 문서에 보면
// metirc(미터법)을 사용하고 싶으면 units=metric으로 사용하라고 되어 있음
