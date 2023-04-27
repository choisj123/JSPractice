// 1. use strict
'use strict';

// 2. Variable
let globalName = 'global name';
console.log(globalName);
{
    let name = 'sujin';
    console.log(name);
    name = 'hello';
    console.log(name);

    console.log(globalName);
}
console.log(globalName);
console.log(name);

// var (don't ever use this!)
// var hoisting : 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것
//  (move declaration from bottom to top)
// has no {} block scope
console.log(age);
age = 4;
console.log(age);
var age;

{
    age = 5;
    var age;
}
console.log(age);

// name = 4;
// let name;

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes


// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);


// symbol : create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
// 스트링이 같아도 다르게 인식함

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
// console.log(`value : ${symbol1}, type : ${typeof symbol1}`);
// symbol은 바로 출력하면 에러 뜸!
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);
// 스트링으로 변환해서 출력!

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
console.log(`value: ${ellie}, type: ${typeof ellie}`);
console.log(`value: ${ellie.age}, type: ${typeof ellie.age}`);
ellie.age = 21;
console.log(`value: ${ellie.age}, type: ${typeof ellie.age}`);

// 5. Dynamic typing: dynamically typed language
// 변수를 선언할 때 어떤 타입인지 선언하지않고 런타임, 프로그램이 동작할 때 
// 할당된 값에 따라서 타입이 변경될 수 있다
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); // 에러
// => TypeScript가 나온 배경!!! Javascript 위에 type이 올라간 느낌!