const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad(){
    console.log('finished loading');
}



function paintImage(imgNumber){
    const image = new Image(); //새로운 이미지 객체 생성
    image.src = `images/${imgNumber+1}.jpg`; //Math.random() 함수가 0을 줄 수 있기 때문에 +1
    //${}은 문자열 반환
    image.classList.add("bgImage"); //새로 class 띄움, 새로 css에 추가
    body.appendChild(image);
    


}


function genRandom(){ //랜덤숫자 생성함수
    const number = Math.floor(Math.random() * 3);
    return number;
}



function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();