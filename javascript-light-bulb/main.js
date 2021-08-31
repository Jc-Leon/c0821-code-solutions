var $button = document.querySelector('.circle-light');

function handleClick(event) {
  var $body = document.body;

  $button.classList.toggle('circle-light-out');
  $body.classList.toggle('light-out');
}

$button.addEventListener('click', handleClick);
