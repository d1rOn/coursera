// let userRole = "admin";
// let accessLevel;

// if (userRole === "admin") {
//     accessLevel = "Full access granted";
// } else if (userRole === "manager") {
//     accessLevel = "Limited access granted";
// } else {
//     accessLevel = "No access granted";
// }

// console.log("Access Level:", accessLevel);

// let isLoggedIn = true;
// let userMessage;

// if (isLoggedIn) {
//     if (userRole === "admin") {
//         userMessage = "Welcome, Admin!";
//     } else {
//         userMessage = "Welcome, User!";
//     }
// } else {
//     userMessage = "Please log in to access the system.";
// }

// console.log("User Message:", userMessage);

// let userType = "subscriber";
// let userCategory;

// switch (userType) {
//     case "admin":
//         userCategory = "Administrator";
//         break;
//     case "manager":
//         userCategory = "Manager";
//         break;
//     case "subscriber":
//         userCategory = "Subscriber";
//         break;
//     default:
//         userCategory = "Unknown";
// }

// console.log("User Category:", userCategory);

// let isAuthenticated = true;
// let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

// console.log("Authentication Status:", authenticationStatus);


//Practical task:
let userRole = prompt("Enter your role (employee, enrolled member, subscriber, non-subscriber):").toLowerCase();
let accessMessage;

if (userRole === "employee") {
    accessMessage = "You have full access to the Diet Services.";
} else if (userRole === "enrolled member") {
    accessMessage = "You have access to the Diet Services and one-on-one consultation with a dietitian.";
} else if (userRole === "subscriber") {
    accessMessage = "You have partial access to the Diet Services.";
} else if (userRole === "non-subscriber") {
    accessMessage = "Please register or subscribe to access the Diet Services.";
} else {
    accessMessage = "Invalid role. Access denied.";
}

console.log("Access Message:", accessMessage);

let isLoggedIn = true;
let greeting;

if (isLoggedIn) {
    if (userRole === "employee" || userRole === "enrolled member") {
        greeting = "Welcome back, valued member!";
    } else if (userRole === "subscriber") {
        greeting = "Welcome, subscriber!";
    } else {
        greeting = "Welcome! Please consider subscribing for more access.";
    }
} else {
    greeting = "Please log in to access the system.";
}

console.log("Greeting:", greeting);

let userCategory;

switch (userRole) {
    case "employee":
        userCategory = "Staff";
        break;
    case "enrolled member":
        userCategory = "Program Member";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    case "non-subscriber":
        userCategory = "Guest";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authStatus);
