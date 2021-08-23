var student = {
  firstName: 'Jc',
  lastName: 'Leon',
  age: 24
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Administration';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2000
};
vehicle['color'] = 'Grey';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Alabama',
  type: 'Chihuahua'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
