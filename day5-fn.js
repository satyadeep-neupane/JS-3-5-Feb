// function add(num1=0, num2=0){
//     let result = num1 + num2;
//     return result
// }

// // function subtract(num1, num2){
// //     let result = num1 - num2;
// //     return result
// // }

// // console.log(`Sum = ${add(10)}`);
// // console.log(`Difference = ${subtract(10, 20)}`);

// // 10 + 20 - 5

// // console.log(`Result = ${subtract(add(10, 20), 5)}`);


// // console.log(add())

// function sayHi()
// {
//     console.log("Hi")
// }

// let welcome = user => console.log(`Welcome ${user}`);

// welcome("Ram")

let add = (num1, num2) => num1 + num2
let subtract = (num1, num2) => num1 - num2

function calculate(num1, num2, operation)
{
   return operation(num1, num2)
}

function run(num1, num2, sym)
{
    let fn
    if(sym == "+")
        fn = add
    else
        fn = subtract;
    
    console.log(calculate(num1, num2, fn))
}

run(10, 20, '+')
run(10, 20, '-')
