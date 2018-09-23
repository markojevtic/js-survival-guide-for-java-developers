
function Person(name) {
    this.name = name;
    this.hello = function () {
        console.log('Hello '+this.name);
    };
    this.printType = function () {
        console.log('Person');
    };

}

let person = new Person("Joe");
person.hello();


function Programmer(name) {
    //constructor-inherit
    Person.call(this, name);

    //implement new method
    this.code = function() {
        console.log("Write code...");
    };

    //override printType
    this.printType = function () {
        console.log('Programmer');
    };
}

let programmer = new Programmer("Max");
programmer.hello();
programmer.code();
programmer.printType();

