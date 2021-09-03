var $container = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function handleContainer(event) {

  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tab.length; i++) {
    var tab = $tab[i];
    if (tab !== event.target) {
      tab.className = 'tab';
    } else {
      tab.className = 'tab active';
    }
  }
  for (var j = 0; j < $view.length; j++) {
    var view = $view[j];
    if (view.getAttribute('data-view') === event.target.getAttribute('data-view')) {
      view.className = 'view';
    } else {
      view.className = 'view hidden';
    }
  }
}

$container.addEventListener('click', handleContainer);
