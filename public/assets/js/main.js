'use strict';

//          GLOBAL CONSTS         //
const scoreParagraph = document.querySelector('.js-score');
const timeLeft = document.querySelector('.js-timeLeft');
const playBtn = document.querySelector('.js-playBtn');
const stopBtn = document.querySelector('.js-stopBtn');

const holes = document.querySelectorAll('.js-hole');
const moles = document.querySelectorAll('.js-mole');

let lastHole;
let timeUp = false;
let score = 0;

//          FUNCTIONS            //

// const getRandomTime = (min, max) => {
//   return Math.ceil(Math.random() * (max - min) + min);
// };

// const getRandomNumber = (max) => {
//   return Math.ceil(Math.random() * max);
// };

// // Get the random hole through which the mole will appear
// const getRandomHole = () => {
//   const holeIndex = getRandomNumber(holes.length);
//   //   const holeIndex = Math.ceil(Math.random() * holes.length);
//   const hole = holes[holeIndex];
//   if(hole === lastHole){ // if thats the same one
//     return getRandomHole(); // execute the function to get other hole (different from the last one)
//   }

//   const visibleMole = getRandomHole();
//   visibleMole.classList.add("popUp");

//   lastHole = hole;
//   return hole;
// };

// Function to appear the mole
// const popUpMole = () => {
//    setInterval(getRandomHole, 400)
// };

//popUpMole();

const getRandomNumber = (max) => {
  return Math.ceil(Math.random() * max);
};
let hole;
const getRandomHole = () => {
  let holeIndex = getRandomNumber(holes.length);
  hole = holes[holeIndex];
  //   console.log(hole);

  const holeContainer = hole.parentNode;
  //console.log(holeContainer.childNodes[3]);
  const moleContainer = holeContainer.childNodes[3];
  moleContainer.classList.add('popUp');

};

const startGame = () =>{
  playBtn.classList.add('hidden');
  stopBtn.classList.remove('hidden');
  setInterval(getRandomHole, 700);
};

playBtn.addEventListener('click', startGame());
stopBtn.addEventListener('click', () => clearInterval(startGame));
//# sourceMappingURL=main.js.map
