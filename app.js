/*
key points:
1. This game has two players
2. In each round one player rolls the dice as many times as he wants untill he rolls a 1. if he rolls 1 then current score becomes 0 and other player gets the chance to roll.
3. if a player wants he can HOLD the current score.in that case it will be added to his global score.
4. first player to reach 100 will win;

*/



var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;



//document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';




document.querySelector('.btn-roll').addEventListener('click', function () {
    //random number

    var dice = Math.floor(Math.random() * 6 + 1);

    //display the number

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //update roundScore if the random number is not 1

    if (dice !== 1) {
        //add to roundScore
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //nextplayer
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';

    }
});
