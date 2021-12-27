var bg,bg2,form,system,code,security;
var score=0;
var question2,question3,question4,question5,question6,question7,question8,question9,question10;
var question;
var checkAns;
var bg_image;
var correctAns = 0;
var final_page;
var database;
var contestant;
var contestantCount;
var trophy_image;
var cryingGirl_img;
var result;
var welcome; 
var quiz_main;
var quiz_main2,quiz_main3;
var winning_music,lose_music;
var walking_man,man;
var change;

function preload() {

  bg_image = loadImage("Quiz_image.jpg");
  trophy_image = loadImage("trophy.png");
  cryingGirl_img = loadImage("cryingGirl.png");


}

function setup() {
  createCanvas(1200,700);

  system = new System();
  security = new Firstpage();

  checkAns = createSprite(600,580,200,20);
  checkAns.shapeColor = 225;





}

function draw() {
  background(bg_image);


  security.display();
  textSize(20);
  fill("white");



//console.log(correctAns);
  drawSprites();

  
 
}
