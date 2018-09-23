###### Prototyping hell

* And just imagine that someone come to project 
```javascript
//and decide that method could be better...
Person.prototype.printType = function () {
    console.log("Do something else");
};
let person = new Person("Joe");
person.printType(); // will print 'Do something else' 
```

