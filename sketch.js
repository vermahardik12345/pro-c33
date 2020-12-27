  const Engine = Matter.Engine;

  const World = Matter.World;

  const Events = Matter.Events;

  const Bodies = Matter.Bodies;



    

    var plinkos = [];

    var divisions=[];

    var divisionHeight=300;

    var score =0;

    var particle=null;

    var turn=0;
    
    var gameState="play";

function setup() {
      createCanvas(800, 800);

      engine = Engine.create();

      world = engine.world;

      ground = new Ground(width/2,height,width,20);


        for (var k = 0; k <=width; k = k + 80) {
          divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
        }


        for (var j = 75; j <=width; j=j+50) 
        {
    
       plinkos.push(new Plinko(j,75));
    }

        for (var j = 50; j <=width-10; j=j+50) 
        {
        
          plinkos.push(new Plinko(j,175));
        }


        for (var j = 75; j <=width; j=j+50) 
        {

        
          plinkos.push(new Plinko(j,275));
        }




        for (var j = 50; j <=width-10; j=j+50) 
        {
        
          plinkos.push(new Plinko(j,375));
        }

       
        
    
}
 


function draw() {
        background("black");
console.log(mouseX,mouseY);
        textSize(20)

      text("Score : "+score,20,30);
text("500",20,522);
text("500",100,522);
text("500",180,522);
text("500",260,522);
text("100",340,522);
text("100",420,522);
text("100",500,522);
text("200",580,522);
text("200",660,522);
text("200",740,522);





     // console.log(mouseX,mouseY);
    



        Engine.update(engine);
      
        
        
        
        
        for (var i = 0; i < plinkos.length; i++) {
          
          plinkos[i].display();
          
        }


        
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 321) 
             {
                 score=score+500;      
                 particle=null;
                 if ( turn>= 5) {gameState ="end"};                          
             }
             else if (particle.body.position.x <560 && particle.body.position.x > 321 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( turn>= 5) {gameState ="end"};

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;
                   if ( turn>= 5)  {gameState ="end"};

             }      
  
  
 
  
  
  
}
   }

   
  
   
   if(gameState=="end"){
    push();
    fill("grey");
    textSize(100);
    text("GAME OVER!",150,250);
    pop();
  }

   
   
  
}
function mousePressed(){
  if(gameState==="play"){
    turn++;
    particle=new Particle(mouseX,10,10,10,10);

  }
}
