var $number = 0;
var $button = document.querySelector('.hot-button');
var $click = document.querySelector('.click-count');

function handleClick(event) {
  $number++;

  $click.textContent = 'Clicks: ' + $number;

  if ($number < 4) {
    $button.className = 'hot-button cold';
  } else if ($number < 7) {
    $button.className = 'hot-button cool';
  } else if ($number < 10) {
    $button.className = 'hot-button tepid';
  } else if ($number < 13) {
    $button.className = 'hot-button warm';
  } else if ($number < 16) {
    $button.className = 'hot-button hot';
  } else {
    $button.className = 'hot-button nuclear';
  }
}
$button.addEventListener('click', handleClick);
