let shapes = [];
let shapeType;
let shapeHue;
let shape;
let check;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	colorMode(HSB, 100);
  background(0, 0, 100);
	shapes.forEach(({x, y, color, shapeType}) => {
		fill(color);
		switch (shapeType) {
			case'ellipse':
				ellipse(x, y, 20, 20);
				break;
			case 'rect':
				rect(x, y, 20, 20);
        break;
      case "arc":
        arc(x,y,20,20,0,HALF_PI);
		}
	});
}

function mousePressed() {
	shapeType = random(['ellipse', 'rect',"arc"]);
	shapeHue = random(100);
}	

function mouseDragged() {
  let shapeColor = color(shapeHue, 50, 100);
  
  if (shapes.length > 0){
    check = shapes.pop();
    console.log(check);

  let newX = myX();
  
  var newY = myY();

   shape = {shapeType, color: shapeColor, x: newX, y: newY};
  shapes.push(check);
  }else{
    shape = {shapeType, color: shapeColor, x: mouseX, y: mouseY};
  }
  
	

  shapeHue = (shapeHue + 1) % 100;
  
  shapes.push(shape);
  if (shapes.length > 20){
    shapes.shift();
  }

  return false;
}

function myX(){
  if (mouseX > check.x +10){
    return check.x +10;
  }else if(mouseX < check.x -10){
    return check.x -10;
  }else{
    return check.x;
  }
}

function myY(){
  if (mouseY > check.y +10 ){
    return check.y +10;
  }else if(mouseY < check.y -10){
    return check.y -10;
  }else{
    return check.y;
  }
}