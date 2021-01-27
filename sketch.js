const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dropes;

function preload()
{

}

function setup() {
    var canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;
    
    dropes = new Dropes(128,245)
    
	Engine.run(engine);

}

function draw() {
    background(0);
    Engine.update(engine);
    dropes.display();

}


