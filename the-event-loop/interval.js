let counter = 3;

const changeText = () => {
  console.log(counter);
  counter--;
  if (counter === 0) {
    console.log('Blast off!');
    clearInterval(countdown);
  }
};
const countdown = setInterval(changeText, 1000);
