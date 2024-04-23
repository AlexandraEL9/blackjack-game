let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");
// Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el");
// Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el");

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard()
function startGame() {
    renderGame();
}

// Create a renderGame() function
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
}

// Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    let card = getRandomCard(); // Hardcoded value for demonstration purposes
    sum += card;
    cards.push(card);
    renderGame();
}
