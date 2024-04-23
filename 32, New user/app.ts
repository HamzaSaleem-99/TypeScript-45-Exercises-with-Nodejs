let current_user: string[]= ['taha','bilal','sufiyan','admin','hamza'];
let new_user: string[] = ['admin','hussain','arsalan','haris','anas'];
new_user.forEach((newUser) => {
    if(
        current_user.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ) {
        console.log(`${newUser} will need to enter a new user.`);
    } else {
        console.log(`${newUser} is available.`);
    }
  });
    








