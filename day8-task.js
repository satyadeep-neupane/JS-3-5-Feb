const users = [];

function User(name, age) {
    return {
        name,
        age,
        intro: function intro() {
            alert(`Hi! I am ${this.name}. I am  ${this.age} years old!`);
        },
    };
}

function formatUser(index, user) {
        return `
        <li>
            ${index+1}. ${user.name}
            <ul>
                <li>Age: ${user.age}</li>
                <li><button onclick="${user.intro}">Say hi</button></li>
            </ul>
        </li>`;
}

// function intro(fn)
// {
//     console.log(fn)
//     fn()
// }

function createUser() {
    const nameElement = document.getElementById("name");
    const ageElement = document.getElementById("age");

    const user = User(nameElement.value, ageElement.value);
    users.push(user);

    nameElement.value = "";
    ageElement.value = "";

    document.getElementById('user-list').innerHTML = users.map((user, index) => formatUser(index, user))
}
