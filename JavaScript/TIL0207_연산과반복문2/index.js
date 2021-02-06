// Equality

const stringFive = '5'; // 스트링타입 
const numberFive = 5; // 넘버타입



// Loose Equality 타입을 변경해서 검사한다. 
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);


// Strict Equality 타입을 신경써서, 타입이 다르면 넌 다른 타입이야라고 알려준다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// if 

const name = 'minhee';

if (name === 'minhee') {
  console.log("그래너는민희지")
} else if (name === 'Viva') {
  console.log("건승하길바란다")
} else {
  console.log("넌누구니")
};

// if를 더 간단하게 써보자 

console.log(name === 'minhee' ? 'yes' : 'no');

// Switch Operators 

// const browser = 'IE';

// switch (browser) {
//   case 'IE': console.log("go Away");
//     break;
//   case 'Chrome': console.log("LoveYa");
//     break
//   case 'Firefox': console.log("okok");
//     break
//   default: console.log("same All");
//     break
// }

const browser = 'IE';

switch (browser) {
  case 'IE': console.log("go Away");
    break;
  case 'Chrome':
  case 'Firefox': console.log("LoveYa");
    break
  default: console.log("same All");
    break
}

// ## ** whill Loop **

let i = 3; //

while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

do {
  console.log(`do while:${i}`);
  i--;
} while (i > 0);


for (let i = 3; i > 0; i = i - 2) {
  console.log("inline variable for: ${i}");
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}


for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  } console.log(`q1. ${i}`);
}

for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break
  } console.log(`q2.${i}`);
}