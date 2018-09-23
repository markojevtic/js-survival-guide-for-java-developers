let array = [ 15, 5, 123 ];

for (const name in array) {
    console.log("name: "+ name);
}

for (const value of array) { //Supported from ES6
    console.log("name: "+ value);
}

console.log(array.sort());


