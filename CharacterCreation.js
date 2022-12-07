var page1 = true;
var page2 = false;
var body1x, body2x, body1y, body2y;
var clicked = false;
var male= false;
var female = false;
var maleCharacter = [];
var femaleCharacter = [];
var sizeX = [];
var sizeY = [];
var optionsStrs
var step = 60;
var pages = [];

function preload() {
  body1 = loadImage('maleBody.png');
  body2 = loadImage('femaleBody.png');
  maleBody = loadImage('male.png');
  maleHead = loadImage('maleHead.png');
  maleHair1 = loadImage('maleHair1.png');
  maleEyes1 = loadImage('maleEyes1.png');
  malePupils = loadImage('malePupils.png');
  maleEyebrows = loadImage('maleEyebrows.png');
  maleNose = loadImage('maleNose.png');
  maleMouth = loadImage('maleMouth.png');
  
  
  maleHair1Display = loadImage('maleHair1.png')
  maleHair2 = loadImage('maleHair2.png');
  maleHair2Display = loadImage('maleHair2.png');
  
  
  
  
maleTop1 = loadImage('maleTop1.png');
  maleBottom1 = loadImage('maleBottom1.png');
  maleBottom1Display = loadImage('maleBottom1.png');
   maleBottom2Display = 
    loadImage('maleBottom2.png');
  maleBottom2 = loadImage('maleBottom2.png');
  
  maleTop1Display = loadImage('maleTop1.png');
  maleTop2 = loadImage('maleTop2.png');
  maleTop2Display = loadImage('maleTop2.png');
 
  
  
  
  
  femaleBody = loadImage('female.png');
  femaleHead = loadImage('femaleHead.png');
  femaleHair1 = loadImage('femaleHair1.png');
  femaleEyes1 = loadImage('femaleEyes1.png');
  femalePupils = loadImage('femalePupils.png');
  femaleEyebrows = loadImage('femaleEyebrows.png');
  femaleNose = loadImage('femaleNose.png');
  femaleMouth = loadImage('femaleMouth.png');
  femaleTop1 = loadImage('femaleTop1.png');
  femaleBottom1 = loadImage('femaleBottom1.png');
  
  
  
  femalePupilsDisplay = loadImage('femalePupils.png');
   femaleEyes1Display = loadImage('femaleEyes1.png');
  femaleEyes2 = loadImage('femaleEyes2.png');
  femaleEyes2Display = loadImage('femaleEyes2.png');
  
  
  
   femaleHair1Display = loadImage('femaleHair1.png')
  femaleHair2 = loadImage('femaleHair2.png');
  femaleHair2Display = loadImage('femaleHair2.png');
  
  
  
  
  
 loadImage('femaleBottom1.png');
   femaleBottom1Display = 
    loadImage('femaleBottom1.png');
  femaleBottom2 = loadImage('femaleBottom2.png');
  femaleBottom2Display = loadImage('femaleBottom2.png');
  
  femaleTop1Display = loadImage('femaleTop1.png');
  femaleTop2 = loadImage('femaleTop2.png');
  femaleTop2Display = loadImage('femaleTop2.png');
  
  
  
  
 optionStrs = loadStrings('Options.txt');
 
}

function setup() {
  createCanvas(800, 600);


maleCharacter[0] = maleBody;
  maleCharacter[1] = maleHead;
  maleCharacter[2] = maleHair1;
  maleCharacter[3] = maleEyes1;
  maleCharacter[4] = malePupils;
  maleCharacter[5] = maleEyebrows;
  maleCharacter[6] = maleNose;
  maleCharacter[7] = maleMouth;
  maleCharacter[8] = maleTop1;
  maleCharacter[9] = maleBottom1;
  
  femaleCharacter[0] = femaleBody;
  femaleCharacter[1] = femaleHead;
  femaleCharacter[2] = femaleHair1;
  femaleCharacter[3] = femaleEyes1;
  femaleCharacter[4] = femalePupils;
  femaleCharacter[5] = femaleEyebrows;
  femaleCharacter[6] = femaleNose;
  femaleCharacter[7] = femaleMouth;
  femaleCharacter[8] = femaleTop1;
  femaleCharacter[9] = femaleBottom1;
  
 
  for(var i = 0; i < 9; i++) {
    pages[i] = false;
  }
  
  

}

function draw() {
  noLoop();
  background(220);
  page1 = true;
  
  body1x = 190; body1y = 150;
  body2x = 480; body2y = 150;
  image(body1, body1x, body1y, 175, 400);
  image(body2, body2x, body2y, 135, 400);
   textSize(32);
  text('Choose your character:', 0, 30);
  
//   if(mouseX > body1x && mouseX < 365 && mouseY > body1y && mouseY < 470) {
   
//      text('Choose your character:',400, 550);
//   }
  
//   if(mouseX > body2x && mouseX < 615 && mouseY > body2y && mouseY < 470) {
//          text('Choose your character:',400, 550);
//   }
 
 
  
  
 
 
  
  
  
  
}

