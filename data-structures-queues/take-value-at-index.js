/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }
  let change;
  for (let i = 0; i < index + 1; i++) {
    change = queue.dequeue();
    if (typeof queue.peek() === 'undefined') {
      return change;
    }
    if (i !== index) {
      queue.enqueue(change);
    }
  }
  return change;
}
