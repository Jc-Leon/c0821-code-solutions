var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  var name = $form.name.value;
  var email = $form.email.value;
  var message = $form.message.value;

  var obj = {
    name: name,
    email: email,
    message: message
  };

  console.log(obj);
  $form.reset();
});
