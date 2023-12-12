let sortedNumbersList = [];
const sortedNumbersLimit = 100;
let tries = 0;
let secretNumber = randomNumber();


function changeHtmlText(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function verifyGuess() {
    let guess = document.querySelector('input').value;
    tries++;
    if (guess == secretNumber) {
        let tryWord = tries == 1 ? 'try' : 'tries';
        changeHtmlText('h1', 'Perfect!');
        changeHtmlText('p', `You've guessed the secret number with ${tries} ${tryWord}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        let sizeWord = guess > secretNumber ? 'smaller' : 'bigger';
        changeHtmlText('p', `The secret number is ${sizeWord} than ${guess}`);
        clearField();
    }
}

function randomNumber() {
    let sortedNumber = parseInt(Math.random() * sortedNumbersLimit + 1);
    if (sortedNumbersList.length == sortedNumbersLimit) {
        sortedNumbersList = []
    }
    if (sortedNumbersList.includes(sortedNumber)) {
        return randomNumber();
    } else {
        sortedNumbersList.push(sortedNumber);
        console.log(sortedNumbersList);
        return sortedNumber;
    }
}

function clearField() {
    let guess = document.querySelector('input');
    guess.value = '';
}

function restartGame() {
    secretNumber = randomNumber();
    startMessage();
    clearField();
    tries = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function startMessage() {
    changeHtmlText('h1', 'Secret number game');
    changeHtmlText('p', `Type a number between 1 and ${sortedNumbersLimit}`);
}


startMessage();