function mouseClicked() {
  noLoop();
  if (page1) {
    if(mouseX > body1x && mouseX < 365 && mouseY > body1y && mouseY < 470) {
     clicked = true;
      male = true;
      page();
  }
  
  if(mouseX > body2x && mouseX < 615 && mouseY > body2y && mouseY < 470) {
    clicked = true;
    female = true;
    page();
  }
    
  }
  
  if(page2) {
    page2 = false;
    skinColor();
    
  }
  // starting x value of text and spacing is 30px
  if (!page1) {
    if(mouseX > 30 && mouseX < 80 && mouseY > 105 && mouseY < 135) {
      
      for(var i = 0; i < 9; i++) {
    pages[i] = false;
  }
      pages[0] = true;
      skinColor();
      
    }
    if(mouseX > 30 && mouseX < 80 && mouseY > 135 && mouseY < 165) {
      
      for(var i = 0; i < 9; i++) {
    pages[i] = false;
  }
      pages[1] = true;
      bodyType();
    }
    if(mouseX > 30 && mouseX < 80 && mouseY > 165 && mouseY < 195) {
      for(var i = 0; i < 9; i++) {
    pages[i] = false;
  }
      pages[2] = true;
      eyes();
    }
    if(mouseX > 30 && mouseX < 85 && mouseY > 195 && mouseY < 225) {
      for(var i = 0; i < 9; i++) {
    pages[i] = false;
  }
      pages[3] = true;
      
      eyebrows();
      
    }
    if(mouseX > 30 && mouseX < 80 && mouseY > 225 && mouseY < 255) {
      for(var i = 0; i < 9; i++) {
    pages[i] = false;
  }
      pages[4] = true;
      
      nose();
      
    }
    if(mouseX > 30 && mouseX < 85 && mouseY > 255 && mouseY < 285) {
      for(var i = 0; i < 9; i++) {
    pages[i] = false;
  }
      pages[5] = true;
      
      mouth();
      
    }
     if(mouseX > 30 && mouseX < 85 && mouseY > 285 && mouseY < 315) {
      for(var i = 0; i < 9; i++) {
    pages[i] = false;
  }
      pages[6] = true;
      
      hair();
      
    }
    if(mouseX > 30 && mouseX < 85 && mouseY > 315 && mouseY < 345) {
      for(var i = 0; i < 9; i++) {
    pages[i] = false;
  }
      pages[7] = true;
      
      tops();
      
    }
    if(mouseX > 30 && mouseX < 95 && mouseY > 345 && mouseY < 375) {
      for(var i = 0; i < 9; i++) {
    pages[i] = false;
  }
      
      pages[8] = true;
      
      bottom();
      
    }
    if(mouseX > 30 && mouseX < 85 && mouseY > 375 && mouseY < 405) {
      for(var i = 0; i < 9; i++) {
    pages[i] = false;
  }
      pages[9] = true;
      
      more();
    
    }
    
  }
  
  // if on skin
  if(pages[0]) {
    //if select skin 2
    if (mouseX > 270 && mouseX < 370 && mouseY > 140 && mouseY < 250){
      if (male) {
        tint(0, 153, 204);
        
  
      } else {
        tint(0, 153, 204);
      }
    }
      if(mouseX > 130 && mouseX < 230 && mouseY > 140 && mouseY < 250) {
        if(male) {
          maleCharacter[2] = maleHair1;
        } else {
        femaleCharacter[2] = femaleHair1;
      }
      }
      displayCharacter();
      skinColor();
   
    }
  
  
  
  // if on hair
  if(pages[6]) {
    //if select hair 2
    if (mouseX > 270 && mouseX < 370 && mouseY > 140 && mouseY < 250){
      if (male) {
        maleCharacter[2] = maleHair2;
      } else {
        femaleCharacter[2] = femaleHair2;
      }
    }
      if(mouseX > 130 && mouseX < 230 && mouseY > 140 && mouseY < 250) {
        if(male) {
          maleCharacter[2] = maleHair1;
        } else {
        femaleCharacter[2] = femaleHair1;
      }
      }
      displayCharacter();
      hair();
   
    }
  
  
  if(pages[7]) {
    //if select tops 2
    if (mouseX > 270 && mouseX < 370 && mouseY > 140 && mouseY < 250){
      if (male) {
        maleCharacter[8] = maleTop2;
      } else {
        femaleCharacter[8] = femaleTop2;
      }
    }
      if(mouseX > 130 && mouseX < 230 && mouseY > 140 && mouseY < 250) {
        if(male) {
          maleCharacter[8] = maleTop1;
        } else {
        femaleCharacter[8] = femaleTop1;
      }
      }
      displayCharacter();
      tops();
   
    }
  
 
  if(pages[8]) {
    //if select bottoms 2
    if (mouseX > 270 && mouseX < 370 && mouseY > 130 && mouseY < 280){
      if (male) {
        maleCharacter[9] = maleBottom2;
      } else {
        femaleCharacter[9] = femaleBottom2;
      }
    }
      if(mouseX > 130 && mouseX < 230 && mouseY > 130 && mouseY < 280) {
        if(male) {
          maleCharacter[9] = maleBottom1;
        }
        else {
        femaleCharacter[9] = femaleBottom1;
      }
      }
      displayCharacter();
      bottom();
   
    }
  
  
  
  
  if (pages[1]) {
    if(mouseX > 100 && mouseX < 380 && mouseY > 152 && mouseY <157) {
    while(mouseX > 100 && mouseX < 380) {
      val = slider.value();
      print(val);
    }
  }
    }
}
  
  


