function isEmpty(value) {
    return value === undefined || value === null;
}

let nullVar = null;
let undefVar;

console.log("null is empty: " + isEmpty(nullVar));
console.log("Undefined is empty: " + isEmpty(undefVar));

console.log("null == 0 is "+ (null == 0));
console.log("null > 0 is "+ (null > 0));
console.log("null >= 0 is " + (null >= 0));


console.log("undefined == 0 is "+ (undefined == 0));
console.log("undefined > 0 is "+ (undefined > 0));
console.log("undefined >= 0 is " + (undefined >= 0));


