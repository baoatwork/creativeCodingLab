function preload(){
    myFont = loadFont("dancingFont.ttf");
    

}


function setup(){
    createCanvas(windowWidth,windowHeight);
    img = loadImage ("stardust.png");
}

function draw(){
    //The poster background
    fill(8,25,45);
    rect(100,50,300,500);
    
    fill(255,255,251);
    noStroke();

    push();
    translate(250,420);
    rotate(PI/3.65);
    rect(0,-220,1,420);
    pop();

    push();
    translate(250,420);
    rotate(PI/40);
    rect(-150,-60,300,1);
    rotate(PI /60);
    rect(-150,60,300,1);
   

    rotate(-PI /120);
    
    fill(255,255,251);
    rect(-150,1,300,1);
    fill(129,199,212);
    ellipse(0,0,60,36);
    
    pop();

   

    
    textFont(myFont);
    textSize(30);
    text("GO", 230, 110);


    push();
    translate(100,50);
    tint(255,126);
    image(img,0,0,300,300);
    pop();
}