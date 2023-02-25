// // let a = "red";

// // let color = ["red", "green", "blue", 1, 2, 3, 5];
// // let num = [1, 2, 3]


// // let choice = [1, "num"]

// // // console.log(color[1]);
// // // console.log(color.length);

// // // for(let i=0; i < color.length; i++){
// // //     console.log(color[i])
// // // }

// // for(let i in color){
// //     console.log(`${parseInt(i)+1}. ${color[i]}`);
// // }

// // // let i = 1
// // // for(let item of color)
// // // {
// // //     console.log(`${i}. ${item}`)
// // //     i++
// // // }


// // let fruit = ["apple", "mango", 1, "grapes", "banana"]

// // let i = 0
// // while(fruit[i] != 1)
// // {
// //     console.log(fruit[i])
// //     i++
// // }

// // for(let item of fruit)
// // {
// //     if(item == 1)
// //         break
    
// //     console.log(item)
// // }

// // for(let i = 0; i < fruit.length; i++)
// // {
// //     if(fruit[i] == 1)
// //         break
    
// //     console.log(fruit[i])
// // }


// // let a = 5;
// // let b = a;

// // a = 10;

// // console.log(a + b);

// // let arr = [1, 2, 3];
// // let arr2 = arr;

// // arr[1] = 10;

// // console.log(arr);
// // console.log(arr2);

// // let arr

// let str = " Hello World "
// console.log(str)
// console.log(str.trim());
// console.log(str.split("r"))


// let names = "ram, shyam, hari";

// let nameList = names.split(",");

// for(let nme of nameList)
// {
//     console.log(nme.trim())
// }


function count()
{
    let str = document.getElementById("my-text").value;
    str = str.trim()
    let words = str.split(" ")

    let len = 0;
    
    for(let item of words)
    {
        if(item != "")
            len++
    }
    
    document.getElementById("result").innerHTML = `Total Words: ${len}`
}