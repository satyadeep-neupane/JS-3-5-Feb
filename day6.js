function sayHi(name)
{
    return "Hi, " + name;
}

function sayBye(name)
{
    return "Bye, " + name;
}

function display(getMsg, name)
{
    console.log(getMsg(name))
    alert(getMsg(name))
}

function takeAction(type)
{
    let username = document.getElementById("name").value;
    if(username == "")
        return;

    switch(type){
        case "hi":
            display(sayHi, username)
            break;
        case "bye":
            display(sayBye, username)
            break;
        default:
            console.log("Invalid type");
    }
}