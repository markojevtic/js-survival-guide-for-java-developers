###### this in JavaScript

* Function call ```this``` refers to function itself
```javascript
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
```
Prints:
a) ``Init value`` b) ``New message`` c) ``undefined``
