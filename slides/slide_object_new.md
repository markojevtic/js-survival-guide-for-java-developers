###### Create a new instance

* Create a singleton counter with up/down 
```javascript
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
```
* Refactor Person in order to support encapsulation( make name private/read-only );

