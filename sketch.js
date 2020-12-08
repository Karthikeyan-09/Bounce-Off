var box1, box2;

var box3, box4;


function setup() {
  createCanvas(800,500);
  box1 = createSprite(10, 200, 70, 70);
  box2 = createSprite(800, 200, 70, 70);
  box1.velocityX = 3;
  box2.velocityX = -3;

  box3 = createSprite(400, 10, 70, 70);
  box4 = createSprite(400, 500, 70, 70);
  box3.velocityY = 3;
  box4.velocityY = -3;

  box1.shapeColor = "green";
  box2.shapeColor = "green";
  box3.shapeColor = "green";
  box4.shapeColor = "green";

  box1.debug = true;
  box2.debug = true;
  box3.debug = true;
  box4.debug = true;
}

function draw() {
  background("yellow");

 bounceOff(box1, box2);

 bounceOff(box3,box4);


  
  drawSprites();
}

function bounceOff (object1,object2) {
  if (object1.x - object2.x <object1.width/2 + object2.width/2
    && object2.x - object1.x <object1.width/2 + object2.width/2){
   object1. velocityX = object1.velocityX * -1;
   object2. velocityX = object2.velocityX * -1;
    }
  if(object1.y - object2.y <object1.height/2 + object2.height/2 &&
     object2.y - object1.y <object1.height/2 + object2.height/2 ) {
      object1. velocityY = object1.velocityY * -1;
     object2.velocityY = object2.velocityY * -1;

  }
}

//3  * -1  = -3
//-3 * -1   = 3