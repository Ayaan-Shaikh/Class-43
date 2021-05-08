var database;
var gameState=0,playerCount=0;
var game,player,form;
var allPlayers;
var cars,car1,car2,car3,car4;
var track,ground,car1Img,car2Img,car3Img,car4Img;
var f2;
var sound;
var carSound;
var passedFinish;
var finishedPlayers=0;
function preload(){
      track=loadImage("images/track.jpg");
     ground=loadImage("images/ground.png");
    car1Img=loadImage("images/car1.png");
    car2Img=loadImage("images/car2.png");
    car3Img=loadImage("images/car3.png");
    car4Img=loadImage("images/car4.png");
         f2=loadImage("images/f1.png");
      sound=loadSound("sound/sliding.mp3")
   carSound=loadSound("sound/car.mp3")
   }


function setup(){
        createCanvas(displayWidth,displayHeight);
        database=firebase.database()

     yVel=0;
     xVel=0;
     xSet=false;   
    game=new Game()
    game.getstate()
    game.start()

    obstacles=createGroup();
     
  for(i=0; i<5; i++){
      
    x=random(200,displayWidth-200);
    y=random(-height*4,height-300);
    f1=createSprite(x,y);
    f1.scale=0.8;
    f1.addImage(f2);
    obstacles.add(f1);     
   }
   
    
   
  
}

function draw(){
      
   if(playerCount===4&&finishedPlayers===0){
      game.update(1)
     }

   if(gameState===1){
      clear()
      game.play()
  }
    if(finishedPlayers===4){
       game.update(2);
    }

}

