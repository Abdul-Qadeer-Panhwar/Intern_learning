// Array Map Method

var number = [2, 3, 4, 5, 6];
var double = number.map((num) => num * 2);
console.log(double);

const array = [4, 5, 6];
const result = array.map((value, index) => {
  console.log(value, index);
  return value + index;
});
console.log(result);

const array1 = [
  { fname: "Ali", lname: "Akkbar" },
  { fname: "Muhammad", lname: "Haris" },
  { fname: "Siraj", lname: "Razar" },
];
const result4 = array1.map((name) => {
  return name.fname;
});
console.log(result4);
//Array Filter Method

var number2 = [2, 33, 44, 15, 26];
var result1 = number2.filter((age) => {
  return age > 18;
});
console.log(result1);

// Array Reduce Method

var number3 = [1, 2, 3, 5, 2, 1];
var result3 = number3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(result3);

var reduce1 = [2, 1, 3];
var result5 = reduce1.reduce((current, sum) => {
  return current + sum;
});
console.log(result5);

var students = [
  { name: "Ali", grade: [14, 98, 56] },
  { name: "Raza", grade: [67, 58, 86] },
  { name: "Ahmed", grade: [84, 48, 86] },
];

let result6 = students.map((student) => {

  let sum = student.grade.reduce((acc, grade) => acc + grade, 0);

  let avg = sum / student.grade.length;

  return { name: student.name, avg: avg };
});

console.log(result6);

function prom(a, b) {
  return new Promise(function (resolve, reject) {
    console.log("Fetching data, please wait...");
    setTimeout(() => {
      if (b !== 0) {
        var c = a / b;
        resolve(`Your Answer : ${c}`);
      } else {
        reject("Failed to calculate: Division by zero error");
      }
    }, 3000);
  });
}

prom(8, 2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
