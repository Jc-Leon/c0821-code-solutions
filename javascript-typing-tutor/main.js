var $span = document.querySelectorAll('span');

document.addEventListener('keydown', logKey);

function logKey(e) {
  for (var i = 0; i < $span.length; i++) {

    if ($span[0] === event.code[i]) {
      $span.className = 'correct';

    }
    // console.log('hello', event.code);

  }
}
// console.log('nodelist', $span[0]);
