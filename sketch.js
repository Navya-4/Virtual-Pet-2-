//Create variables here

var dog,dogImg,happyDogImg, happyDog;
var database;
var food, foodStock;
var lastFed;

var foodObj;

var feed, addFood;

var fedTime;

var database;

var readStock;

function preload()
{
  happyDogImg = loadImage ("images/dogImg1.png")
  dogImg = loadImage ("images/dogImg.png")
}

function setup() {
  database = firebase.database()
  createCanvas(700,500);
  
  foodObj = new Food ();
  
  dog = createSprite (200,250,50,50)
  dog.scale = 0.2;
  dog.addImage (dogImg)

foodStock = database.ref("Food")
foodStock.on("value",readStock)

feed = createButton ("Feed The Dog!")
feed.position (600, 95)
feed.mousePressed (feedDog)

addFood = createButton ("Add Food")
addFood.position (700,95)
addFood.mousePressed (addFoods)
}


function draw() {  
background  ("turquoise")

foodObj.display();

fedTime = database.ref ("FeedTime")
fedTime.on ("value", function (data){
  lastFed = data.val()
}) 

if (lastFed >= 12){
  text ("last fed: "+ lastFed % 12+ " PM ", 300, 30)
}
else if (lastFed === 0){
text("last fed: 12 AM", 300, 30)
}
else {
  text ("last fed: "+ lastFed+ " AM ", 300, 30)
}
drawSprites()
}

function readStock (data){
food = data.val()
foodObj.updateFoodStock(food)
}

function feedDog (){
  dog.addImage (happyDogImg)
  if (foodObj.getFoodStock()<= 0){
foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }
  else {
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
    
  }
  database.ref("/").update({
    Food: foodObj.getFoodStock(),
    FeedTime: hour()
  })

}

function addFoods (){
  food++
  database.ref("/").update({
    Food: food
  })
}