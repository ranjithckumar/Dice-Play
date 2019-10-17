var score,roundScore,activePlayer;
scores=[0,0];
roundScore=0;
activePlayer=0;
// // Changing Palyer score
// document.querySelector('#current-'+ activePlayer).textContent=dice;
// var x=document.querySelector("#score-0").textContent;
// console.log(x); 
// Hiding dice
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
// Adding event listener for rolling botton
document.querySelector('.btn-roll').addEventListener('click',function(){
    // Random number
    var dice=Math.floor(Math.random()*6)+1;

    // Dispaly results
   var diceDOM= document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='./images/dice-' + dice + '.png';
    // Update the round score if the rolled number is greater than 1 otherwise we loose current score and next palyer turn
     if(dice !== 1){
        //  Add score
         roundScore+=dice;
         document.querySelector('#current-'+ activePlayer).textContent=roundScore;
     }
     else{
        //  Next player
        activePlayer===0 ? activePlayer=1:activePlayer=0;
        roundScore=0;
        document.getElementById('current-0').textContent=0;
        document.getElementById('current-1').textContent=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
     }
})