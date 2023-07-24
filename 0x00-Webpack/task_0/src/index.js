// Import jQuery (ensure the correct path to your jQuery file)
import $ from 'jquery';

// Function to add three paragraphs to the page body
function addParagraphs() {
  const body = $('body');

  // Paragraph 1
  const paragraph1 = $('<p>').text('Holberton Dashboard.');
  body.append(paragraph1);

  // Paragraph 2
  const paragraph2 = $('<p>').text('Dashboard data for the students.');
  body.append(paragraph2);

  // Paragraph 3
  const paragraph3 = $('<p>').text('Copyright - Holberton School.');
  body.append(paragraph3);
}

// Call the function to add paragraphs when the DOM is ready
$(document).ready(() => {
  addParagraphs();
});
