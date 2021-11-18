/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return undefined;
  }
  const update = list.next.data = value;
  return update;
}
