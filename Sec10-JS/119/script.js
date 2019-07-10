function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

function changeBG(){
    var body = document.querySelector("body");
    body.style.backgroundColor = getRandomColor();
}

document.querySelector("button").addEventListener("mousedown", changeBG);