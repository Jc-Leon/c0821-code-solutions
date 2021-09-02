var $list = document.querySelector('.task-list');

$list.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  var $task = event.target.closest('.task-list-item');

  console.log($task);
  $task.remove();

});
