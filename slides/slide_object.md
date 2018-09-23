###### Object and JSON
* JavaScript bring the most popular data transfer protocol JSON

```javascript
let example = {
    name:"Max",
    "3:)":"I'm an evil property",
    "year-of-birth": 2000,
    address: {
        city: "Belgrade",
        post: "11000"
    }
};
console.log("example.name: "+example.name);
console.log("example['3:)']: "+example['3:)']);
console.log("Person is old = "+ (2018-example['year-of-birth']));
```

* Use camel case to avoid problems.