'use strict';

//          GLOBAL CONSTS         //
const scoreParagraph = document.querySelector('.js-score');
const timeLeft = document.querySelector('.js-timeLeft');
const playBtn = document.querySelector('.js-playBtn');
const stopBtn = document.querySelector('.js-stopBtn');

const holes = document.querySelectorAll('.js-hole');
const moles = document.querySelectorAll('.js-mole');

const cursor = document.querySelector('.js-cursor');

let lastHole;
let timeUp = false;
let score = 0;

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

const startGame = () =>{
  playBtn.classList.add('hidden');
  stopBtn.classList.remove('hidden');
  setInterval(getRandomHole, 700);
};
//setTimeout

playBtn.addEventListener('click', startGame());
stopBtn.addEventListener('click', () => {
  clearInterval(startGame);
  playBtn.classList.remove('hidden');
  stopBtn.classList.add('hidden');
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