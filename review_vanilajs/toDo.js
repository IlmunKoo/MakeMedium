const   toDoForm = document.querySelector(".js-todoForm"), //form이나 input이 앞의 js와 겹치므로 이름 다르게 해야 함.
toDoInput = toDoForm.querySelector("input"),//유튜브 클론코딩에서 모듈 분리 배우자
toDoList = document.querySelector(".js-toDoList");

// 해야할 일 생성해야 할 때마다 toDos 라는 array에 추가되도록 함, 할 일은 여러 개일  수 있으므로 리스트 안 저장
let toDos = [];
// 그러기 위해서는 toDoObj라는 객체형태로 추가 필요

const TODOS_LS = "toDos";

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); //딕셔너리 형태로 저장, 키값도 같이 넣어줘야 함(local storage는 string만 인식 가능)
}


function deleteTodos(event){
    //어떤 버튼이 눌렸는지 알기 위해서
    // console.dir(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode; //child node
    toDoList.removeChild(li); //html에서 직접 삭제

    //html에서 삭제했으니 LS에서 삭제할 차례
    const clearToDos = toDos.filter(function(toDo){ //toDos 리스트에서 원소인 toDo하나씩 꺼내서 같으면 리턴, clearToDos에 저장
        return toDo.id !== parseInt(li.id) ; //li.id는 string, toDo.id는 int
        // console.log(toDo.id, li.id) li.id = "1" toDo.id 는 1, 2,3, ...
    });
    toDos = clearToDos //const에 대입은 불가이므로 let으로 바꿔준다
    saveToDos();
}

//html에서 빈 li, span, detBtn 생성
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodos);
    span.innerText = text;

    li.appendChild(span);  
    li.appendChild(delBtn);
    li.id = newId;

    toDoList.appendChild(li);

    //span과 delBtn을 li에 appendChild하고, 마지막으로 li를 appendChild
    const toDoObj= {
        text : text,
        id : newId
    }
    toDos.push(toDoObj);
    saveToDos(); //ToDo 저장하라고 하면 되므로 인수 필요 없음
}




function handleSubmit(event){
    event.preventDefault();
    const inputValue = toDoInput.value;
    paintToDo(inputValue);
    // saveToDo(inputvalue);
    toDoInput.value = "";
}



//li, span, detBtn 생성
function loadToDos(){ //string으로 저장했던 값을 다시 parse로 객체로 변환
    const loadedToDo = localStorage.getItem(TODOS_LS);
    if (loadedToDo !== null){ //null이 아니어도 input창은 계속 띄워놓을 것이므로 분리 의미 없음
        // localStorage에서 정보 끌어와서 html에 뿌리겠다!
        const  parsedToDo = JSON.parse(loadedToDo); 
        parsedToDo.forEach(function(toDo){
            paintToDo(parsedToDo.text);
        });
        //모든 toDoFunction에 대해  실행
    }
}


function init(){
loadToDos();
toDoForm.addEventListener("submit", handleSubmit);
}

init();