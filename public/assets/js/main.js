'use strict';

//          GLOBAL CONSTS         //
// homepage
const homepageModal = document.querySelector('.js-homepageModal');
const startBtn = document.querySelector('.js-startBtn');

// transition homepage to gamepage
const countDownPage = document.querySelector('.js-countDown__page');
const countDownParagraph = document.querySelector('.js-countDown');

// gamepage
const gamePage = document.querySelector('.js-gamePage');
const scoreParagraph = document.querySelector('.js-score');
//const timeLeft = document.querySelector('.js-timeLeft');
const playBtn = document.querySelector('.js-playBtn');
const pauseBtn = document.querySelector('.js-pauseBtn');

const holes = document.querySelectorAll('.js-hole');
const moles = document.querySelectorAll('.js-mole');

const cursor = document.querySelector('.js-cursor');

let timeLeft = 20;
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

let mole;
// Get the random mole that will appear
const getRandomMole = () => {
  let moleIndex = getRandomNumber(moles.length);
  mole = moles[moleIndex];
  //return hole? para poder sacar lo demás a otra función
  mole.classList.add('popUp');

  setTimeout(() => {
    mole.classList.remove('popUp');
  }, 500);
};


// run game
const runGame = () => {
  playBtn.classList.add('hidden');
  pauseBtn.classList.remove('hidden');
  setInterval(getRandomMole, 700);
};


// start game
// countdown
let countdown=3;
const countdownToPlay = () => {
  homepageModal.classList.add('hidden');
  countDownParagraph.classList.remove('hidden');
  // countdown = sec;
  
  if (countdown > 0) {
    countdown--;
    countDownParagraph.innerHTML = countdown;
    console.log(countDownParagraph);
  } else {
    countDownPage.classList.add('hidden');
    gamePage.classList.remove('hidden');
    runGame();
  }
};



//       LISTENERS       //
// Start game
startBtn.addEventListener('click', () => {
  homepageModal.classList.add('hidden');
  countDownPage.classList.remove('hidden');
  setInterval(countdownToPlay, 1500);
 // countdownToPlay();
  timeLeft = 20;
  score = 0;
 
});

// Run game
playBtn.addEventListener('click', runGame);

// Pause game
pauseBtn.addEventListener('click', () => {
  clearInterval(getRandomMole);
  playBtn.classList.remove('hidden');
  pauseBtn.classList.add('hidden');
});

//           MOVE CURSOR          //
window.addEventListener('mousemove', (event) => {
  cursor.style.top = event.pageY - 60 + 'px';
  cursor.style.left = event.pageX- 75 + 'px';

  // Hit mole
  window.addEventListener('click', () => {
    cursor.classList.add('hit');
    setTimeout(() => cursor.classList.remove('hit'), 100);
  });
});

//# sourceMappingURL=main.js.map
