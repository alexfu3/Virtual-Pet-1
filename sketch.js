//Create variables here
var dog,dogI,happyDogI,happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  dogI = loadImage("Dog.png")
  happyDogI = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(200,200,20,20);
  dog.addImage(dogI);
  dog.scale = 0.4;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  database.ref('/').update({
    Food: foodS-1
  })
  writeStock(foodS);
  dog.addImage(happyDogI);
}
  drawSprites();
  //add styles here
  textSize(15);
  fill("white");
  text(foodS,100,100);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


