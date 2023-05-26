'use strict';

// JSON
// JavaScript Object Notation
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization(직렬화) and transmission(전송) of data between the network the network connection
// - independent programming language and platform 언어, 플랫폼 상관없이 사용가능

// 1. Object to JSON
// stringify(obj) : object를 JSON으로 
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  //symbol: Symbol('id'),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // symbol, jump 함수는 포함 X

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json) : JSON을 object로 변환
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj1 = JSON.parse(json);
console.log(obj1);

// console.log(obj1.birthDate.getDate()); 에러 

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); 
// object를 JSON으로 변환할 때(stringify)는 함수 포함 X 그래서, JSON을 object(parse)로 다시 변환할 때도 함수(메서드) 포함X

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());