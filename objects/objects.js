function ClassA() {
    var message = 'Hello from A';
    this.sayHello = 

    function sayHello() {
        console.log(this.message);
    }
}


var classA = new ClassA();
classA.sayHello();
classA.message = 'New message outside of A';
classA.sayHello();