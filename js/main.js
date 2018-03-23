function validateForm() { 
    let user = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (user.length < 1){
       alert("Invalid Username");
        console.log("missing username");
}      
    if (email.length < 1){
       alert("Invalid Email");
        console.log("missing email");       
}
    if (message.length < 1){
       alert("Invalid Message");
        console.log("missing message");
}else{
    console.log("form filled in properly");
}
}