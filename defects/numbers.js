
function decimalApproximation() {
    let a = 0.10;
    let b = 0.20;
    let c = 0.30;

    console.log(" a + b === c is " + (a + b === c) + " cause a+b is " + (a+b) );
}

decimalApproximation();

function nanHell() {
    console.log(" NaN === NaN;", NaN === NaN );
    console.log(" Number.NaN === NaN;", Number.NaN === NaN);
    console.log(" isNaN(NaN);", isNaN(NaN) );
    console.log(" isNaN(Number.NaN);", isNaN(Number.NaN));

    console.log(" isNaN('hello');", isNaN('hello'));
    console.log(" Number.isNaN('hello');", Number.isNaN('hello'));
}

nanHell();


