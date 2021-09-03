var $span = document.querySelectorAll('span');
var i = 0;

function handleClick(event) {
  var span = $span[i];
  if ($span[i].textContent === event.key) {
    span.className = 'correct';
    i++;
    $span[i].className = 'bottom';
  } else {
    span.className = 'wrong';
  }
}
document.addEventListener('keydown', handleClick);
