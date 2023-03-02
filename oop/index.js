class User{
    #email
    #pin

    constructor(email, pin)
    {
        if(isNaN(pin))
            throw("Pin is required");

        this.#email = email
        this.#pin = pin - 4
    }

    get email(){
        return this.#email
    }

    get pin(){
        return this.#pin + 4
    }

    // set pin(pin){
    //     this.#pin = pin - 4
    // }

    set pin(pin){
        let oldPin = parseInt(prompt("Enter old pin"))
        if(oldPin == this.#pin + 4)
        {
            this.#pin = pin - 4
        }else{
            alert("Incorrect pin")
        }
    }

    set email(email){
        this.#email = email
    }
}


try{
    const user = new User("Ram", 1111);
    console.log(user);
}catch(err)
{
    console.log(err);
}

// console.log(user.email)
// console.log(user.pin)

// console.log(user);

// user.pin = 5555;

// console.log(user.pin)
