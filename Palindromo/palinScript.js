const button = document.querySelector('#button');
const resultText = document.querySelector('#result');

function checkPalindromo(str){
    for(let i = 0 ; i < str.length / 2; i++)
        if (str[i] != str[str.length - i - 1])
            return false;
    return true;
}
const result  = invertText(textValue);

button.addEventListener('click', () => {
    const textValue = document.querySelector('#text').value;
    if (checkPalindromo(str) = false)
        result
            ? resultText.innerHTML = '<div class="alert alert-danger d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg><div>O texto não é um palídromo</div></div>'
    : resultText.innerHTML = '<div class="alert alert-success d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg><div>O texto é um palídromo</div></div>';
    
});