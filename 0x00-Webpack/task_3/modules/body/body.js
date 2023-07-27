const $ = require("jquery");
const _ = require("lodash");

const button = $("<button>").text("Click Me");
const counter = $("<p>").text("Count: 0");

let count = 0;
button.on("click", () => {
  count++;
  counter.text(`Count: ${count}`);
});

$("body").append(button, counter);
