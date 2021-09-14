function ExampleConstructor() {
}
console.log('value of Prototype:', ExampleConstructor.prototype);
console.log('typeof Prototype:', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log(newExampleConstructor);
var result = newExampleConstructor instanceof ExampleConstructor;

console.log(result);
