let card = document.querySelectorAll('.card-inside')
// let card2 = 


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

