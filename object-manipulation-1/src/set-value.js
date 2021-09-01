/* exported setValue */
function setValue(object, key, value) {
  object = object[key] = value;
  return object;
}
