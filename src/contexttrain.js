const obj = {
    name: 'John',
    sayHello() {
        return this.name
        // console.log(this.name);
    }
};

const greet = obj.sayHello();
console.log(greet); // undefined, потому что потерян контекст `this`
