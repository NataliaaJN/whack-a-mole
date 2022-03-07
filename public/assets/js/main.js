'use strict';

//          GLOBAL CONSTS         //
// homepage
const homepageModal = document.querySelector('.js-homepageModal');
const title = document.querySelector('.js-title');
const startBtn = document.querySelector('.js-startBtn');

// transition homepage to gamepage
const countDownPage = document.querySelector('.js-countDown__page');
const countDownParagraph = document.querySelector('.js-countDown');

// gamepage
const gamePage = document.querySelector('.js-gamePage');
const logo = document.querySelector('.js-logo');
const timeLeftParagraph = document.querySelector('.js-timeLeft');
const scoreParagraph = document.querySelector('.js-score');
const playBtn = document.querySelector('.js-playBtn');
const pauseBtn = document.querySelector('.js-pauseBtn');

const holes = document.querySelectorAll('.js-hole');
const moles = document.querySelectorAll('.js-mole');

const cursor = document.querySelector('.js-cursor');

// Pause game
const pauseModal = document.querySelector('.js-pauseModal');
const currentScore = document.querySelector('.js-currentScore');
const currentTimeLeft = document.querySelector('.js-currentTimeLeft');
const resumeGameBtn = document.querySelector('.js-resumeGameBtn');

// Game over
const gameOverModal = document.querySelector('.js-gameOverModal');
const finalScore = document.querySelector('.js-finalScore');
const playAgainBtn = document.querySelector('.js-playAgainBtn');
const exitBtn = document.querySelector('.js-exitBtn');

let visibleModal = false;
let timeLeft = 20;
let score = 0;
let misses = 0;
// let lastHole;
// let highScore = 0;


//          FUNCTIONS            //

//   if(hole === lastHole){ // if thats the same one
//     return getRandomHole(); // execute the function to get other hole (different from the last one)
//   }

// Get the time left
const getTimeLeft = () => {
  if (timeLeft > 0) {
    timeLeft--;
    timeLeftParagraph.innerHTML = timeLeft;
  }
};

// Update score
const updateScore = () => {
  score += 10;
  console.log(score);
  scoreParagraph.innerHTML = score;
};

// Get random number
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

  mole.addEventListener('click', updateScore);

  setTimeout(() => {
    mole.classList.remove('popUp');
  }, 1100);
};



// Game over
const gameOver = () => {
  gameOverModal.classList.remove('hidden');
  finalScore.innerHTML = score;
};

// run game
const runGame = () => {
  // si meto las clases en esta función, se me repiten con el setInterval
  playBtn.classList.add('hidden');
  pauseBtn.classList.remove('hidden');
  //setInterval(getRandomMole, 700);
  //setInterval(getTimeLeft, 1000);
  getTimeLeft();
  if (timeLeft > 0) {
    getRandomMole();
  } else {
    gameOver();
  }
};



//         START GAME        //
// countdown
let countdown = 3;
// countdown function
const getCountdown = () => {
  if (countdown > 0){
    countdown--;
    countDownParagraph.innerHTML = countdown;
  }
};


const countdownToPlay = () => {
  title.classList.add('hidden');
homepageModal.classList.add('hidden');
countDownParagraph.classList.remove('hidden');
  
  // countdown = sec;
  while(countdown > 0) {
    countDownParagraph.innerHTML = countdown;
    let timeToWakeUp = new Date().getTime() + 1500;
    while (new Date().getTime() <= timeToWakeUp) {}
    countdown--;
    // setInterval(getCountdown, 1500);
  }
  countDownPage.classList.add('hidden');
  gamePage.classList.remove('hidden');
  logo.classList.remove('hidden');
  runGame();
  // if (countdown > 0) {
  //   setInterval(getCountdown, 1500);
  //   // countdown--;
  //   // countDownParagraph.innerHTML = countdown;
  // } else {
  //   countDownPage.classList.add('hidden');
  //   gamePage.classList.remove('hidden');
  //   logo.classList.remove('hidden');
  //   runGame();
  // }
};

// Start game
const startGame = () => {
  homepageModal.classList.add('hidden');
  countDownPage.classList.remove('hidden');
  // setInterval(countdownToPlay, 1500);
  countdownToPlay();
  score = 0;
};

// play again
const playAgain = () => {
  gameOverModal.classList.add('hidden');
  timeLeft = 20;
  score = 0;
  scoreParagraph.innerHTML = score;
  //setInterval(countdownToPlay, 1000);
  countdownToPlay();
};

// Pause game
const pauseGame = () => {
  //clearInterval(getRandomMole);
  timeLeftParagraph.innerHTML = timeLeft;
  playBtn.classList.remove('hidden');
  pauseBtn.classList.add('hidden');
  pauseModal.classList.remove('hidden');
  currentScore.innerHTML = score;
  currentTimeLeft.innerHTML = timeLeft;
};

// Resume game
const resumeGame = () => {
  playBtn.classList.add('hidden');
  pauseBtn.classList.remove('hidden');
  pauseModal.classList.add('hidden');
  scoreParagraph.innerHTML = score;
  timeLeftParagraph.innerHTML = timeLeft;
  runGame();
};

// Exit game
const exitGame = () => {
  homepageModal.classList.remove('hidden');
  gamePage.classList.add('hidden');
};

//       LISTENERS       //
// Start game
startBtn.addEventListener('click', startGame);
// startBtn.addEventListener('click', () => {
//   homepageModal.classList.add('hidden');
//   countDownPage.classList.remove('hidden');
//   // setInterval(countdownToPlay, 1500);
//   countdownToPlay();
//   score = 0;
// });

// Run game
playBtn.addEventListener('click', runGame);

// Pause game
pauseBtn.addEventListener('click', pauseGame);

// Resume game
resumeGameBtn.addEventListener('click', resumeGame);

// Play again
playAgainBtn.addEventListener('click', playAgain);

// Exit game
exitBtn.addEventListener('click', exitGame);


//           MOVE CURSOR          //
window.addEventListener('mousemove', (event) => {
  cursor.style.top = event.pageY - 60 + 'px';
  cursor.style.left = event.pageX - 75 + 'px';

  // Hit mole
  window.addEventListener('click', () => {
    cursor.classList.add('hit');
    setTimeout(() => cursor.classList.remove('hit'), 100);
  });
});

//# sourceMappingURL=main.js.map
