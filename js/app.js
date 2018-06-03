//to start //////////////////////
const cards = document.querySelectorAll('.card');
const deck = document.querySelector('.deck');
function initGame() {
  
// loop through each card and create its HTML ///////
  let cardHTML = pix.map(function (card) {
    return generateCards(card);
  });  // Display the cards on the page
// add each card's HTML to the page ////////////////
    deck.innerHTML = cardHTML.join('');    
}
/*
 * Create a list that holds all of your cards
 */
let pix = ['fa-paper-plane-o', 'fa-paper-plane-o',
          'fa-diamond', 'fa-diamond',
          'fa-anchor', 'fa-anchor',
          'fa-bolt', 'fa-bolt',
          'fa-cube', 'fa-cube',
          'fa-leaf', 'fa-leaf',
          'fa-bicycle', 'fa-bicycle',
          'fa-bomb', 'fa-bomb'
 ];

 function generateCards(card) {
  return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
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

// create an empty list of open cards
let openCards = [];
let moves = 1;
const movesCounter = document.querySelectorAll('.moves');
//start game ///////////////////////////////////


initGame();  
  
//  }; 
    cards.forEach(function(card){
      card.addEventListener('click', function(e){
        openCards.push(card);
        card.classList.add('open', 'show');
        console.log(e);
        //cardMatch(card);
      });
    });
  

      /*if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {*/
    
      
/*        
      };
    });
});  */  
/*if match*/
      if (openCards.length == 2) {
        if (openCards[0].dataset.card == openCards[1].dataset.card) {
          openCards[0].classList.add('match');
          openCards[0].classList.add('open');
          openCards[0].classList.add('show');
          openCards[1].classList.add('match');
          openCards[1].classList.add('open');
          openCards[1].classList.add('show');
          openCards = []
          } else {
/*if no match*/
          setTimeout(function(card) {
            openCards.forEach(function(card){
              card.classList.remove('open', 'show');
            });
            openCards = [];  
          }, 1000);        
        }
       /* moves += 1;
        moveCounter.innerText = moves;*/
      }




/*const cards = document.querySelectorAll('.card');
function flip(card) {
    cards.forEach (function(card) {
    card.classList.add(open, show);
    });
  };*/
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
