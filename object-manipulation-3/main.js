console.log('Lodash is loaded:', typeof _ !== 'undefined');

function Player(name) {
  this.name = name;
  this.points = 0;
}

const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
const value = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const rank = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];

function shuffle() {
  const arr = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < value.length; j++) {
      arr.push({
        suit: suits[i],
        value: value[j],
        rank: rank[j]
      });
    }
  }
  return _.shuffle(arr);
}

function getCards(players) {
  const cards = shuffle();
  for (let i = 0; i < players.length; i++) {
    const newHand = [];
    for (let j = 0; j < 2; j++) {
      const lastCard = cards.pop();
      players[i].points += lastCard.value;
      newHand.push(lastCard);
    }
    players[i].hand = newHand;
  }
  return players;
}

function playGame() {
  const player1 = new Player('JC');
  const player2 = new Player('Jen');
  const player3 = new Player('Katie');
  const player4 = new Player('Jose');

  const players = [player1, player2, player3, player4];

  getCards(players);
  let winner = {};
  let highScore = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].points > highScore) {
      highScore = players[i].points;
      winner = players[i];
    }
  }
  console.log(winner);
  return winner;
}
playGame();

/*
create a constructor of a player object with name and point value
create an array of suits values of cards and their ranks
create a function that will loop through the arrays of suits ranks and values
and will return a shuffled array of objects containing a standard 52 deck of cards
create a function that will get the cards from the shuffled deck and depending on
the amount of players in the game deal out 2 cards from the top of the array
pop the values and add it to the players points and push the cards into newly created array
assign the hand poroperty ti the players with the newly created array for eaech player
when the gane starts create 4 new players and give them the cards
assign highscore to 0 with the condtion that if high schore is less than player value
then player value will be assigned to highscore and will be repeated with every player
whichever highscore is the highest console the winner
*/
