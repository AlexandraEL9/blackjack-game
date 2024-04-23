let firstCard = 10;
        let secondCard = 4;
        let sum = firstCard + secondCard;
        let hasBlackJack = false;
        let isAlive = true;
        let message = "";
        
       // 1. Store the message-el paragraph in a variable called messageEl
        let messageEl = document.getElementById("message-el");
        // 2. Store the sum paragraph in a variable called sumEl
        let sumEl = document.getElementById("sum-el");
        // 2. Store the cards paragraph in a variable called cardsEl (js)
        let cardsEl = document.getElementById("cards-el");

        // Create a startGame() function
        function startGame() {
            // render sum on the page
            sumEl.textContent = "Sum: " + sum;
            // 3. Render the cars on the page using this format -> "Cards: 10 4" (js)
            cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;

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
        };
    // 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
    function newCard() {
        let card = 3;
        sum = sum += card;
       
        startGame();
    }