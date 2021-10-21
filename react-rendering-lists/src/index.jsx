import React from 'react';
import ReactDOM from 'react-dom';

function List(props) {
  const objContent = (
    <ul>
      {props.pokedex.map(pokemon =>
        <li key={pokemon}>
          {pokemon.name}
        </li>
      )}
    </ul>
  );
  return (
    <>
      {objContent}
    </>
  );

}
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(
  <List pokedex={pokedex} />,
  document.getElementById('root')
);
