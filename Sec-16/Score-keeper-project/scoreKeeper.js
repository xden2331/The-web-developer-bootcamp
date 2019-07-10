var playerOne = document.getElementsByTagName("button")[0];
var playerTwo = document.getElementsByTagName("button")[1];
var reset = document.getElementsByTagName("button")[2];
var scoreInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var left = document.getElementById('left');
var right = document.getElementById('right');
var p1Score = 0;
var p2Score = 0;
var limit = 5;

playerOne.addEventListener('click', function(){
    if(p1Score === limit || p2Score === limit){
        return;
    }
    p1Score++;
    left.textContent = p1Score;
    if(p1Score === limit){
        left.classList.toggle("winner");
    }
});

playerTwo.addEventListener('click', function(){
    if(p1Score === limit || p2Score === limit){
        return;
    }
    p2Score++;
    right.textContent = p2Score;
    if(p2Score === limit){
        right.classList.toggle("winner");
    }
});

reset.addEventListener('click', resetFunc);

scoreInput.addEventListener('input', function(){
    resetFunc();
    winningScoreDisplay.textContent = this.value;
    limit = Number(this.value);
});

function resetFunc(){
    p1Score = 0;
    p2Score = 0;
    left.textContent = p1Score;
    right.textContent = p2Score;
    limit = 5;
    winningScoreDisplay.textContent = limit;
    left.classList.remove('winner');
    right.classList.remove('winner');
}

left.addEventListener('mouseenter', function(){
    left.classList.toggle('winner');
});

left.addEventListener('mouseout', function(){
    left.classList.toggle('winner');
});