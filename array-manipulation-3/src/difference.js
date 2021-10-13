/* exported difference */
function difference(first, second) {
  const newArr = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      newArr.push(second[i]);
    }
  }
  return newArr;

}

/*
check to see if anything from the first array matches
anything from the second array
push whatever doesnt match to a new array
check to see if anything from the second array matches
anything from the first array
push whatever doesnt match to a new array
*/
