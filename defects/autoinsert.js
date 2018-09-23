function createPerson(age)
{
    return
    {
        ageCategory: age < 18 ? 'child' : 'adult'
    }
}

console.log( "Created person is: " + createPerson(25));