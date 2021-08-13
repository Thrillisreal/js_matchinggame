const outsideCards = document.querySelectorAll('.card-outside')
const shuffledOutsideCards = shuffle(outsideCards)
const board = document.querySelector('.board')
const message = document.querySelector('#message')



let numbMatchedCards = 0

let cards = document.querySelectorAll('.card-inside')
let turn = 1
let currentCards = []

shuffle(cards)
function flip(card) {
  //get source of the first card//
  console.log('card', card)
  card.lastElementChild.lastElementChild.src =
    card.firstElementChild.firstElementChild.src
  console.log(card.firstElementChild.firstElementChild)
}

function flipBack(card) {
  //set image source back to the back of the card
  card.src = 'back.png'
}
cards.forEach((card) => {
  card.addEventListener('click', function (e) {
    if (turn === 1) {
      // A function that flips the card//
      flip(card)
      currentCards.push(e.target)

      turn = 2
    } else {
      flip(card)
      // Pushes card into the array //
      currentCards.push(e.target)
      //Check if sources are the same, and if they are then keep then back with conditional
      if (currentCards[0].src === currentCards[1].src) {
        // check if sources match//
        console.log('match')
        numbMatchedCards++
        currentCards = []
        checkWin()
      } else {
        // flips them back //
        console.log('no match')
        console.log(currentCards)
        setTimeout(function () {
          flipBack(currentCards[0])
          flipBack(currentCards[1])
          currentCards = []
        }, 1500)
      }
      turn = 1
    }
  })
})


function shuffle(cards){
  // not my code, recieved from James Bubb online
  //https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
const cardsArray = [...cards]


  const shuffledCards = cardsArray.sort((a, b) => 0.5 - Math.random());
  shuffledCards.forEach(currentCard => {
 console.log(currentCard.firstElementChild.firstElementChild);
  })
  return shuffledCards
}

function showNewCards(){
 board.innerHTML = ''
 shuffledOutsideCards.forEach(currentCard => {
   board.append(currentCard)
  // console.log(currentCard.firstElementChild.firstElementChild);
   })
}
showNewCards()


function checkWin(){
  if(numbMatchedCards === 8)
  message.innerHTML = 'You Win This Time...'
}
