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
create empty string
create for loop and add values to the empty string
*/
// // y = a.split("").sort().join("").split(' ').join(' ')
//         z = b.split("").sort().join("");
