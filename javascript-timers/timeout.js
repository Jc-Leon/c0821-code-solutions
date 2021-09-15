var $h1 = document.querySelector('h1');

setTimeout(changeThis, 2000);

function changeThis() {
  $h1.textContent = 'Hello, There';
}

// setTimeout(function () {
//   $h1.textContent = 'Hello, There';
// }, 2000);
