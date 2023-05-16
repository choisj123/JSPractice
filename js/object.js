'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

const name = 'ellie';
const age = 4;

print1(name, age);

function print1(name, age){
  console.log(name);
  console.log(age);
} // 관리하기 어려움

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax / 클래스

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 }; // object 선언 및 할당
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string!!!
console.log(ellie.name); // 코딩하는 그 순간 그 key에 해당하는 값을 받아오고 싶을 때 => 코딩할때 사용!
console.log(ellie['name']); // 정확하게 어떤 key가 필요한지 모를때, runtime에서 결정될 때 => 실시간으로 원하는 값을 얻어올 때 
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// 사용자한테 key값을 받아와서 사용할 때 !!
// 동적으로 key의 value를 받아올 때 
function printValue(obj, key) {
  console.log(obj.key); // undefined
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

// 4. Constructor Function 
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // true 
console.log('age' in ellie); // true
console.log('random' in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj) 
console.clear(); 
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable) 배열, 배열리스트(순차적)
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++){
//  console.log(array[i]);
// }
for (let value of array) {  
  console.log(value);
}

// 7. Fun cloning 💗
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user; // user2와 user는 같은 곳을 참조
// user2.name = 'coder'; // 그래서 하나를 바꾸면 다 바뀜
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
  // key        // value
}
// console.clear();
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);