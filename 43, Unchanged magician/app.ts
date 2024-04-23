let magician: string[] = ["Harry Potter","Hermion Granger","Mash","Albus Dumbledore"];

function copyArry(arr: string[]){
    return[...arr];
}

function make_great(magicianArray: string[]){
    for(let i = 0; i < magicianArray.length; i++){
        magicianArray[i] = "The great " + magicianArray[i]
    }
}


function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}


const copymagicianarry = copyArry(magician);

make_great(copymagicianarry);

console.log('\n\nThis is my original array:');
show_magicians(magician);

console.log('\n\nThis is my modified copy of the array:');
show_magicians(copymagicianarry );