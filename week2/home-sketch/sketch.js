let left = 570;
let b = true;
let drop;



function setup() {
	drop = loadSound("drop.mp3")
	createCanvas(windowWidth, windowHeight);
	background(250);
}



function draw() {
	strokeWeight(1);
	line(500, 100, 500, 400);
	line(500, 400, 400, 500);
	line(800, 100, 800, 400);
	line(800, 400, 900, 500);
	line(500, 400, 800, 400);
	noFill();
	rect(left - 45, 155, 30, 30);
	strokeWeight(2);
	fill(83, 89, 83);
	rect(left, 120, 160, 90);
	rect(left, 290, 160, 160);
	fill(145, 152, 159);
	rect(left + 10, 210, 140, 80);
	noFill();
	arc(left, 170, 60, 60, HALF_PI, PI);
	fill(28, 28, 28);
	circle(left - 30, 170, 12);
	rect(left + 75, 210, 10, 15);
	rect(left, 140, 100, 45);
	fill(203, 27, 69);
	circle(left + 130, 160, 10);
	strokeWeight(0.5);
	fill(129, 199, 212);
	if (b == false){
		ellipse(left + 80, 235+frameCount%50, 8, 10);
	}
	
	
}

function mousePressed(){
	let d = dist(mouseX, mouseY, left + 130,160);
	if (d <= 5){
		if (b == true){
			drop.loop(0,1.2);
			b = false;
		}else{
			b = true;
			drop.pause();
		}
	}
		
}