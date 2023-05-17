// Q1. make a string out of an array
// 배열을 String으로 
{
    const fruits = ['apple', 'banana', 'orange'];

    console.log(fruits.toString());
    console.log(fruits);

    const result = fruits.join('/');
    console.log(result);
  }
  
  // Q2. make an array out of a string
  // String을 배열로
  // 구분자 필수 인자!
  {
    const fruits = '🍎, 🥝, 🍌, 🍒'; // String

    const result = fruits.split(',');
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse()); // 배열 자체를 변화시킴!
    console.log(array); 
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];

    const newArray = array.concat();
    console.log(newArray);

    // slice(시작 인덱스, 마지막 인덱스 + 1 (마지막 인덱스는 배재))
    // 원하는 특정 부분 리턴 , 배열 자체 변화 X
    const slice = array.slice(2, 5);
    console.log(slice);
    console.log(array);

    // splice(시작, 개수)
    // 배열 자체 데이터 삭제 + 삭제한 데이터 리턴
    const splice = array.splice(0,2); // 배열 자체에서 데이터 삭제
    console.log(splice); // 삭제한 값 저장
    console.log(array); // 삭제한 값 제외한 배열
  }
  

  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    // for(let i = 0; i < students.length; i++){
    //     if(students[i].score = 90){
    //         console.log(students[i].name)};
    // }

    const Student = students.find(function(student, index){
        console.log(student, index)
    });

    const result = students.find((student)=> student.score === 90);
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
  }
  
  // Q9. compute students' average score
  {
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
  }