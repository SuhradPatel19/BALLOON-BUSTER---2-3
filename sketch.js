var bow, arrow, scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;
var select_balloon
var score = 0;
var balloonRed
var balloonBlue
var balloonGreen
var balloonPink
var arrowGroup
var gamestate = "play"
var inviswall

function preload() {

  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");

}



function setup() {
  createCanvas(400, 400);

  //creating background
  scene = createSprite(0, 0, 400, 400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  // creating bow to shoot arrow
  bow = createSprite(380, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;

  balloonRed = new Group()
  balloonBlue = new Group()
  balloonGreen = new Group()
  balloonPink = new Group()
  arrowGroup = new Group()

  inviswall = createSprite(400, 200, 20, 2000)
  inviswall.visible = false

}

if (balloonBlue.isTouching()) {
  gamestate === "end"

}

function draw() {

  if (gamestate === "play") {
    scene.velocityX = -3


    if (scene.x < 0) {
      scene.x = scene.width / 2;
    }

    //moving bow
    bow.y = World.mouseY

    // release arrow when space key is pressed
    if (keyWentDown("space")) {
      createArrow();

    }

    //Uncomment correct option to get random number from 1 to 4 
    select_balloon = Math.round(random(1, 4));
    if (World.frameCount % 60 == 0) {

      //uncomment the correct switch statement
      switch (select_balloon) {
        case 1: redBalloon();
          break;
        case 2: blueBalloon();
          break;
        case 3: pinkBalloon();
          break;
        case 4: greenBalloon();
          break;
        default: break;
      }

    }
    drawSprites();
    textSize(30)
    fill("black")
    text("Score: " + score, 270, 40)


    if (balloonBlue.isTouching(inviswall)) {
      gamestate = "end"
    }
    if (balloonGreen.isTouching(inviswall)) {
      gamestate = "end"
    }
    if (balloonPink.isTouching(inviswall)) {
      gamestate = "end"
    }
    if (balloonRed.isTouching(inviswall)) {
      gamestate = "end"
    }

    if (balloonBlue.isTouching(arrowGroup)) {
      balloonBlue.destroyEach()
      score += 1
    }
    if (balloonGreen.isTouching(arrowGroup)) {
      balloonGreen.destroyEach()
      score += 1
    }
    if (balloonPink.isTouching(arrowGroup)) {
      balloonPink.destroyEach()
      score += 1
    }

    if (balloonRed.isTouching(arrowGroup)) {
      balloonRed.destroyEach()
      score += 1
    }
  }
  if (gamestate === "end") {
    textSize(50)
    fill("red")
    text("You Lost!", 100, 200)
  }
}


// Creating  arrows for bow
function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
}

function redBalloon() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  balloonRed.add(red)
}

function blueBalloon() {
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  balloonBlue.add(blue)
}

function greenBalloon() {
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  balloonGreen.add(green)
}

function pinkBalloon() {
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  balloonPink.add(pink)
}





