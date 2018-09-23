###### Functions closure

```javascript
function multiplier(times) {
    return function (value) {
        return value * times;
    }
}
let x5 = multiplier(5);
console.log("x5(2) = " + x5(2));
```