// function sayHi()
// {
//     console.log("hi");
// }

// function sayHello()
// {
//     console.log("hello");
// }

// console.log("Start");

// sayHi();
// sayHello();

// console.log("End");

// callback, delay(ms)

// function sayHi()
// {
//     setTimeout(() => {
//         console.log("hi");
//     }, 0);
// }

// console.log("start");
// sayHi();
// console.log("end");

// function add(a, b, cb) {
//     setTimeout(() => {
//         cb(a + b);
//     }, 3000);
// }

// function mul(a, b, cb) {
//     setTimeout(() => {
//         cb(a * b);
//     }, 3000);
// }

// console.log("start");

// add(3, 5, (s) => {
//     mul(s, 2, (result) => {
//         console.log(result);
//     });
// });



function add(a, b)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000);
    });
}

console.log("start")
console.log(add(3, 5));
console.log("end");