let myArray = [1, 2, 3, 4, 5]

let userInput = document.getElementById("user-input");
let arrayList = document.getElementById("list-item");

function reRender()
{
    arrayList.innerHTML = myArray
    userInput.value = ""
}

function addToBack(){
    let newItem = userInput.value
    if(newItem !== '')
        myArray.push(newItem)

    reRender()
}

function removeFromBack()
{
    myArray.pop();
    reRender()
}

function addToFront(){
    let newItem = userInput.value
    if(newItem !== '')
        myArray.unshift(newItem)

    reRender()
}

function removeFromFront()
{
    myArray.shift();
    reRender()
}

reRender()

// console.log(myArray.splice(3, 0, 5));
// console.log(myArray)

// console.log(myArray.slice(2, 3));
// console.log(myArray)