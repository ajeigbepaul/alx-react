import { Map } from "immutable";

function getImmutableObject(object) {
  return Map(object);
}

// Example usage
const originalObject = {
  id: 1,
  title: "Example",
  settings: [
    { id: 1, title: "Setting 1" },
    { id: 2, title: "Setting 2" },
  ],
};

const immutableMap = getImmutableObject(originalObject);
console.log(immutableMap);
