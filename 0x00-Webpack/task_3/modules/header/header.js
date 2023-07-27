const $ = require("jquery");

console.log("Init header");

const headerContainer = $("<div>").addClass("header-container");
const logo = $("<img>").attr("src", "../assets/holberton-logo.jpg");
const title = $("<h1>").text("Holberton Dashboard");

headerContainer.append(logo, title);
$("body").prepend(headerContainer);
