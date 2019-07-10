var colors = getRandomColor(6);
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var pickColor = colors[Math.floor(Math.random() * 6)];
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var isHardMode = true;
colorDisplay.textContent = pickColor.toUpperCase();

easyBtn.addEventListener('click', function(){
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  colors = getRandomColor(3);
  pickColor = colors[Math.floor(Math.random() * 3)];
  colorDisplay.textContent = pickColor.toUpperCase();
  for(var i = 0; i<squares.length; ++i){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = 'none';
    }
  }
  isHardMode = false;
});

hardBtn.addEventListener('click', function(){
  easyBtn.classList.remove('selected');
  hardBtn.classList.add('selected');
  // setting colors
  colors = getRandomColor(6);
  pickColor = colors[Math.floor(Math.random() * 6)];
  colorDisplay.textContent = pickColor.toUpperCase();
  for(var i =0; i<squares.length; ++i){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
  }
  isHardMode = true;
});

resetButton.addEventListener('click', function(){
  // generate all new colors;
  colors = getRandomColor((isHardMode ? 6 : 3));
  // pick a new random color from array
  pickColor = colors[Math.floor(Math.random() * (isHardMode ? 6 : 3))];
  // change colorDisplay
  colorDisplay.textContent = pickColor;
  // change colors of squares
  h1.style.backgroundColor = "steelblue";
  this.textContent = "New Colors"
  for(var i = 0; i < squares.length; ++i){
    squares[i].style.backgroundColor = colors[i];
    if(!isHardMode && i >=3){
      squares[i].style.display = 'none';
    }else{
      squares[i].style.display = 'block';
    }
  }
  messageDisplay.textContent = "";
});

function getRandomColor(numOfColors) {
  var colors = [];
  for (var j = 0; j < numOfColors; ++j) {
    var color = [];
    for (var i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 255));
    }
    colors.push(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
  }
  return colors;
}

function clickCorrect() {
  for (var i = 0; i < squares.length; ++i) {
    squares[i].style.backgroundColor = pickColor;
  }
  h1.style.backgroundColor = pickColor;
  resetButton.textContent = 'Play Again?';
}

function clickSquareEventFunction() {
  // grab color of clicked square
  var clickedColor = this.style.backgroundColor;
  // compare
  if (clickedColor === pickColor) {
    clickCorrect();
    messageDisplay.textContent = 'Correct!';
    return;
  } else {
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = 'Try Again';
  }
}

for (var i = 0; i < squares.length; ++i) {
  var square = squares[i];
  square.style.backgroundColor = colors[i];
  square.addEventListener('click', clickSquareEventFunction);
}