// console.log(document);
// html doc은 자바스크립트가 됨
// const title = document.getElementById("title")

const title = document.querySelector('#title')
// id로 선택해 보겠다(#으로, CSS 선택자와 비슷)
// 클래스 선택(.title)  
// null: 존재하지 않음, querySelector 많이 쓸 것임
title.innerHTML = "Hi! From JS";
title.style.color = 'red'; // HTML을 자바스크립트로 바꿀 수 있음
document.title = "I own you now!";
console.dir(document);

// DOM(Document Objective Module)
// html에 있는 모든 요소를자바스크립트가 가져와 객체로 바꿈
// Nico에서 생성했던 객체들
// html태그를 가져다 객체로 만듦(console. 했을 때 나오는 것들)
// Document 에 있는 모든 것이 객체가 될 것임
// 모든 html이 객체가 됨
// 객체는 많은 키를 가지고 있음



// 우리가 찾게 될 모든 객체의 함수들은 DOM형태로 변경가능
// 페이지에서 자바스크립트로 선택한 것은 객체가 됨
// html을 DOM객체로 바꿀 수 있음
