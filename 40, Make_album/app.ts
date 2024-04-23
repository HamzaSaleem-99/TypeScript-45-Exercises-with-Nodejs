function make_album(artistName: string, albumTitle: string){
    return{artistName,albumTitle}
}
let album1 = make_album("Ali","Rang-e-Mohabat");
let album2 = make_album("Madad","Roshan Andhera");
let album3 = make_album("Ayaz","Mausam-e-Dill");

console.log(album1);
console.log(album2);
console.log(album3);

function make_album2(artistName: string, albumTitle: string, numberOfTracks: number){
    return{artistName,albumTitle,numberOfTracks}
} 

let album4 = make_album2("Ali","Dill hai",30);
let album5 = make_album2("Madad","Ajeeb Kahani",50);
let album6 = make_album2("Arijit","Khamoshiya",25);

console.log(album4);
console.log(album5);
console.log(album6);