function skinColor() {
  
  displayCharacter();
  options();
  
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[0], 30, 120);
  
   rect(130, 140, 100, 110);
  rect(270, 140, 100, 110);
  
  
  // slider = createSlider(0, 100, 50, step);
  // slider.position(100, 150);
  // slider.style('width', '280px');
  
  
  
}
function bodyType() {
  //  slider.style('visibility', 'hidden');
  // slider = createSlider(0, 100, 50);
  // slider.position(100, 150);
  // slider.style('width', '280px');
  // let val = slider.value();

  
  
  
  
   displayCharacter();
  options();
  
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[1], 30, 150);
}
function eyes() {
 
  
   displayCharacter();
  options();
  
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[2], 30, 180);
  
  rect(130, 140, 100, 110);
  rect(270, 140, 100, 110);
  
//   if(male) {
//     maleHair1Display.resize(360, 560);
//     maleHair2Display.resize(360, 560);
    
//     image(maleHair1Display, 0, 90);
//     image(maleHair2Display, 140, 90);
  if (female) {
    femaleEyes1Display.resize(660, 860);
    femaleEyes2Display.resize(660, 860);
    femalePupilsDisplay.resize(660, 860);
    
    
    image(femaleEyes1Display, -100, 120);
    image(femalePupilsDisplay, -100, 120);
    image(femaleEyes2Display, 140, 120);
    image(femalePupilsDisplay, 140, 120);
    
  }
  
  
  
}

function eyebrows() {

  
 displayCharacter();
  options();
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[3], 30, 210);
}
function nose() {
 
   displayCharacter();
  options();
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[4], 30, 240);
}
function mouth() {

  
  displayCharacter();
  options();
  
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[5], 30, 270);
}

function hair() {

  
   displayCharacter();
  options();
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[6], 30, 300);
  
  rect(130, 140, 100, 110);
  rect(270, 140, 100, 110);
  
  if(male) {
    maleHair1Display.resize(360, 560);
    maleHair2Display.resize(360, 560);
    
    image(maleHair1Display, 0, 90);
    image(maleHair2Display, 140, 90);
  } else{
    femaleHair1Display.resize(360, 560);
    femaleHair2Display.resize(360, 560);
    
    image(femaleHair1Display, 0, 120);
    image(femaleHair2Display, 140, 120);
  }
  
  
}
function tops() {

  
 displayCharacter();
  options();
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[7], 30, 330);
  
  
  rect(130, 140, 100, 110);
  rect(270, 140, 100, 110);
  
  if(male) {
    maleTop1Display.resize(160, 260);
    maleTop2Display.resize(160, 260);
    
    image(maleTop1Display, 100, 90);
    image(maleTop2Display, 240, 90);
  } else{
    femaleTop1Display.resize(160, 260);
    femaleTop2Display.resize(160, 260);
    
    image(femaleTop1Display, 90, 105);
    image(femaleTop2Display, 230, 105);
  }
}

function bottom() {

  displayCharacter();
  options();
  
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[8], 30, 360);
  
  rect(130, 130, 100, 150);
  rect(270, 130, 100, 150);
  
  if(male) {
    maleBottom1Display.resize(160, 260);
    maleBottom2Display.resize(160, 260);
    
    image(maleBottom1Display, 100, 20);
    image(maleBottom2Display, 240, 20);
  } else {
    femaleBottom1Display.resize(160, 260);
    femaleBottom2Display.resize(160, 260);
    
    image(femaleBottom1Display, 90, 40);
    image(femaleBottom2Display, 230, 40);
  }
  
}
function more() {

  
  displayCharacter();
  options();
  
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[9], 30, 390);
  
  
}

function page() {
  if(page1) {
    page1 = false;
  page2 = true;
  }
}

function displayCharacter() {
  
  fill(220);
  rect(0, 0, 800, 600);
  
  if(male) {
  
    for(var i = 0; i < maleCharacter.length; i++) {
  maleCharacter[i].resize(350, 600); 
  image(maleCharacter[i], 430, 0); 
      
    }
    }
  if(female) {
    for(var i = 0; i < femaleCharacter.length; i++) {
  femaleCharacter[i].resize(350, 600); 
  image(femaleCharacter[i], 430, 30); 
      
    }
  }

    
}

function options() {
  noStroke();
  fill(128, 119, 159);
  rect(20, 100, 400, 450);
   textSize(20);
  fill(31, 26, 71);
  for(var i = 0; i < optionStrs.length; i++) {
    text(optionStrs[i], 30, 120 + 30*i);
  }
  
 
}
