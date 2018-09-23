###### Inheritance

* Inherit other function/type 
```javascript
function Programmer(name) {
    Person.call(this, name);
    this.code = function() {
        console.log("Write code...");
    };
    this.printType = function () { //override
        console.log('Programmer');
    }; 
}
let programmer = new Programmer("Max");
programmer.hello();
programmer.code();
programmer.printType();
```

