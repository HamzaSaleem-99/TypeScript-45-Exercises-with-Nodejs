"use strict";
function make_shirt(size = "large", message = "I love typescript") {
    console.log(`making a ${size} T-shirt with the message ${message} printed on it`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into coding");
