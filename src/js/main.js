'use strict';

//          GLOBAL CONSTS         //
// homepage
const homepageModal = document.querySelector('.js-homepageModal');
const startBtn = document.querySelector('.js-startBtn');

// transition homepage to gamepage
const countDownParagraph = document.querySelector('.js-countDown');

// gamepage
const scoreParagraph = document.querySelector('.js-score');
//const timeLeft = document.querySelector('.js-timeLeft');
const playBtn = document.querySelector('.js-playBtn');
const pauseBtn = document.querySelector('.js-pauseBtn');

const holes = document.querySelectorAll('.js-hole');
const moles = document.querySelectorAll('.js-mole');

const cursor = document.querySelector('.js-cursor');

let timeLeft;
let score = 0;

// let lastHole;
// let highScore = 0;

// game over modal
const modal = document.querySelector('.js-modal');

//          FUNCTIONS            //

//   if(hole === lastHole){ // if thats the same one
//     return getRandomHole(); // execute the function to get other hole (different from the last one)
//   }



const getRandomNumber = (max) => {
  return Math.ceil(Math.random() * max);
};

let hole;
// Get the random hole through which the mole will appear
const getRandomHole = () => {
  let holeIndex = getRandomNumber(holes.length);
  hole = holes[holeIndex];
  //return hole? para poder sacar lo demás a otra función

  // Appear the mole
  const holeContainer = hole.parentNode;
  const moleContainer = holeContainer.childNodes[3];
  moleContainer.classList.add('popUp');

};

// run game
const runGame = () =>{
  playBtn.classList.add('hidden');
  pauseBtn.classList.remove('hidden');
  setInterval(getRandomHole, 700);
};
//setTimeout


// start game
// countdown
let countdown;
const countdownToPlay = (sec) => {
  countdown = sec;
  const countdownDiv = document.createElement('div');

  if(countdown > 0){
    countdown--;
    countdownDiv.appendChild(countdown);
  } else{
    countdownDiv.classList.add('hidden');
  }
};

setInterval(countdownToPlay, 2000);


//       LISTENERS       //
// Start game
startBtn.addEventListener('click', () =>{
  homepageModal.classList.add('modalClosed');
  countdownToPlay(3);
  timeLeft= 20;
  score= 0;
  runGame();
});

// Run game
playBtn.addEventListener('click', runGame());

// Pause game
pauseBtn.addEventListener('click', () => {
  clearInterval(runGame);
  playBtn.classList.remove('hidden');
  pauseBtn.classList.add('hidden');
});

// Move cursor
window.addEventListener('mousemove', (event) => {
  cursor.style.top = event.pageY - 60 + 'px';
  cursor.style.left = event.pageX + 'px';

  window.addEventListener('click', ()=> {
    cursor.classList.add('hit');
    setTimeout(() => cursor.classList.remove('hit'), 100);
  });
});