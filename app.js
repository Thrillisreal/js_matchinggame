let cards = document.querySelectorAll('.card-inside')
// let card2 = 
let turn = 1


let currentCards = []


cards.forEach(card => {
  card.addEventListener('click', function(e){
    if(turn === 1){
      // A function that flips the card//
      currentCards.push(e.target)
      turn = 2
    }else{
      // Pushes card into the array //
      currentCards.push(e.target)
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


// function start(){
  
// }




function showCard(){
 console.log('The card is clicked')
} 
console.log(showCard())
let clickedCard = document.querySelectorAll('.card-inside').addEventListener('click', showCard())
//Check if innerText works to append it to the DOM//





function match(){
  if(card === card2){
    document.innerText = 'You got a match!'
    console.log('This function works');
  }else{
    document.innerText = 'Try again!'
  }
}

