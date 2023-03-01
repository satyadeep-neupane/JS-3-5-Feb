// let name = "Hari";

// const obj = {
//     name: name,
//     age: 12,
//     intro: function() {
//         console.log("My name is " + this.name);
//     }
// }

function User(name, age){
    return{
        name,
        age,
        intro: function(){
            console.log("My name is " + this.name + " Age=" + this.age);
        }
    }
}

let user1 = User("Ram", 12);
// const user2 = User("Hari", 33);

// let user1;
user1.intro();

// user2.intro();

console.log(user1?.name)
