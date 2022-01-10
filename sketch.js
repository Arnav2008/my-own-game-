var bg
var bgimg
var ninja,n


function preload (){
bg=loadImage("bg.jpg")
n=loadAnimation("image1.png","image2.png","image3.png","image4.png","image5.png")

}

function setup() {
    createCanvas(windowWidth,windowHeight);
    bgimg=createSprite(width/2,height/2,width,height);
    bgimg.addImage(bg)
    ninja=createSprite(200,height-100,50,50);
    ninja.addAnimation("ninja",n);

  }

function draw() {
  background("white");
  
  bgimg.velocityX=-8;
  if(bgimg.x<0){
  bgimg.x=width/2

  }




  drawSprites();
  }





























