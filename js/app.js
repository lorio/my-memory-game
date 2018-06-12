//help from https://github.com/RJGrunau/fend-project-memory-game/blob/master/js/app.js#L18 and Mike Wales video.
//Chris N timer code
//to start //////////////////////
let sec = 0;
let min = 0;
let timer;
function startTimer() {
  timer = setInterval(insertTime, 1000);
}
function stopTimer() {
  clearInterval(timer);
  sec = 0;
  min = 0;
}
function insertTime() {
  sec++;
  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (sec >= 60) {
    min++;
    sec = '00';
  }
  document.querySelector('.game-time').innerHTML = `0${min} : ${sec}`;
}
const deck = document.querySelector('.deck');
 /////* Create a list that holds all of your cards *//////////
let pix = ['fa-paper-plane-o', 'fa-paper-plane-o',
          'fa-diamond', 'fa-diamond',
          'fa-anchor', 'fa-anchor',
          'fa-bolt', 'fa-bolt',
          'fa-cube', 'fa-cube',
          'fa-leaf', 'fa-leaf',
          'fa-bicycle', 'fa-bicycle',
          'fa-bomb', 'fa-bomb'
 ];
// create an empty list of open cards
let openCards = [];
let matchedCards = [];
let moves = 0;
const movesCounter = document.querySelector('.moves');
const starRating = document.querySelector('.stars')
//////////watch moves and rate////////////////////
function countMoves () {
  moves++;
  movesCounter.innerHTML = `${moves}`;
  let stars = starRating.getElementsByTagName('li');
  if (moves === 20) {    
    starRating.removeChild(stars[0]);
    }
  if (moves === 40) {
      starRating.removeChild(stars[0]);
    }
};
function initGame() {
  let cardHTML = shuffle(pix).map(function generateCards(card) {
    return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
  });
  deck.innerHTML = cardHTML.join('');
}
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(pix) {
    var currentIndex = pix.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = pix[currentIndex];
        pix[currentIndex] = pix[randomIndex];
        pix[randomIndex] = temporaryValue;
    }
    return pix;
}
//start game ///////////////////////////////////
initGame(); 

deck.addEventListener('click', function(e){
  countMoves();
  startTimer();
  let card = e.target;
  if (card.className === 'card') {
    card.classList.add('open', 'show');
    openCards.push(card);
    }; 
/////*if match*//////////
  if (openCards.length == 2) {
    if (openCards[0].dataset.card == openCards[1].dataset.card) {
      openCards[0].classList.add('match','open','show');
      openCards[1].classList.add('match','open','show');
      matchedCards.push(card);
     } else {
//// /*if no match*///////
        if (openCards.length == 2) {
            setTimeout(function() {
              openCards.forEach(function(card){
                card.classList.remove('open', 'show');
              });
              openCards = [];  
              }, 1000);
            }
          };    
        };

  /*if (openCards.length == 16) {
    if (card.className === 'card' && !card.classList.contains('match'))
    stopTimer();
  }*/
});       

/////*reset game*/////////////////////////////
const reset = document.querySelector('.restart');
function resetGame() {
  reset.addEventListener('click', function(e) {
    let reset = e.target;
    window.location.reload();    
  });
};
resetGame();


/*
 * set up the event listener for a card. If a card is clicked:

 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
/**/