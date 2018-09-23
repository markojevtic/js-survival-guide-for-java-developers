
function Person(name) {
    this.name = name;
}

Person.prototype.hello = function () {
    console.log('Hello '+this.name);
};
Person.prototype.printType = function () {
    console.log('Person');
};

let person = new Person("Joe");
person.hello();
person.printType();
Person.prototype.printType = function () {
    console.log('Blah');
};
person.printType();


function Programmer(name) {
    this.name = name;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.code = function() {
    console.log("Write code...");
};
Programmer.prototype.printType = function () {
    console.log('Programmer');
};

let programmer = new Programmer("Max");
programmer.hello();
programmer.code();
programmer.printType();

