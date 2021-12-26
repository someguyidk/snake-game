let gameCanvas,ctx,game;

class snake {
	constructor(){

	}
}

function init() {
	gameCanvas = document.getElementById('canvas');
	gameCanvas.width = 600;
	gameCanvas.height = 600;
  console.log(gameCanvas);
	ctx = gameCanvas.getContext('2d');	
}

function draw(x,y,turn, board) {
	let XO1 = new ficha(x,y,turn);

}

function mouseClicked(event) {
  if (game == true) {
    var mx = event.clientX;
    var my = event.clientY;
    var rect = gameCanvas.getBoundingClientRect();
    
    if (mx - rect.left < 200) {
      x = 0;
    } else if (mx - rect.left <400) {
      x = 200;
    } else if (mx - rect.left <600) {
      x = 400;
    }
    if (my - rect.top < 200) {
      y = 0;
    } else if (my - rect.top <400) {
      y = 200;
    } else if (my - rect.top <600) {
      y = 400;
    }
    var coords = "X coords: " + mx + ", Y coords: " + my + "\n x: " + x +", y: "+ y;
    console.log(coords);
}