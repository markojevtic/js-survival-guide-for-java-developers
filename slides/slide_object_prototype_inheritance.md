###### Prototype inheritance

* Prototype inheritance
```javascript
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
```

