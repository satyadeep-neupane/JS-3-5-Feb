function checkAge() {
    const ageElement = document.getElementById("age");
    const resultElement = document.getElementById("new-result");

    var age = parseInt(ageElement.value);
    if (age < 18) {
        resultElement.innerHTML = "You are not old enough to vote";
    } else {
        resultElement.innerHTML = "You can vote";
    }

    ageElement.value = "";
}

function getFullDay() {
    const dayElement = document.getElementById("day");
    const resultElement = document.getElementById("result");

    switch (dayElement.value.toLowerCase()) {
        case "sunday":
        case "friday":
        case "saturday":
            resultElement.innerHTML = "weekend";
            break;
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            resultElement.innerHTML = "weekday";
            break;
        default:
            resultElement.innerHTML = "Invalid day";
    }
}

// 0 - 18 => A
// 18 - 35 => B
// 36 - 60 => C
// 60+ => D

function q1()
{
    const age = parseInt(document.getElementById("age"));
    const result = document.getElementById("result");

    if (age >= 0 && age < 18) {
        result.innerHTML = "A";
    }
    else if (age > 18 && age <= 35) {
        result.innerHTML = "B";
    }
    else if (age > 36 && age <= 60) {
        result.innerHTML = "C";
    }else if(age > 60)
    {
        result.innerHTML = "D";
    }else {
        result.innerHTML = "N/A";
    }
}

function q2()
{
    if(age <= 18)
    {
        result.innerHTML = "child";
    }else if(age > 60){
        result.innerHTML = "old";
    }else if(age > 18)
    {
        result.innerHTML = "young";
    }else{
        result.innerHTML = "N/A";
    }
}

// age < 18 => child
// age > 18 => young
// age > 60 => old
