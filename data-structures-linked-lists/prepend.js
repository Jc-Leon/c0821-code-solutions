/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  var toyList = new LinkedList(value);
  toyList.next = list;
  return toyList;
}
