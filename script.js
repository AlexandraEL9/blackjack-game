let firstCard = 10;
        let secondCard = 4;
        let sum = firstCard + secondCard;
        let hasBlackJack = false;
        let isAlive = true;
        let message = "";
        
        // Create a function to update the message element
        function setMessage(message) {
            document.getElementById("message-el").textContent = message;
        }

        // Create a startGame() function
        function startGame() {
            if (sum <= 20) {
                message = "Do you want to draw a new card? 🙂";
            } else if (sum === 21) {
                message = "Wohoo! You've got Blackjack! 🥳";
                hasBlackJack = true;
            } else {
                message = "You're out of the game! 😭";
                isAlive = false;
            }

            // Update the message element