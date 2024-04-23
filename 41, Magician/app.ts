let magician: string[] = ["Harry Potter","Hermion Granger","Mash","Albus Dumbledore"];

function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

show_magicians(magician);