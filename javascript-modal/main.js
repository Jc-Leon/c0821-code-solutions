var $open = document.querySelector('.open');
var $modal = document.querySelector('.modal');
var $close = document.querySelector('.close');

function openModal(event) {
  $modal.className = 'modal ';
}
function closeModal(event) {
  $modal.className = 'modal hidden';
}

$open.addEventListener('click', openModal);
$close.addEventListener('click', closeModal);
