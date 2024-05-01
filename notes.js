// Declare variables to store game state and player information
let cards = [] // Array to store drawn cards
let sum = 0 // Total sum of the drawn cards
let hasBlackJack = false // Whether the player has Blackjack
let isAlive = false // Whether the player is still in the game
let message = "" // Message to display to the player
let messageEl = document.getElementById("message-el") // Reference to the message element in the HTML
let sumEl = document.getElementById("sum-el") // Reference to the sum element in the HTML
let cardsEl = document.getElementById("cards-el") // Reference to the cards element in the HTML

// Define the player object with name and chips
let player = {
    name: "Per",
    chips: 145
}
let playerEl = document.getElementById("player-el") // Reference to the player element in the HTML
playerEl.textContent = player.name + ": $" + player.chips // Display player name and chips

// Function to get a random card between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10){
        return 10 // Face cards have a value of 10
    } else if (randomNumber === 1) {
        return 11 // Ace has a value of 11 initially
    } else {
        return randomNumber // Other cards have their face value
    }
}

// Function to start the game
function startGame() {
    isAlive = true // Set player alive
    let firstCard = getRandomCard() // Draw the first card
    let secondCard = getRandomCard() // Draw the second card
    cards = [firstCard, secondCard] // Store the drawn cards in the array
    sum = firstCard + secondCard // Calculate the sum of the drawn cards
    renderGame() // Update the UI to display the game state
}

// Function to render the game state
function renderGame() {
    cardsEl.textContent = "Cards: " // Clear the cards display
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " // Display each drawn card
    }
    
    sumEl.textContent = "Sum: " + sum // Display the total sum of cards
    if (sum <= 20) {
        message = "Do you want to draw a new card?" // Prompt the player to draw a new card
    } else if (sum === 21) {
        message = "You've got Blackjack!" // Player has Blackjack
        hasBlackJack = true
    } else {
        message = "You're out of the game!" // Player is out of the game (sum exceeds 21)
        isAlive = false
    }
    messageEl.textContent = message // Display the message to the player
}

// Function to draw a new card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard() // Draw a new card
        sum += card // Update the total sum
        cards.push(card) // Add the new card to the array
        renderGame() // Update the UI to reflect the new game state
    }
}

Explanation:

The code initializes variables to keep 
track of the game state, player information,
 and references to HTML elements.

 There's a function getRandomCard() to 
 generate a random card value between 1 and 13.

 The startGame() function initializes the 
 game by drawing two cards and updating the 
 game state.

 The renderGame() function updates the UI 
 to display the current game state, 
 including drawn cards, total sum, and a 
 message to the player.

 The newCard() function allows the player 
 to draw a new card if they're still in the
  game and haven't reached Blackjack. 
  
  It updates the game state and UI 
  accordingly.