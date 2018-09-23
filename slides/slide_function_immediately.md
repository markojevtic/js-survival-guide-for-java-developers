###### Functions closure

* Immediately invoking of method; 
```javascript
(function (name) {
    console.log("Hello " + name);
})("Immediately");
// print Hello Immediately.
```
* Singleton-counter example
```javascript
let counter = (function (start) {
    return function () {
        start++;
        return start;
    };
})(50);
console.log(counter()); //51
console.log(counter()); //52
```
