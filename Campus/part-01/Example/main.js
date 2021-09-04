let boxEL = document.querySelector('.box');

console.log(boxEL);

boxEL.addEventListener('click',function(){
  console.log("click했구나?!")
});


boxEL.classList.remove('active');
let isContains = boxEL.classList.contains('active');

console.log(isContains);



