###### Method prototype

* Prototype object methods 

```javascript
function Person(name) {
    this.name = name;
}
//define methods
Person.prototype.hello = function () {
    console.log('Hello '+this.name);
};
Person.prototype.printType = function () {
    console.log('Person');
};
//test the class.
let person = new Person("Joe");
person.hello();
person.printType();
```

