const button = document.querySelector('#buton');
const resultText = document.querySelector('#result');

function invertText(text) {
    const changedText = text.split('').reverse().join('');
    return text === changedText ? true : false;
}

button.addEventListener('click', () => {
    const textValue = document.querySelector('#text').value;
    const result = invertText(textValue);

    result
        ? resultText.innerHTML = 'O texto é um palídromo'
        : resultText.innerHTML = 'O texto não é um palídromo';
});

function isPalidrome1(string) {
    let arrayString = [...string];
    let numOfLetters = string.length - 1;
    let isPalidrome = '<div class="alert alert-success d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg><div>O texto é um palídromo</div></div>';

    for (let i = numOfLetters, j = 0; i >= 0; i--, j++) {
        let firstStringLetterOfIteration = arrayString[j];
        let lastStringLetterOfIteration = arrayString[i];

        if (lastStringLetterOfIteration !== firstStringLetterOfIteration) {
            isPalidrome = '<div class="alert alert-primary d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg><div>O texto não é um palídromo</div></div>';
            break;
        }
    }
    return isPalidrome;
}