###### Functions 
* In JavaScript function is first class citizen, function is object. 
* two ways to declare function

```javascript
hello(); // will print message
function hello() {
    console.log("Hello function");
}
//helloLazy(); - produces ReferenceError: helloLazy is not defined 
let helloLazy = function() {
    console.log("hello lazy function");
};
helloLazy(); // prints proper message.
```