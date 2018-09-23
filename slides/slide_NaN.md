###### Numbers

* NaN hell

```javascript
    NaN === NaN;        // false
    Number.NaN === NaN; // false
    isNaN(NaN);         // true
    isNaN(Number.NaN);  // true
    
    isNaN('hello');        // true
    Number.isNaN('hello'); // false
``` 

