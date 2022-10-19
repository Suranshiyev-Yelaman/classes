// function create(newFullName = "default name", newAge = 1, newAmail = "asd@mail.ru"){
//     return{
//         fullName: newFullName,
//         age: newAge,
//         email:newEmail
//     }
// }

// function showName(obj){
//     console.log(obj.fullName.split(' ')[1]);
// }

// let person2 = createPerson();
// showName(person2);




let user = {
    login:"yelaman",
    password: ["asd123", "zxc123"],
    location: {
        city: "Almaty",
        street: "Auezova",
    },
    loginFunc: function(){
        console.log(`${this.login} logged in`);
    }
}

user.loginFunc();