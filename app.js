let cards = document.querySelectorAll('.card-inside')
let button = document.getElementById('')

// let card2 = 
let turn = 1


let currentCards = []

function flip(card){
 //get source of the first card//
card.lastElementChild.lastElementChild.src=card.firstElementChild.firstElementChild.src
 console.log(card.firstElementChild.firstElementChild);
}

function flipBack(card){
  //set image source back to the back of the card
  card.src='back.png'
//e.target when calling//
}
cards.forEach(card => {
  card.addEventListener('click', function(e){
    if(turn === 1){
      // A function that flips the card//
      flip(card)
      currentCards.push(e.target)
      
      turn = 2
    }else {
      flip(card)
      // Pushes card into the array //
      currentCards.push(e.target)
  //Check if sources are the same, and if they are then keep then back with conditional
      
  
  
  // flipBack(e.target)
      // Checks to see if theres a match //
      
      // Empty of cards from the array we created //
      currentCards = []
      
      //If there is a match, the cards stays flipped, and if not it flips back over//
      
      
      //A function that flips the card the second turn //
      turn = 1
    }
  console.log(turn, currentCards)
  })

})


// function stop(){
  
// }




// function showCard(){
//  console.log('The card is clicked')
// } 
// console.log(showCard())
// let clickedCard = document.querySelectorAll('.card-inside').addEventListener('click', showCard())
//Check if innerText works to append it to the DOM//





function match(){
  if(card === card2){
    document.innerText = 'You got a match!'
    console.log('This function works');
  }else{
    document.innerText = 'Try again!'
  }
}

