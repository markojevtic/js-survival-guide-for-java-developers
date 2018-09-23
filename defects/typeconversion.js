
function typeConversionEquals() {
    console.log(' "0" == 0 is '+ ( "0" == 0) );
    console.log(' 0 == [] is '+ ( 0 == []) );
    console.log(' "0" == [] is '+ ( "0" == []) );
}

function boolishAndAssign() {
    let a = 0;
    let b = 10;

    if( a = b) {
        console.log("A is equal to B");
    }
}

typeConversionEquals();
boolishAndAssign();