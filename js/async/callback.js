'use strict';

// JavaScript is synchronous. 동기적
// Execute the code block in order after hoisting.
// 호이스팅된 이후부터 코드가 작성한 순에 맞게 하나하나 동기적으로 실행
// hoisting: var, function declaration 선언들이 제일 위로 올라가는 것
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기
console.log('3'); //동기

// Synchronous callback 동기(동시 발생)
function printImmediately(print) {
  print();
} // hoisting 
printImmediately(() => console.log('hello')); // 동기

// Asynchronous callback 비동기
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
} // hoisting
printWithDelay(() => console.log('async callback'), 2000); // 비동기



// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'sujin' && password === '1234')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else if(user === 'sujin'){
        onSuccess({ name: 'sujin', role: 'admin' });
     } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');

userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);