# js-survival-guide-for-java-developers
Improvise. Adapt. Overcome.

# History
Short history of javascript.
Influenced by Schema(function, nested function)-Self/SmallTalk(use object, but not classes)-Java(just a sintax) -> LiveScript,
than Sun and Nescape make a deal: nescape introduced java into browsers, Sun wanted to kill LiveScript, but they needed it for begginers.
MicroSoft did reverse engineering and crate JScript.After MS and Netscape decided to make standard, and standard had been made on MS notes from reverse 
engineering. All bugs/defects are accepted as a stundard. Standard published under name ECMASCript.
Car vs Carpet - naming. 
Designed for beginners. Man has 10 days, because of that, he left a lot of things unlocked, String.prototype.trim = pfff_new_function.


Automatic insertion of semicolon. return\n{} vs return {}

var x = y
(function(){

})
This peace of code will not do automatic insertion of semicolon.

# Transitivity 
== vs ==== (type conversion, etc) try to find photo with example(https://9gag.com/gag/aDxdgEd)
 = assingning value in if, like in C if( a = b ), could be confusing.
 

# Variables and scopes.
var always on the begining, from ecma 6 use let.
global variables are evils, avoid it.
Example with closurs and private properties;

# Objects 
JS give as JSON- the most used data transfer format. Property could be whatever i.e. { "3:)":function (){ return "I'm evil function" }};
Prototypes(gotten from te SELF). Prototypes vs Classes - prototyping is simplier, if you want to changes something, you have not to go in parent class, fix all classes etc. Prototype changing in runtime try Child -> Person, than Person -> Animal. Inheritance with prototype inheritance ourObject = new ObjectToInherit();
OurObject.prototype.method = blaBla. Using Object.create instead of new is more readable, and it should be in a protoype lagnuge from the begining.
* getters and setters -  

# Types
## Numbers
This maybe should be part after transitivity 
Take a look into int defect. a > 0, b > 0 c = a + b could be a > c or b > c;
Decimal approximation defect
a = 0.10
b = 0.20
c = 0.30
a + b ==== c // false

Number.prototype 

NaN - hell:
* NaN === NaN false :D
* isNaN(NaN) true

## String, Date, RegExp are OK, they behave like in other languagess

## Arrays 
They ware not supported in the first version, but because of dynamics objects they could be used literaly as hashmap.
var arr = [12, 15, 123]; arr.sort(); //12, 123, 15 - sort as strings, but it support argument function. typeof Object === 'Array' //false, instead of it use Array.isArray;

## null and undefined 
We can use undefined or null - I've used null but, mabye undefined is better. 
take a look in typeof operator typeof array -> object, typeof null -> object;

# Exception and errors
throw new Error(); or throw {message: "reason"}; you can throw literraly everything.

# Function

* function is object
* four way to call function
* this table(strict)
* closure
    function first() {
        let a = 3; //could be defined with var also...
        return function(b){
            let c;
            return a*b;
        }
    }

    var keep = first(); // a is part of function, and gc will not swept it
    var keep = undefined;; //gc will swept out.



 Try to drive diagram, how it looks on heap(why it survive... function scope )

# Pseudo inheritence 
* Using prototype ie. function Person() { this.name = 'The person object' }
* Person.prototype.toString = function() { console.log('Person data'+ this.name )} - was the reaction....what the hell is this. Override method
* function Animal () { this.sayHello = function() {  } }, function Dog () { this.doSomething() {} }, than Dog.prototype = new Animal();
* Run time prototyping. pseud-inheritance, fuck the iheritance, is the totally diferent language, is functional.
    * what is solution do module pattern, function scope, use immediate invocation for singleton, or multiple type for creating prototypes(spring) akka constructor patter. Encapsulation and privacy: js doesn't have private, but there is closure.. :)
    * prototypical model save memory, but module pattern is more readable. 
        * method = prototypeInstnace.hello; method("Max"); //boom, it doesn't work because of the fucking this.
        * method = moduleInstance.hello;  method("Max"); //it works... 
* Meta object API
# Conclusion 
Confusing code usualy is written by
* beginners
* Exibitioners
# Some function excersises 
* revocable function
* lisp expression evaluator( FC-9 )
* function recursion 
    * addexp() -> undefined
    * addexpr(2)() -> 2
    * addexpr(3)(5)() -> 8 etc
* function private data_atack:
    * http://prntscr.com/k8jof3
* 