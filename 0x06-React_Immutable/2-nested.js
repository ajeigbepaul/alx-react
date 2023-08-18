export default function accessImmutableObject(object, array) {
  let currentValue = new Map(Object.entries(object));

  for (const key of array) {
    currentValue = currentValue.get(key);
    if (currentValue === undefined) {
      return undefined; // Return undefined if the path is not valid
    }
  }

  return currentValue;
}

const result = accessImmutableObject(
  {
    name: {
      first: "Guillaume",
      last: "Salva",
    },
  },
  ["name", "first"]
);

console.log(result); // Output: Guillaume
