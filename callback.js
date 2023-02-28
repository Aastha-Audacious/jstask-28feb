// 1. Register
// 2. Send welcome email
// 3. Login
// 4. Get user data
// 5. Display user data

function register(callback){
    setTimeout(()=>{
        console.log("Register done");
        callback();
    }, 1000);
}

function sendEmail(callback){
    setTimeout(()=>{
        console.log("Mail sent");
        callback();
    }, 1000);
}

function login(callback){
    setTimeout(()=>{
        console.log("Login done");
        callback();
    }, 1000);
}

function getUserData(callback){
    setTimeout(()=>{
        console.log("Got user data");
        callback();
    }, 1000);
}

function displayUserData(callback){
    setTimeout(()=>{
        console.log("Display user data");
    }, 1000);
}

//callback hell - nesting function
register(function(){
    sendEmail(function(){
        login(function(){
            getUserData(function(){
                displayUserData();
            });
        });
    });
});


console.log("Other operations!")




