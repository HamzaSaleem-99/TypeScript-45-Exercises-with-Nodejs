var personName = "Hamza";
console.log("lowerCase:", personName.toLowerCase());
console.log("upperCase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
