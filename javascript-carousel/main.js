var $left = document.querySelector('.left');
var $right = document.querySelector('.right');
var $img = document.querySelector('img');
var $circle = document.querySelectorAll('.circle');
var $circleNav = document.querySelector('.circleNav');
var images = ['./images/001.png', './images/004.png', './images/007.png',
  './images/025.png', './images/039.png'];
var i = 0;

function changeImage() {
  i++;
  if (i >= images.length) {
    i = 0;
    $img.src = images[i];
  } else {
    $img.src = images[i];
  }
  handleCircle();
}

function previousPoke(event) {
  if (i > 0) {
    i--;
    $img.src = images[i];
    startImage();
    handleCircle();
  }
}

$left.addEventListener('click', previousPoke);

function nextPoke(event) {
  if (i < images.length - 1) {
    i++;
    $img.src = images[i];
    startImage();
    handleCircle();
  }
}
$right.addEventListener('click', nextPoke);

function startImage() {
  clearInterval(countdown);
  countdown = setInterval(changeImage, 1000);
}

var countdown = setInterval(changeImage, 1000);

$circleNav.addEventListener('click', function (event) {
  if (!event.target.matches('.circle')) {
    return;
  }
  for (var j = 0; j < images.length; j++) {
    $circle[j].className = 'circle';
    if (event.target === $circle[j]) {
      i = j;
    }
  }
  if ($circle[i].className === 'circle') {
    $circle[i].className = 'current circle';
    $img.src = images[i];
  }
  startImage();
});

function handleCircle() {
  for (var j = 0; j < images.length; j++) {
    $circle[j].className = 'circle';
  }
  if ($circle[i].className === 'circle') {
    $circle[i].className = 'current circle';
  }
}
