###### this in JavaScript

* Method call ```this``` refers to the object 
```javascript
this.message = "Hi there!"
var obj = {message: "Hello object"};
obj.print = function() {
    console.log(this.message);
};
obj.print();
```
Prints:
* Hi there!
* Hello object
* undefined

