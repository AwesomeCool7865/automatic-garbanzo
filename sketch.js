var canvas, backgroundImage;

var car1, car2, car3, car4, car1IMG, car2IMG, car3IMG, car4IMG;
var trackIMG;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var cars = [];


var form, player, game;

function preload(){
  car1IMG = loadImage("images/car1.png");
  car2IMG = loadImage("images/car2.png");
  car3IMG = loadImage("images/car3.png");
  car4IMG = loadImage("images/car4.png");

  trackIMG = loadImage("images/track.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState===2){
    game.end();
  }
  
}
