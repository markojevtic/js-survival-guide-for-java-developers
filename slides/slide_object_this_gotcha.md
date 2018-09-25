
###### this in JavaScript

* Mix methods & functions

```javascript
let msg = {message: "Servus!"};
msg.hello = function () {
    console.log( "Initializing message is:" + this.message);
    function init() {
        this.message = "Hello world!"
    }
    init();
    console.log(this.message);
};
msg.hello();
```
Prints:
* Servus!
* Hello world!
* undefined
