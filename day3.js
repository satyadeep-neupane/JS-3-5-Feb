// let num = 1;
// for (; ;) {

//     if (num % 2 == 0) {
//         console.log(`${num} is even`);
//     } else {
//         console.log(num + " is odd");
//     }
//     num++;

//     if(num > 100)
//         break;
// }

// var num = 11

// while(num <= 10)
// {
//     console.log(num)
//     num++;
// }

// var num = 11

// do{
//     console.log(num)
//     num++;
// }while(num <= 10)


// num = 1
// while(num <= 100)
// {
//     console.log(num)
//     num = num + 1
// }

// for(let year=2000; year<2030; year++)
// {
//     if(year % 4 === 0)
//         console.log(`${year} is a leap year`);
// }

// let year = 2000;
// while(year < 2030)
// {
//     if(year % 4 === 0)
//         console.log(`${year} is a leap year`);
//     year++;
// }

// year = 2000;
// do{
//     if(year % 4 === 0)
//         console.log(`${year} is a leap year`);
//     year++;
// }while(year < 2030)


function add()
{
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
    // let result = 0
    // while(num1 <= num2)
    // {
    //     result += num1;
    //     num1++;
    // }
    let result = 0;
    for(i = num1; i <= num2; i++)
    {
        result += i;
    }

    document.getElementById("result").innerHTML = "Result = " + result;
}

let choice;
do{
    choice = prompt("Press 1 to end");
    // if(choice == 1)
    //     break;
}while(choice != "1");

