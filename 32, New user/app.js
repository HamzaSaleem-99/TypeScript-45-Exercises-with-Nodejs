"use strict";
let current_user = ['taha', 'bilal', 'sufiyan', 'admin', 'hamza'];
let new_user = ['admin', 'hussain', 'arsalan', 'haris', 'anas'];
new_user.forEach((newUser) => {
    if (current_user.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new user.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
