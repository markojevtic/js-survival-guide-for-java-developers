```javascript
function createPerson(age) 
{
    return 
    {
        ageCategory: age < 18 ? 'child' : 'adult'
    }
}

console.log( createPerson(25));
```

Result is:
- A) { "ageCategory": "adult"}
- B) Syntax error
- C) Nothing of above