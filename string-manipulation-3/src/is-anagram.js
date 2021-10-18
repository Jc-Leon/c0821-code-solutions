/* exported isAnagram */
function isAnagram(firstString, secondString) {
  let arr = [];
  let arr2 = [];

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      arr.push(firstString[i]);
    }

  }
  arr = arr.sort().join('');
  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      arr2.push(secondString[i]);
    }

  }
  arr2 = arr2.sort().join('');
  return arr === arr2;
}

/*
create 2 empty arrays
loop through both arrays and push values to seperate arrays
join and sort the arrays to compare if they contain the same letters
*/
