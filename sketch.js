const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
//creating all of the variables used for creating the objects.
function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  //creating the canvas.
  engine = Engine.create();
  // creating the physics engine.
  world = engine.world;
  // creating a world using the engine.
  ground = new Ground(600, 600, 1200, 20);
  // creating the ground using the ground class.
  hero = new Hero(400,800,250);
  //creating the hero using the hero class.
  rope = new Rope(hero.body, { x: 500, y: 50 });
  // creating the rope using the rope class.
  monster = new Monster(1100,550,300);
  // monster using the monster class.
  box1 = new Box(900-70-70-70-70, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(900, 100, 70, 70);
  box8 = new Box(900-70, 100-70, 70, 70);
  box9 = new Box(900-70, 100-70, 70, 70);
  box10 = new Box(900-70, 100-70, 70, 70);
  box11 = new Box(900-70, 100-70, 70, 70);
  box12 = new Box(900-70, 100-70, 70, 70);
  box13 = new Box(900-70, 100-70, 70, 70);
  box14 = new Box(900-70-70, 100-70-70, 70, 70);
  box15 = new Box(900-70-70, 100-70-70, 70, 70);
  box16 = new Box(900-70-70, 100-70-70, 70, 70);
  box17 = new Box(900-70-70, 100-70-70, 70, 70);
  box18 = new Box(900-70-70, 100-70-70, 70, 70);
  box19 = new Box(900-70-70, 100-70-70, 70, 70);
  box20 = new Box(900-70-70-70, 100-70-70-70, 70, 70);
  box21 = new Box(900-70-70-70, 100-70-70-70, 70, 70);
  box22 = new Box(900-70-70-70, 100-70-70-70, 70, 70);
  box23 = new Box(900-70-70-70, 100-70-70-70, 70, 70);
  box24 = new Box(900-70-70-70, 100-70-70-70, 70, 70);
  box25 = new Box(900-70-70-70, 100-70-70-70, 70, 70);
  box26 = new Box(900-70-70-70-70, 100, 70, 70);
  box27 = new Box(900-70-70-70-70, 100, 70, 70);
  box28 = new Box(900-70-70-70-70, 100, 70, 70);
  box29 = new Box(900-70-70-70-70, 100, 70, 70);
  box30 = new Box(900-70-70-70-70, 100, 70, 70);
  //creating all the boxes.
  //creating objects for the game.
  


}

function draw() {
  background(bg);
  //creating background.
  Engine.update(engine);
  //updating the engine.
  ground.display();
  box1.display();
  box2.display();
  box4.display();
  box6.display();
  box9.display();
  box11.display();
  box13.display();
  box14.display();
  box16.display();
  box18.display();
  box21.display();
  box23.display();
  box25.display();
  box27.display();
  box29.display();
  
  hero.display();
  rope.display();
  monster.display();
  // displaying the objects . i have knowingly not displayed many objects to create an pattern.
}


function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}
// making the charecter move by dragging the mouse.
