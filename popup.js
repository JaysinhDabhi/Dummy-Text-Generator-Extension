document.getElementById('generate').addEventListener('click', generateText);
document.getElementById('copy').addEventListener('click', copyToClipboard);

function generateText() {
  const paragraphs = parseInt(document.getElementById('paragraphs').value);
  let output = '';
  for (let i = 0; i < paragraphs; i++) {
    output += '<p>' + generateParagraph() + '</p>';
  }
  document.getElementById('output').innerHTML = output;
}




function copyToClipboard() {
  const outputElement = document.getElementById('output');
  const text = outputElement.innerText;
  navigator.clipboard.writeText(text)
    .then(() => {
      document.getElementById('copy').innerText = 'Copied!';
      setTimeout(() => {
        document.getElementById('copy').innerText = 'Copy to Clipboard';
        document.getElementById('output').innerHTML = ''; // Reset the output
      }, 2000); // Reset the button text after 2 seconds
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
}

function generateParagraph() {
  const sentences = getRandomInt(3, 6); // Random number of sentences per paragraph
  let paragraph = '';
  for (let i = 0; i < sentences; i++) {
    paragraph += generateSentence() + ' ';
  }
  return paragraph;
}

function generateSentence() {
  const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua.'];
  const sentenceLength = getRandomInt(5, 10); // Random number of words per sentence
  let sentence = '';
  for (let i = 0; i < sentenceLength; i++) {
    const randomIndex = getRandomInt(0, words.length - 1);
    sentence += words[randomIndex] + ' ';
  }
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).trim() + '.';
}


// Update the link with a clickable URL
document.getElementById('link').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default behavior
  window.open('https://www.buymeacoffee.com/jaysinhdabhi', '_blank'); // Open the link in a new tab
});





function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
