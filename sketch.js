const World=Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var car1, car2, cat, dog, tree, track1, track2, bg1sprite;
//images
var car1Img, car2Img, catImg, dogImg, bg1, bg2, trackImg, treeImg, bg1spriteImg;

var groundCount = 0;
var count = 100;

function preload(){

  car1Img = loadImage("photos/car1.png");
  car2Img = loadImage("photos/car1.png");
  bg1 = loadImage("photos/background1.jpeg");
  bg2 = loadImage("photos/background2.jpeg");
  catImg = loadAnimation("photos/cat1.png", "photos/cat2.png", "photos/cat3.png", "photos/cat4.png");
  dogImg = loadAnimation("photos/dog1.png", "photos/dog2.png", "photos/dog3.png", "photos/dog4.png")
  treeImg = loadImage("photos/fallentree.jpeg");
  trackImg = loadImage("photos/track.jpeg");
  bg1spriteImg = loadImage("photos/bg1.jpeg");
  
}

function setup() {
  createCanvas(1400,800);
  engine = Engine.create();
  world = engine.world;

  
  
  track1 = createSprite(350,700,500,400);
  track1.addImage(trackImg);
  //track1.scale = 0.7;

  bg1sprite= createSprite(420, 500);
  bg1sprite.addImage(bg1spriteImg);
  bg1sprite.scale = 1.5;

  track2 = createSprite(1075,700,500,400);
  track2.addImage(trackImg);
  track2.scale = 0.7;
  
  car1 = createSprite(350, 750, 50, 50);
  car1.addImage(car1Img);
  
  car2 = createSprite(1050,750,50,50);
  car2.addImage(car2Img);
  
  /*
  cat = createSprite(50,700,50,50);
  cat.addAnimation("walk cat",catImg);
  cat.visible = false;

  dog = createSprite(800,700,50,50);
  dog.addAnimation("walk dog",dogImg);
  dog.visible = false;
  */

  midEdge = createSprite(700,400,10,800);
  
  tree = createSprite(500,500,50,50);
  tree.addImage(treeImg);
  tree.visible = false;

}

function draw() {
  background(0); 
  Engine.update(engine);
  console.log(groundCount);
  image(bg1, -100, 0, 900, 1000);
  image(bg2, 700, 0, 700, 800);

  //CONTROLS OF THE CAR1
  if(keyDown(UP_ARROW)&&track1.y<800){
    track1.y = track1.y+3;

    if(groundCount < count){
      //RELOADING GROUND
      if(track1.y>710){
        track1.y = 700;
        groundCount++;
      }
    }
  }
  
  /*
  if(keyDown(DOWN_ARROW)){
    track1.y = track1.y-3;
  }
  */

  if(keyDown(LEFT_ARROW) && track1.x<530){
    track1.x = track1.x + 3;
  }

  if(keyDown(RIGHT_ARROW) && track1.x > 150){
    track1.x = track1.x - 3;
  }

    if(groundCount===Math.round(count/4) || groundCount===Math.round(count/2) || groundCount===Math.round(3*count/4)){
      strays1();
      groundCount++
    }

  drawSprites();
}