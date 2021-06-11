// giving local variables
var PLAY = 1;
var END = 0;
var START = 2;
var gameState = START;
var zombie,z1i,z2i,z3i,z4i;
var story_img,bg,di;
let fingers;
var score = 0;

function preload(){
    // loading animations and images of the game
    z1i = loadAnimation("characters/z1.gif");
    z2i = loadAnimation("characters/z2.gif");
    z3i = loadAnimation("characters/z3.gif");
    z4i = loadAnimation("characters/z4.gif");
    story_img = loadImage("mg/story.png");
    htpi = loadImage("mg/htp.png");
    boli = loadImage("mg/bol.png");
    d1i = loadAnimation("scary/clown.gif");
    di = loadAnimation("scary/9BLC.gif");
    d2i = loadAnimation("scary/danger.gif");
    d3i = loadAnimation("scary/giphy.gif");
    d4i = loadAnimation("scary/salems-lot.gif");
    d5i = loadAnimation("scary/skull.gif");
    d6i = loadAnimation("scary/tenor.gif");
    d7i = loadAnimation("scary/mf.gif");
    sbg = loadImage("mg/bg.jpg");
    bg = loadImage("mg/bg2.jpg");
    GO = loadImage("mg/go.jpg");
    yrdi = loadImage("scary/yrd.jpg"); 
    logoi = loadImage("mg/Eternal Fear.png");   
}

function setup(){

createCanvas(1400,750);

// creating sprites of various components of the game
logo = createSprite(750,325,100,100);
logo.addImage("logo",logoi);
logo.visible = true;
logo.scale = 0.8;
logo.depth = background.depth+2;

story = createSprite(700,350,10,650);
story.addImage("story of the game",story_img);
story.visible = false;
story.scale = 0.65;
story.depth = logo.depth+2;

htp = createSprite(700,325);
htp.addImage("how to play",htpi);
htp.visible = false;

bol = createSprite(700,325);
bol.addImage("best of luck",boli);
bol.visible = false;

go = createSprite(750,325);
go.addImage("gameOver",GO);
go.visible = false;

yrd = createSprite(750,325);
yrd.addImage("you are dead image",yrdi);
yrd.visible = false;

zombieGroup = new Group();
score = 0;

}

function draw(){
    background(0);
    if(gameState === START){

        if(mousePressedOver(logo)){
            logo.visible = false;
            story.visible = true;
            // background(sbg);
        }

        if(mousePressedOver(story)){
            story.visible = false;
            htp.visible = true;
        }

        if(mousePressedOver(htp)){
            htp.visible = false;
            bol.visible = true;
        }

        if(mousePressedOver(bol)){
            bol.visible = false;
            gameState === PLAY;
        }
    

    if(gameState === PLAY){
        background(bg);
        spawnZombie();
        spawnScary();
    }

    if(gameState = END){
        go.visible = true;
        go.lifetime = 100;
        yrd.visible = true;
        if(mousePressedOver(yrd)){
            gameState === START
        }
    }
    
    drawSprites();
  }
}

// creating obstacles for the game
function spawnZombie() {
    if(frameCount % 250 === 0 && gameState === PLAY) {
     var zombie = createSprite(800,330,20,50);

    //  it will be changed afterwards
     zombie.velocityX = -6;
     zombie.y = random(200,350);
     zombie.depth = background.depth+2;
     
     //generate random zombie
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: zombie.addAnimation("1",z1i);
                zombie.scale = 0.1;
                break;
        case 2: zombie.addAnimation("2",z2i);
                zombie.scale = 0.3;
                break;
        case 3: zombie.addAnimation("3",z3i);
                zombie.scale = 0.2;
                break;
        case 4: zombie.addAnimation("4",z4i);
                zombie.scale = 0.5;
                break;
   }
     zombieGroup.add(zombie);
   }
   }

// spawning scary gif in middle to make the game interesting
function spawnScary(){
    if(frameCount % 400 === 0 && gameState === PLAY) {
     var scary = createSprite(750,325,100,100);
     scary.depth = zombie.depth+5;
     scary.lifetime = 100;

     var rand = Math.round(random(1,8));
      switch(rand) {
        case 1: scary.addAnimation("9BLC",di);
                scary.scale = 2.1;
                break;
        case 2: scary.addAnimation("clown",d1i);
                scary.scale = 2.3;
                break;
        case 3: scary.addAnimation("crawl",d2i);
                scary.scale = 0.2;
                break;
        case 4: scary.addAnimation("face",d3i);
                scary.scale = 1.5;
                break;
        case 5: scary.addAnimation("dracula",d4i);
                scary.scale = 0.5;
                break;
        case 6: scary.addAnimation("skull",d5i);
                scary.scale = 0.5;
                break;
        case 7: scary.addAnimation("momo",d6i);
                scary.scale = 0.5;
                break;
        case 8: scary.addAnimation("mface",d7i);
                scary.scale = 0.5;
                break;
      }
    }
}