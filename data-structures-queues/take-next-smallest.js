/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }
  let change = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return change;
  }
  while (change >= queue.peek()) {
    queue.enqueue(change);
    change = queue.dequeue();
  }
  return change;
}
