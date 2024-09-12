function player(name,marker){ //factory function that returns object
     name=name;
     marker=marker;
    return {name,marker};
}
const player1=player('player1','X'); //creating two player objects
const player2=player('player2','O');

const game= ["","","","","","","","",""];

const tiles= document.querySelectorAll('.container div');
let count=0;
tiles.forEach(function(tile){
   
    tile.addEventListener('click',function(event){
        
        count++;
        const value=tile.getAttribute('value');
        let symbol = (count % 2 == 0) ? player2.marker : player1.marker;
        if(count <=9){
        tile.textContent=symbol;
        game[value]=symbol;
        }
        showResult(count);    
    })
    })

//display the winner result and returns to tile click event
const cont= document.querySelector('.cont');
const resultDisplay= document.createElement('p');

function showResult(count){
cont.appendChild(resultDisplay);
const result=winner(game);
if (count>=5 && count<=9){
if(winner(game)){
    console.log(result)
    resultDisplay.textContent=result;

}
}
if(count===9){
    if(!winner(game)){
        resultDisplay.textContent="No one is winner";
    }
}
}

//play again button event
const playAgain= document.createElement('button');
cont.appendChild(playAgain);
playAgain.textContent="Play another round";
playAgain.addEventListener('click',function(){
    tiles.forEach(function(tile){
        const value=tile.getAttribute('value');
        game[value]="";
        tile.textContent="";
        resultDisplay.textContent="";
        count=0;
    })
})

//result returns to winner()
function playerResult(){ // outer function

 return function(game,i){ //closure is used, this returns the value when called by CheckResult(). game, i is accessed from outer scope
    if(game[i]!==""){
    if(game[i]==='X')
        return 'Winner is Player1';
        return 'Winner is Player2';
}
}
}

//gameboard logic. result returns to showResult()
function winner(game){  
    const checkResult=playerResult(); 
if(game[0] === game[3] && game[3] === game[6]) {
    return checkResult(game,0);
}
else if(game[1] === game[4] && game[4] === game[7]) {
    return checkResult(game,1);
}
else if(game[2] === game[5] && game[5] === game[8]) {
    return checkResult(game,2);
}
else if(game[0] === game[1] && game[1] === game[2]) {
    return checkResult(game,0);
}
else if(game[3] === game[4] && game[4] === game[5]) {
    return checkResult(game,3);
}
else if(game[6] === game[7] && game[7] === game[8]) {
    return checkResult(game,6);
}
else if(game[0] === game[4] && game[4] === game[8]) {
    return checkResult(game,0);
}
else if(game[2] === game[4] && game[4] === game[6]){
    return checkResult(game,2);
}
}
