let userRole = "Employee";
let accessLevel;
let isLoggedIn = true;
let userMessage;


if(isLoggedIn){
    if(userRole === "Admin"){
        userMessage = "Welcome, Admin!";
    }
    else{
        userMessage = "Welcome, User!";
    }    
}
else{
    userMessage = "Please log in to access the system.";
}


console.log("User Message:", userMessage);


let userType = "manager";
let userCategory;

switch(userType){
    case "admin": userCategory = "Administrator";
    break;
    case "manager": userCategory = "Manager";
    break;
    case "subscriber": userCategory = "Subscriber";
    break;
    default: userCategory = "Unknown";
}

console.log(userCategory);

let isAuthenticated  = false;
let authenticationStatus = isAuthenticated === true ? "Authenticated" : "Not Authenticated";

console.log(authenticationStatus);



