
hello();
function hello() {
    console.log("Hello function");
}

//helloLazy();
let helloLazy = function() {
    console.log("helloLet function");
};
helloLazy();



function multiplier(times) {
    return function (value) {
        return value * times;
    }
}

let x5 = multiplier(5);
console.log("x5(2) = " + x5(2));


(function (name) {
    console.log("Hello " + name);
})("Immediately");


let counter = (function (start) {
    return function () {
        start++;
        return start;
    };
})(50);

console.log(counter()); //51
console.log(counter()); //52
console.log(counter()); //53


function retursion(first) {
    function next(second) {
        if (second === undefined) {
            return first;
        } else {
            first *= second;
            return next;
        }
    }

    if (first !== undefined) {
        return next;
    }
}

console.log(retursion(2)(4)());



