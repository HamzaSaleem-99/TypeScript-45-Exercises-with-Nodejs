let personName: string ="Hamza"
console.log("lowerCase:", personName.toLowerCase());

console.log("upperCase:", personName.toLocaleUpperCase());

console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase())); 