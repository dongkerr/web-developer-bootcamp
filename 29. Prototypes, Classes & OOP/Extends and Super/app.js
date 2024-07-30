class Pet{
    constructor(name,age){
        console.log("in pet constructor")
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
}

class Cat extends Pet{
    constructor(name, age, livesLeft = 9){
        console.log("in cat constructor")
        super(name,age);
        this.livesLeft = livesLeft
    }
    meow(){
        return "meowwwwww"
    }
}

class Dog extends Pet{
    bark(){
        return "woooofff"
    }
    eat(){
        return `${this.name} scarfs his food!`
    }
    // will return the dog version of eat
}