this.message = "Global message";

function refToFunction() {
    this.message = "Init value";
    function changeMessage() {
        this.message = "New message";
    }
    function printMessage() {
        console.log(this.message);
    }

    changeMessage();
    printMessage();
}
refToFunction();

this.message = "Hi there!"
var obj = {message: "Hello object"};
obj.print = function() {
    console.log(this.message);
};
obj.print();


let msg = {message: "Servus!"};
msg.hello = function () {
    console.log( "Initializing hello function, message is:" + this.message);
    function init() {
        this.message = "Hello world;"
    }
    init();
    console.log(this.message);
};
msg.hello();