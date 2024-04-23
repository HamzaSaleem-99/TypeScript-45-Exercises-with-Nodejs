// Exercise 14,15 
// let guest_list : string[]= ['Majid','Shoaib','Atif','Rameez','sana'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] + ':\nwe invited you on dinner tomorrow\nThank you\n');
// }
// let  not_present : string = 'Sana';
// let new_guest : string = 'Ronaldo';
// guest_list[4] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] + ':\nwe invited you on dinner tomorrow\nThank you\n');
// }
// console.log(`Mr . ${not_present} will not come tomorrow dinner . `);
//  Exercise 16,17
var guest_list = ['Majid', 'Shoaib', 'Atif', 'Rameez', 'sana'];
var not_present = 'Sana';
var new_guest = 'Ronaldo';
guest_list[4] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] + ':\nwe invited you on dinner tomorrow\nThank you\n');
// }
guest_list.unshift('Goku', 'vegeta', 'Narruto');
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] + ':\nwe invited you on dinner tomorrow\nThank you\n');
// }
console.log('\nunfortunately we cannot arrange big table only two peoples are allow');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam ".concat(remove_guest, " you are not invited dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ':\nyou are still invited on tomorrow dinner \nThank you\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
