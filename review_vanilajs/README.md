0. 이름 치면 저장하는 기능

1. 실시간 시계 기능 구현


2. ToDoList 구현
(1) create
toDoList: 여러 개가 될 수 있으므로 array로 만들어줌.
array 안에 toDoObj로 push, 이를 forEach를 활용해 하나씩 paintToDo를 해 준다.

(2) delete
delBtn 만들 때 밑에 addEventListener를 만들어 준다.
delete은 두 가지 과정이 필요
ls에서 해당 항목 삭제, html에서 해당 항목 삭제
(2)-1
html에서 해당 항목 삭제하기 위해서는 event.target.parentNode

# target: event에서 어떤 버튼이 눌렸는지 모르므로 눌린 버튼이 뜨게 함
# parentNode: delBtn의 parent인 li가 id값을 가지고 있으므로 버튼의 부모노드를 찾는다.
# console.dir(event.target.parentNode) : 부모노드를 보여줌  
# delete child mdn=> removeChild()사용

(2)-2
toDoList 삭제
# toDos.filter()함수: forEach에서 function을 실행하는 것과 같이 각각의 item에 관해 실행, 조건에 맞는 item만 가지고 새 array 만듦
# toDo.id는 숫자, li.id는 string이므로 parseInt(li.id)로 바꿔준다. 
# html에서 하나 삭제했으므로 해당 li.id는 없을 것이고, ls에 있는 toDo.id는 남아 있을 것이므로
# filter로 돌면서 li.id(html에서 삭제된 id = btn.parentNode)와 다른 id가진 Obj(삭제되지 않은 id 가진 li) 리턴
# toDos = cleanTodos로 업데이트
# toDos는 const이므로 let을 바꿔준 후 코딩
# saveToDos로 저장

# filter 와 forEach 잘 기억
list에 있는 모든 item을 위한 함수를 실행

3. 날씨 받아오기
4. 위치 받아오기





# DOM: Document Object Model
자바스크립트로 제어하기 위한 객체 모델을 의미
window 객체: 창
Document 객체: 윈도우에 로드된 문서