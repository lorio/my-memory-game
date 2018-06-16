//help from https://github.com/RJGrunau/fend-project-memory-game/blob/master/js/app.js#L18 and Mike Wales video.
//Chris N timer code
//modal code from w3 schools
//to start //////////////////////
let sec = 0;
let min = 0;
let timer;
function startTimer() {
  if (!timer) {
    timer = setInterval(insertTime, 1000);
  }
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
  document.querySelector('.game-time').innerHTML = min + ':' + sec;
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
// create an empty list of open cards and a list of matched cards 
let openCards = [];
let matchedCards = [];
let moves = 0;
const movesCounter = document.querySelector('.moves');
const starRating = document.querySelector('.stars');
const stars = starRating.getElementsByTagName('li');
//////////watch moves and rate////////////////////
function countMoves() {
  moves++;
  movesCounter.innerHTML = `${moves}`;  
  if (moves === 20 || moves === 40) {    
    removeStars();
  }
};
function removeStars(moves) {
  starRating.removeChild(stars[0]);
}

function initGame() {
  let cardHTML = shuffle(pix).map(function generateCards(card) {
    return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
  })
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
  countMoves(stars);
  startTimer();
  let card = e.target;
  if (card.className === 'card') {
    card.classList.add('open', 'show');
    openCards.push(card);
  
/////*if match*//////////
    if (openCards.length == 2) {
      if (openCards[0].dataset.card == openCards[1].dataset.card) {
        openCards[0].classList.add('match','open','show');
        openCards[1].classList.add('match','open','show');
        let match = true;
        matchedCards.push(card);
       } 
//// /*if no match*///////
      setTimeout(function() {
        openCards.forEach(function(card){
          card.classList.remove('open', 'show');
        })
        openCards = [];  
      }, 1000);
    }
/////////*game over*////////////////////
    if (matchedCards.length === 8) {
        console.log('game over');
       // stopTimer();
        updateScore();
        modal.style.display = "block";
      } 
    }; 
});       
/////*reset game*/////////////////////////////

const reset = document.querySelectorAll('div.restart');
function resetGame() {
  window.location.reload();
}
reset[0].addEventListener('click', resetGame);
///////////////*congratulations modal*////////////////////
let modal = document.getElementById('myModal');
const close = document.getElementsByClassName('close')[0];
const modalContent = document.getElementsByClassName('modal-content')[0];
//const modalResetBtn = document.createElement('span')[2];
//modalResetBtn.classList.add('.restart')
//////////*close modal*////////////////
close.onclick = function() {
  modal.style.display = 'none';
}
window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
//////////*build final scores into modal*////////////////

function updateScore() {
  stopTimer();
  let starCount = stars.length;
  let gameTime = document.querySelector('.game-time').innerHTML;
  
 // modalResetBtn.innerHTML = '<i class="fa fa-repeat"></i>'; 
  modalContent.children[1].innerHTML = `You are a ${starCount} star winner! Can you beat your ${gameTime} time? Try again.`
  reset[1].addEventListener('click', resetGame);
}
