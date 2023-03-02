// let num1 = parseInt(prompt("Enter num1"));
// let num2 = parseInt(prompt("Enter num2"));

// try{
//     if(num2 == 0)
//     {
//         throw("Divizion by Zero Exception");
//     }
    
//     let quotient = num1 / num2;
//     alert(quotient);
// }catch(err)
// {
//     alert(err);
// }

function parse(str)
{
    try{
        console.log(JSON.parse(str));
    }catch(err)
    {
        console.log("Invalid string");
    }
}

// JSON.stringify(obj) // string
// JSON.parse(str) // obj

// parse('{"name":"John"}');
parse("{'name':'John'}");
