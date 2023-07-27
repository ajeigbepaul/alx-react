const $ = require("jquery");

const footerText = "Copyright - Holberton School";
const footerParagraph = $("<p>").text(footerText);

$("body").append(footerParagraph);
