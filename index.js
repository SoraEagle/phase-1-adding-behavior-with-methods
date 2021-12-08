class Cat{
    constructor(name, sex){ //Create properties.
        this.name = name;
        this.sex = sex;
    } //Create method(s).
    speak(){
        return `${this.name} says meow!`;
    }
}

class Dog{
    constructor(name, sex){ //Create properties.
        this.name = name;
        this.sex = sex;
    } //Create method(s).
    speak(){
        return `${this.name} says woof!`;
    }
}

class Bird{
    constructor(name, sex){ //Create properties.
        this.name = name;
        this.sex = sex;
    } //Create method(s).
    speak(){
        if(this.sex === "male") return `It\'s me! ${this.name}, the parrot!`;
        else return `${this.name} says squawk!`;
    }
}