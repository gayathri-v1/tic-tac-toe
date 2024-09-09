// function player(name,marker){
//      name=name;
//      marker=marker;
//     return {name,marker};
// }
// const player1=player('player1','X');
// const player2=player('player2','O');
// console.log(player1);

const game=["","","","","","","","",""];

const tiles= document.querySelectorAll('.container div');
let count=0;
tiles.forEach(function(tile){
   
    tile.addEventListener('click',function(){
        
        count++;
        const value=tile.getAttribute('value');
        marker = (count % 2 == 0) ? 'O' : 'X';
        tile.textContent=marker;
        game[value]=marker;
        if(count>=5){
            showResult();
            
            }
        
    })
})







//display the winner result
const cont= document.querySelector('.cont');

function showResult(){
const resultDisplay= document.createElement('p');
cont.appendChild(resultDisplay);
const result=winner(game);
if(winner(game)){
resultDisplay.textContent=result;

}
}

//play again button
const playAgain= document.createElement('button');
cont.appendChild(playAgain);
playAgain.textContent="Play another round";


//If X then return player1 else return player2
function playerResult(game,i){
    if(game[i]!==""){
    if(game[i]==='X')
        return 'Winner is Player1';
        return 'Winner is Player2';
}
    return 'nobody'
}

//gameboard logic
function winner(game){   
if(game[0] === game[3] && game[3] === game[6]) {
    return playerResult(game,0);
}
else if(game[1] === game[4] && game[4] === game[7]) {
    return playerResult(game,1);
}
else if(game[2] === game[5] && game[5] === game[8]) {
    return playerResult(game,2);
}
else if(game[0] === game[1] && game[1] === game[2]) {
    return playerResult(game,0);
}
else if(game[3] === game[4] && game[4] === game[5]) {
    return playerResult(game,3);
}
else if(game[6] === game[7] && game[7] === game[8]) {
    return playerResult(game,6);
}
else if(game[0] === game[4] && game[4] === game[8]) {
    return playerResult(game,0);
}
else if(game[2] === game[4] && game[4] === game[6]){
    return playerResult(game,2);
}
else{
    return "Nobody is winner!"
}
}
