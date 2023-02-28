// 1. Register
// 2. Send welcome email
// 3. Login
// 4. Get user data
// 5. Display user data

function register(callback){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // reject("Error while registering...");  //for error
            console.log("Register done");
            resolve();
        }, 1000);
    });
}

function sendEmail(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Mail sent");
            resolve();
        }, 1000);
    });
}

function login(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Login done");
            resolve();
        }, 1000);
    });
}

function getUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Got user data");
            resolve();
        }, 1000);
    });
}

function displayUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Display user data");
            resolve();
        }, 1000);
    });
}

//callback hell - nesting function
// register(function(){
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData();
//             });
//         });
//     });
// });


// register().then(()=>{}) //anonumous function


// function chaining
register()
.then(sendEmail)
.then(login)
.then(getUserData)
.then(displayUserData)
.catch((err)=>{
console.log("Error: ",err);   //error handling
});

console.log("Other operations!")




