var $click = document.querySelector('.click-button');
var $hover = document.querySelector('.hover-button');
var $dblClick = document.querySelector('.double-click-button');

function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

$click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
$hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

$dblClick.addEventListener('dblclick', handleDoubleClick);
