// define person class
function Person() {}

Person.prototype.walk = function () {
    alert('I am walking!');
};
Person.prototype.sayHello = function () {
    alert('hello');
};


// Define Student class
function Student () {
    // call super class
    // Person.call(this);
}

// Inherit Person
//Student.prototype = new Person();

// for the modern browser, IE9+ :)
Student.prototype = Object.create(Person.prototype);

// correct the constructor pointer as it is pointd to person class
// Student.prototype.constructor = Student;

Student.prototype.sayHello = function() {
    alert('hi, I am a student');
};

// add a new method for Student - sayGodBye
Student.prototype.sayGodBye = function () {
    alert('goodBye');
}

var student1 = new Student();
student1.sayHello();
student1.walk();
student1.sayGodBye();

// check inheritance
alert(student1 instanceof Person);
alert(student1 instanceof Student);