/*
*Show how to play when the button is clicked
*/
$('#how-btn').click(function(){
    $('#how').toggle('slow');
});

// Game
const cards = $(".card");

/*
*Function for flipping cards
*/
let hasFlippedcard = false;
let firstCard, secondCard;
function flipCard() {
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
/*
*Check if the cards are the same
*
*/
function checkForMatch() {
    if(firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
    } else {
        // If it is not a match
        unflipCards();
}

/*
* Disable cards from flipping
*/
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click',flipCard);
}

/*
* Flip the cards back if they are not the same
*/
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        }, 1500);
    }
}


for (let card of cards) {
    card.addEventListener('click',flipCard);
}

