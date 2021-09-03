/* exported todos */

var todos = [];

function handleStorage(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
  var previousTodosJSON = localStorage.getItem('javascript-local-storage');

  if (localStorage !== null) {
    todos = JSON.parse(previousTodosJSON);
  }
}

window.addEventListener('beforeunload', handleStorage);
