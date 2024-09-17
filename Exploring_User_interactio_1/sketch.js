let front, aisle;
let healthy, unhealthy;
let end;
let canvas;
let frontShow = true;
let aisleShow = false;
let healthyShow = false;
let unhealthyShow = false;
let endShow = false;

//calculate door position (measure pixel location and found proportion compared to whole image)
doorx = 0.44375 * window.innerWidth;
doory = 0.5 * window.innerHeight;
doorw = 0.1 * window.innerWidth;
doorh = 0.2 * window.innerHeight;

//calculate shelve position (same process as door.)
shelves = .20 * window.innerWidth;

//calculate button position
buttonX = 0.37 * window.innerWidth;
buttonY = .77 * window.innerHeight;
buttonW = .25 * window.innerWidth;
buttonH = .17 * window.innerHeight;


function preload(){
    front = loadImage('assets/front.png');
    aisle = loadImage('assets/aisle.png');
    healthy = loadImage('assets/healthprocon.png');
    unhealthy = loadImage('assets/unhealthyprocon.png');
    end = loadImage('assets/endScreen.png');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
  }
  
  function draw() {
    background(255);
    //start with front
    if(frontShow){
    image(front, 0, 0, width, height);
    }
    if(aisleShow){
      image(aisle, 0, 0, width, height);
    }
    if(healthyShow){
      image(healthy, mouseX, mouseY, .2 * width, .2 * height);
    }

    if(unhealthyShow){
      image(unhealthy, mouseX, mouseY, .2 * width, .2 * height);
    }

    if(endShow){
      image(end, 0, 0, width, height);
    }
    
  }

  function mousePressed(){
    if(frontShow && mouseX > doorx && mouseX < doorx + doorw && mouseY > doory && mouseY < doory + doorh){
      frontShow = false;
      aisleShow = true;
    }
    if(aisleShow && mouseX > 0 && mouseX < shelves || mouseX < width && mouseX > width - shelves){
      aisleShow = false;
      endShow = true;
    }
    if(endShow && mouseX > buttonX && mouseX < buttonX + buttonW && mouseY > buttonY && mouseY < buttonY + buttonH){
      endShow = false;
      frontShow = true;
  }
}
  function mouseMoved(){

      if(aisleShow && mouseX > 0 && mouseX < shelves){
          unhealthyShow = false;
          healthyShow = true;
         }
         else{
          healthyShow = false;
         }

        if(aisleShow &&
          mouseX < width && width - shelves < mouseX){
          unhealthyShow = true;
        }
        else{
          unhealthyShow = false;
        }
  }

  


