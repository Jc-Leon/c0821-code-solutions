var $h1 = document.querySelector('h1');

var counter = 4;
var countdown = setInterval(changeText, 1000);

function changeText() {
  counter--;
  $h1.textContent = counter;
  if (counter === 0) {
    $h1.textContent = "~Earth Beeeelooowww Us~'";
    clearInterval(countdown);
  }
}

// var countdown = setInterval(function () {
//   counter--;
//   $h1.textContent = counter;
//   if (counter === 0) {
//     $h1.textContent = "~Earth Beeeelooowww Us~'";
//     clearInterval(countdown);
//   }
// }, 1000);
