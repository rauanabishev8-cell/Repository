// "use strict"
// const calculator = document.querySelector("body");

// const btns = document.querySelectorAll(".btn-pad");

// const btnOne = document.querySelector("button");

// const output = document.querySelector("#output");

// let allnum = "";
// let shown = "";

// let arr = [];

// let res = null;


// function typeNumber(num){
    
//     if(shown==="0"){
//         shown = ""
//     }
//     if(num){
//         shown = shown + String(num)
//     }
//     if(allnum.endsWith("divide") && allnum.endsWith("multiply") && allnum.endsWith("plus") && allnum.endsWith("minus")){
//         shown = ""
//     }

//     if(allnum.endsWith("divide")){
        
//     }
    
//     allnum = allnum + String(num);

//     console.log(allnum)
//     console.log(shown)
//     output.innerText = shown

    
// }

// function clearAll(){
//     allnum = "0";
//     shown = "0";
//     output.innerText = allnum
// }


// function clearOne(){
//     if(allnum.length > 0){
//         allnum = allnum.slice(0, allnum.length-1)
//         console.log(allnum)
//     }
//     if(allnum.length === 0){
//         allnum = "0"
//     }
//     output.innerText = allnum
// }

// const str ="Yabloko"

// const newStr = str.slice(0, 6);


// console.log(newStr)

// function divide(){
//     allnum = allnum + "divide";

//     arr.push(Number(shown));
//     arr.push("divide");

//     shown = ""
//     console.log(arr);
// }

// function multiply(){
//     allnum = allnum + "multiply";
//     arr.push(Number(shown));
//     arr.push("multiply");

//     shown = ""
//     console.log(arr)


// }

// function minus(){
//     allnum = allnum + "minus";
//     arr.push(Number(shown));
//     arr.push("minus");

//     shown = ""
//     console.log(arr)
// }

// function plus(){
//     allnum = allnum +"plus";

//     if(arr.length === 0){
//         arr.push(Number(shown));
//         arr.push("plus");
     
//     }else if(arr.length === 1){
//         arr.push("plus");
//     }else if(arr.length === 2){
//         arr.push(Number(shown));
//         arr.push("plus");
//     }
    

    
//     // console.log(arr);

//     // if(arr.length === 4){
//     //     if(arr[1]==="minus"){
//     //         shown = arr[0] - arr[2]
//     //     }
//     //     if(arr[1]==="plus"){
//     //         shown = Number(arr[0]) + Number(arr[2])
//     //     }
//     //     if(arr[1]==="multiply"){
//     //         shown = arr[0] * arr[2]
//     //     }
//     //     if(arr[1]==="divide"){
//     //         shown = arr[0] / arr[2]
//     //     }
//     //     arr = [];

//     //     arr.push(Number(shown))
//     // }

//     output.innerText = shown;

//     console.log(arr)
// }

// // function complete(){
// //     arr.push(Number(shown));
// //     console.log(arr);
// //     res = arr[0];
// //     console.log(res);
// //     arr.forEach(x=>{

// //         if(x==="minus"){
// //             res = res - }else if(x==="plus"){

// //         }

// //     })


// //     output.innerText = String(res)
// // }



// // btnOne.innerText = "OP"

// /// tag - "body", "div"

// // class - ".btn", ".container"

// // id -  "#btn", "#red"

// // [2]

// // btns.forEach(b=>b.style.backgroundColor="violet")


// // for (let b of btns){
// //     b.style.backgroundColor = "red"
// // }

// // calculator.style.backgroundColor = "yellow"









// Это селектор вывода
const output = document.querySelector("#output");

let currentNumber = "0";
let previousNumber = "";
let operation = null;
let resetScreen = false;

// Функция при нажатии чисел
function typeNumber(num) {
  if (currentNumber === "0" || resetScreen) {
    currentNumber = String(num);
    resetScreen = false;
  } else {
    currentNumber += String(num);
  }

  output.innerText = currentNumber;
}

// Функция полной очистки
function clearAll() {
  currentNumber = "0";
  previousNumber = "";
  operation = null;
  resetScreen = false;
  output.innerText = currentNumber;
}

// Функция удаления одного символа (назад)
function clearOne() {
  currentNumber = currentNumber.slice(0, -1);
  if (currentNumber === "") {
    currentNumber = "0";
  }
  output.innerText = currentNumber;
}
function multiply (){
    operation = "*"
    previousNumber = currentNumber
    currentNumber = ""
}

function divide () {
    operation = "/"
     previousNumber = currentNumber
    currentNumber = ""
}

function plus(){
    operation = "+"
     previousNumber = currentNumber
    currentNumber = ""
}

function minus () {
    operation = "-"
     previousNumber = currentNumber
    currentNumber = ""
}
//Фукнция вычисления
function complete() {
  let res;

  switch (operation) {
    case "*":
      res = Number(previousNumber) * Number(currentNumber);
      break;

    case "/":
      if (Number(currentNumber) === 0) {
        res = "Ошибка";
      } else {
        res = Number(previousNumber) / Number(currentNumber);
      }
      break;

    case "+":
      res = Number(previousNumber) + Number(currentNumber);
      break;

    case "-":
      res = Number(previousNumber) - Number(currentNumber);
      break;

    default:
      alert ("Ты кажется попутал")
      return
    }

    // Преобразование res в строку 
    currentNumber = String(res)
    output.innerText = currentNumber;
    operation = null;
    previousNumber =""
}

// Функция для вынессения операторов 

//function setOperao(Operao) Дописать потом


// Высчитывает процент текущего числа
function getPercent(){
currentNumber = (Number(previousNumber)* Number(currentNumber)) / 100
output.innerText = currentNumber
}
