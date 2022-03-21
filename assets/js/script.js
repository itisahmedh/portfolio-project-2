// Game cards
const cards = $(".card");



shuffle();
let hasFlippedcard = false;
let lockBoard = false
let firstCard, secondCard;
let oldScore = parseInt(document.getElementById('score').innerText);
let incorrect = parseInt(document.getElementById('incorrect').innerText);
/**
 * Function for flipping cards
 */
function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');

    // Check if this the first card to flip
if (!hasFlippedcard) {
    hasFlippedcard = true;
    firstCard = this;

    
    return; }

        hasFlippedcard = false;
        secondCard = this;
        // Check if the card are the same
        
        checkForMatch();
    
}
/**
 * Check if the cards are the same
 */
function checkForMatch() {
    if(firstCard.dataset.framework === secondCard.dataset.framework) {
        incrementScore();
        disableCards();
    } else {
        // If it is not a match
        incrementIncorrect();
        unflipCards();
}

/**
 * Disable cards from flipping
 */
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click',flipCard);
}

/**
 * Flip the cards back if they are not the same
 */
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
        
        resetBoard();
        }, 1500);
    }
}

/** 
 * Resets the board
*/
function resetBoard() {
    [hasFlippedcard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

/**
 * Shuffle the cards
 */
function shuffle() {
    for (let x of cards) {
        let randomPos = Math.floor(Math.random() *12);
        x.style.order = randomPos;
    }
}


/**
 * Increases the score by one
 */
function incrementScore() {
    
    document.getElementById('score').innerText = ++oldScore;
    if (oldScore === 6) {
        setTimeout(() => {
            alert("Well done! you have a great memory, play another time!");
        window.location.reload();
        }, 1000 );
    }
}

/**
 * Get the incorrect score and increases it by 1
 */
function incrementIncorrect() {
    
    document.getElementById('incorrect').innerText = ++incorrect;
    if (incorrect === 7) {
        setTimeout(() => {
         alert('Oh no! you have lost, try again :)');
        window.location.reload();
        }, 1000);
    }
}


/**
 * Restart the game
 */
function restartGame() {
    window.location.reload();
}


for (let card of cards) {
    card.addEventListener('click',flipCard);
}

