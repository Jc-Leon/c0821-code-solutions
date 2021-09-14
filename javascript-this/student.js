/* exported student */
var student = {
  firstName: 'Jc',
  lastName: 'Leon',
  subject: 'Coding',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction() {
    return 'Hello, my name is' + ' ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};
