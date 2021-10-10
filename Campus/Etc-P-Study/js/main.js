// 클래스가 .search인 요소를 찾아서 searchEl라는 변수에 할당 
const searchEl = document.querySelector('.search');
// 앞에서 이미 찾아놓은 searchEl안에 인풋을 찾아서 searchInputEl에 할당 
const searchInputEl = searchEl.querySelector('input');

// searchEl를 클릭하면 어떤 함수를 실행할거고 우리는 그 함수를 핸들러라 부른다.
searchEl.addEventListener('click',function() {
  // searchEl 라는 div 요소를 클릭하면 어떤 함수가 실행되는데 그 함수는
  searchInputEl.focus();
  // 인풋 요소에 포커스를 하게한다.
});

searchInputEl.addEventListener('focus', function(){
  // 클래스 포커스를 추가하겠다.
  searchEl.classList.add('focused');
  // setAttribute set = 설정하다 Attribute = html의 속성을 Attribute 라고 부른다.
  searchInputEl.setAttribute('placeholder','empty');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});