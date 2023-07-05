
var navio,navioImg;
var mar,marImg;



function preload(){
  navioImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  marImg = loadImage("sea.png");
}

function setup(){
  createCanvas(800,600);
  navio = createSprite(130,200,30,30);
  navio.addAnimation("navio",navioImg);
  navio.scale = 0.25

  mar = createSprite(200,200,100,100);
  mar.addImage(marImg);
  mar.scale = 0.5;
}

function draw() {
  background("blue");
    drawSprites();

 
}
