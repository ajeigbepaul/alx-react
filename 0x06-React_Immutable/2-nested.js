export default function accessImmutableObject(object, array) {
  let currentValue = object;

  for (const key of array) {
    if (currentValue && currentValue.hasOwnProperty(key)) {
      currentValue = currentValue[key];
    } else {
      return undefined; // Return undefined if the path is not valid
    }
  }

  return currentValue;
}

const result = accessImmutableObject({
  name: {
    first: "Guillaume",
    last: "Salva"
  }
}, ['name', 'first']);

console.log(result); // Output: Guillaume

