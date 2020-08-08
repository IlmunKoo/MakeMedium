const toDoForm = document.querySelector(".js-toDoForm"), //form은 이미 있는 const 명이므로 겹치지 않게 해 준다. js모듈 분리는 유튜브 클론코딩에서 찾아볼 수 있음
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList"); // html문서에서 class로 지정되었으므로 . 찍어준다

const TODOS_LS = 'toDos';

let toDos = [];
// 해야 할은 여러 개로 늘어날 수 있으므로 array로 받아야 함
// localStorage에 저장도 해야 하므로
// ls에 저장은 객체 형태로 저장


function deleteToDo(event){ //eventListener에서 올라옴
    // console.dir(event.target); //어떤 버튼이 눌렸는지 모름, target=>  콘솔에 그 버튼 띄움
    //또다른 문제, 눌린 버튼의 father(li id= "#")가 누군지 모름
    //console.dir를 통해 parentNode 찾음, 이를 다시 console.log로 찍는다
      // 항상 함수 잘 되는지 먼저 체크
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);  //node.removeChild : child remove mdn으로 검색
    const cleanToDos = toDos.filter(function(toDo){ //toDo는 toDos의 원소
        // console.log(toDo.id, li.id);  toDo.id는 숫자, li.id는 string이므로 동작x, parseInt로 정수형 변환
        return toDo.id !== parseInt(li.id);
    }); //모든 li에는 id가 있음
        //toDo리스트를 깨끗이
      //forEach에서 function을 실행하는 것 같이 각각의 item과 같이 실행
     // toDos가 true인 것들만 toDos를 return    }); //id가1인 toDos만 리턴
    //filter는 array의 모든 아이템을 톰해 함수를 실행
    // true인 아이템들만 가지고 새로운 array를 만듦
    toDos = cleanToDos //toDos는 const이므로 let으로 바꾼 후 수정, toDos는 오래된 버전이므로 최신버전으로 바꿔줌
    saveToDos(); //toDos 업데이트 후 저장해줌
}
//cleanTodos와 filter가 하는 일은 filterFn이 체크가 된 아이템들의 array를 주는 것임
// 방금 클릭한 id가 1이 아닌 경우 toDos 하고 싶을 때
// li밖에 없는 id인 toDos를 체크하고 싶음(우리가 지우고 싶은 것)


// filter와 function을 잘 기억!!
// list에 있는 모든 item을 위한 함수를 실행 








function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //로컬스토리지에 저장
    // setItem(키, 값);으로 저장 후 getItem(키)로 조회
    // JS는 로컬 스토리지에 스트링밖에 저장하지 못하므로
    // Object를 string으로 바꿔줘야 함
}






function paintToDo(text){
    const li = document.createElement("li");
    // html에서 li만들고 싶을 때 (빈 li 생성)
    const delBtn = document.createElement("button"); //빈 버튼 생성
    const span = document.createElement("span"); //텍스트 담을 변수
    const newId = toDos.length + 1;
   
    delBtn.innerText = "❌" //del버튼의 값: 이모티콘이 될 수 있음
    delBtn.addEventListener("click", deleteToDo);

    //text : submit function에서 온 값
    span.innerText = text //innerText: text를 엘리먼트에 추가하고 싶을 때
    li.appendChild(span); //
    li.appendChild(delBtn);
    li.id = newId; //li에 id 할당, 어떤 아이디 삭제할지 알기 위해
    toDoList.appendChild(li);   //직전에 만든 li를 넣어줌

    //엔터 누르면 li 생성, delete버튼과 span 생성
    // del버튼을 li안에 append, 마지막으로 li를 ul에 append


    const toDoObj = {
        text : text, //text라는 키에 함수의 text가 value로 옴
        id: newId
    };
    toDos.push(toDoObj);  // array 안에 element 하나를 넣어줌
    saveToDos(); //push 이후에 호출할 것, toDos가 비었으므로 저장할 것이 없음
}



function handleSubmit(event){ //submit이라는 이벤트 발생
    event.preventDefault(); 
    const currentValue = toDoInput.value; //submit으로 날아온 값을 변수에 저장
    //전에 한것과 똑같은 작업
    paintToDo(currentValue);

    //엔터치면 입력바 속 검색어사라지게 하고 싶음
    toDoInput.value = "";

}


function loadToDos(){ //로컬스토리지에서 todo정보 가져오는 역할
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){ 
        // loadedToDos가 string이라는 문제점->JSON(JavaScript Object Notation, 데이터 전달시 자바스크립트가 이를 다룰 수 있도록 object로 바꿔줌 )
        //local storage에 있던 것을 끌어와서 화면에 뿌려주기
        const parsedToDos = JSON.parse(loadedToDos); //string이던 것을 다시 Object로 바꿔줌
        parsedToDos.forEach(function(toDo){ //loadedToDos를 가져온 후 parse(가져온 것을 자바스크립트 Obj로 변환), toDo는 빈 리스트
            //forEach(function(toDo)~) :array를 위한 function!!
            paintToDo(toDo.text); //paintToDo(toDo.text에 대해) 실행
        }); // array(parsedToDos)에 담겨 있는 것들 각각을 한번씩 함수로 실행
    }
//이 form은 항상 showing, toDos === null(존재x)이면 할게없음, else필요x

}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();

//자바스크립트는 local storage에 있는 모든 데이터를 string으로 저장
// 그래서 우리 object를 string으로 변환시켜줘야 함
// 좋은 트릭: JSON.stringfy