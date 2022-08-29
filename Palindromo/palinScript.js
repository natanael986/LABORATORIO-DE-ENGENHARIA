const button = document.querySelector('#buton');
const resultText = document.querySelector('#result');

function invertText(text) {
  const changedText = text.split('').reverse().join('');
  return text === changedText ? true : false;
}

button.addEventListener('click', () => {
  const textValue = document.querySelector('#text').value;
  const result  = invertText(textValue);

  result
    ? resultText.innerHTML = 'O texto é um palídromo'
  : resultText.innerHTML = 'O texto não é um palídromo';
});