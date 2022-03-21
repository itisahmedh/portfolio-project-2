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
function flipCard() {
    this.classList.toggle('flip');
}
for (let card of cards) {
    card.addEventListener('click',flipCard);
}