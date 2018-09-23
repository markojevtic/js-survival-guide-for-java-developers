###### Functions katas

* Create a singleton counter with up/down 
```javascript
let counter = (function (start) {
    //implement code;
})(20);
console.log(counter.up()); //print 21
console.log(counter.down()); //print 20
```
* Create a multiplier function multiplyNext, that acts:
```javascript
console.log(multiplyNext()); // undefined
console.log(multiplyNext(2)()); // 2
console.log(multiplyNext(2)(3)()); // 6
console.log(multiplyNext(2)(3)(3)()); // 18
//etc
```
