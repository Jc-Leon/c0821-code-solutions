console.log('Lodash is loaded:', typeof _ !== 'undefined');

function Player(name, cards) {
  this.name = name;
  this.cards = cards;
}

const player1 = new Player('JC', [{ rank: 'Ace', suit: 'Heart' }, { rank: 'Ace', points: 11, suit: 'Diamond' }]);
const player2 = new Player('john', [{ rank: 'Ace', suit: 'Heart' }, { rank: 'Ace', points: 11, suit: 'Diamond' }]);
const player3 = new Player('denise', [{ rank: 'Ace', suit: 'Heart' }, { rank: 'Ace', points: 11, suit: 'Diamond' }]);
const player4 = new Player('jen', [{ rank: 'Ace', suit: 'Heart' }, { rank: 'Ace', points: 11, suit: 'Diamond' }]);

console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
