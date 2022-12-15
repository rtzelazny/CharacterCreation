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
var selected;
var skinR = 250, skinG = 250, skinB = 250, skinT = 250;
var eyeR = 250, eyeG = 250, eyeB = 250, eyeT = 250;
var hairR = 250, hairG = 250, hairB = 250, hairT = 250;
var browR = 250, browG = 250, browB = 250, browT = 250;
let height = 0, width = 0;
let positionX = 0, positionY = 0;
var eyeNum = 6;
var maleEyes, maleEyesDisplay, femaleEyes, femaleEyesDisplay;
var browNum = 6;
var maleBrows, maleBrowsDisplay, femaleBrows, femaleBrowsDisplay;
var noseNum = 6;
var maleNose, maleNoseDisplay, femaleNose, femaleNoseDisplay;
var mouthNum = 6;
var maleMouth, maleMouthDisplay, femaleMouth, femaleMouthDisplay;
var hairNum = 9;
var maleHair, maleHairDisplay, femaleHair, femaleHairDisplay;


function preload() {
  
  body1 = loadImage('maleBody.png');
  body2 = loadImage('femaleBody.png');
  
   /*
  Male
  */
  
  // default display
  maleBody = loadImage('male.png');
  maleHead = loadImage('maleHead.png');
  maleHair1 = loadImage('maleHair1.png');
  maleEyeWhites = loadImage('maleEyeWhites.png');
  maleEyes1 = loadImage('maleEyes1.png');
  malePupils = loadImage('malePupils.png');
  maleBrow1 = loadImage('maleBrow1.png');
  maleNose1 = loadImage('maleNose1.png');
  maleMouth1 = loadImage('maleMouth1.png');
  maleTop1 = loadImage('maleTop1.png');
  maleBottom1 = loadImage('maleBottom1.png');
  
  maleBodyDisplay = loadImage('maleBody.png');
  
  // Different displays for bodyType to prevent blurring from resizing
  
  body1Display1 = loadImage('maleBody.png');
  body1Display2 = loadImage('maleBody.png');
  body1Display3 = loadImage('maleBody.png');
  body1Display4 = loadImage('maleBody.png');
  body1Display5 = loadImage('maleBody.png');
  body1Display6 = loadImage('maleBody.png');
  body1Display7 = loadImage('maleBody.png');
  body1Display8 = loadImage('maleBody.png');
  
//    
  // eyes
  // make eye array
  maleEyes = [];
  for(var i = 0; i < eyeNum; i ++) {
    maleEyes[i] = loadImage("maleEyes" + (i + 1) + ".png");
  }
  // eye display images
  maleEyesDisplay = [];
  for(var i = 0; i < eyeNum; i ++) {
    maleEyesDisplay[i] = loadImage("maleEyes" + (i + 1) + ".png");
  }
  maleEyeWhitesDisplay = loadImage('maleEyeWhites.png');
  malePupilsDisplay = loadImage('malePupils.png');

  
  // make brow array
  maleBrows = [];
  for(var i = 0; i < browNum; i ++) {
    maleBrows[i] = loadImage("maleBrow" + (i + 1) + ".png");
  }
  
  // eyebrow display images
  maleBrowsDisplay = [];
  for(var i = 0; i < browNum; i ++) {
    maleBrowsDisplay[i] = loadImage("maleBrow" + (i + 1) + ".png");
  }

  
 
  
  // nose
// make nose array
  maleNose = [];
  for(var i = 0; i < noseNum; i ++) {
    maleNose[i] = loadImage("maleNose" + (i + 1) + ".png");
  }
  // nose display images
  maleNoseDisplay = [];
  for(var i = 0; i < noseNum; i ++) {
    maleNoseDisplay[i] = loadImage("maleNose" + (i + 1) + ".png");
  }
  
  
   // mouth
// make mouth array
  maleMouth = [];
  for(var i = 0; i < mouthNum; i ++) {
    maleMouth[i] = loadImage("maleMouth" + (i + 1) + ".png");
  }
  // mouth display images
  maleMouthDisplay = [];
  for(var i = 0; i < mouthNum; i ++) {
    maleMouthDisplay[i] = loadImage("maleMouth" + (i + 1) + ".png");
  }
  
  // hair
 // make hair array
  maleHair = [];
  for(var i = 0; i < hairNum; i ++) {
    maleHair[i] = loadImage("maleHair" + (i + 1) + ".png");
  }
  // hair display images
  maleHairDisplay = [];
  for(var i = 0; i < hairNum; i ++) {
    maleHairDisplay[i] = loadImage("maleHair" + (i + 1) + ".png");
  }
  
 
  // top
  maleTop1Display = loadImage('maleTop1.png');
  maleTop2 = loadImage('maleTop2.png');
  maleTop2Display = loadImage('maleTop2.png');
  maleTop3 = loadImage('maleTop3.png');
  maleTop3Display = loadImage('maleTop3.png');
  
  
  //bottom

  maleBottom1Display = loadImage('maleBottom1.png');
   maleBottom2Display = 
    loadImage('maleBottom2.png');
  maleBottom2 = loadImage('maleBottom2.png');
  
  maleBottom3Display = 
    loadImage('maleBottom3.png');
  maleBottom3 = loadImage('maleBottom3.png');
  
 
   /*
  Female
  */
  
  // default display
  femaleBody = loadImage('female.png');
  femaleHead = loadImage('femaleHead.png');
  femaleHair1 = loadImage('femaleHair1.png');
  femaleEyeWhites = loadImage('femaleEyeWhites.png');
  femaleEyes1 = loadImage('femaleEyes1.png');
  femalePupils = loadImage('femalePupils.png');
  femaleBrow1 = loadImage('femaleBrow1.png');
  femaleNose1 = loadImage('femaleNose1.png');
  femaleMouth1 = loadImage('femaleMouth1.png');
  femaleTop1 = loadImage('femaleTop1.png');
  femaleBottom1 = loadImage('femaleBottom1.png');
  
  femaleBodyDisplay = loadImage('femaleBody.png');
  
  
  // Different displays for bodyType to prevent blurring from resizing
  
  body2Display1 = loadImage('femaleBody.png');
  body2Display2 = loadImage('femaleBody.png');
  body2Display3 = loadImage('femaleBody.png');
  body2Display4 = loadImage('femaleBody.png');
  body2Display5 = loadImage('femaleBody.png');
  body2Display6 = loadImage('femaleBody.png');
  body2Display7 = loadImage('femaleBody.png');
  body2Display8 = loadImage('femaleBody.png');
  
  
  // eyes
  // make eye array
  femaleEyes = [];
  for(var i = 0; i < eyeNum; i ++) {
    femaleEyes[i] = loadImage("femaleEyes" + (i + 1) + ".png");
  }
  // make eye display images
  femaleEyesDisplay = [];
  for(var i = 0; i < eyeNum; i ++) {
    femaleEyesDisplay[i] = loadImage("femaleEyes" + (i + 1) + ".png");
  }
  femaleEyeWhitesDisplay = loadImage('femaleEyeWhites.png');
  femalePupilsDisplay = loadImage('femalePupils.png');
  
  // eyebrows
   // make brow array
  femaleBrows = [];
  for(var i = 0; i < browNum; i ++) {
    femaleBrows[i] = loadImage("femaleBrow" + (i + 1) + ".png");
  }
  
  // eyebrow display images
  femaleBrowsDisplay = [];
  for(var i = 0; i < browNum; i ++) {
    femaleBrowsDisplay[i] = loadImage("femaleBrow" + (i + 1) + ".png");
  }
  
  // nose
    // make nose array
  femaleNose = [];
  for(var i = 0; i < noseNum; i ++) {
    femaleNose[i] = loadImage("femaleNose" + (i + 1) + ".png");
  }
  // nose display images
  femaleNoseDisplay = [];
  for(var i = 0; i < noseNum; i ++) {
    femaleNoseDisplay[i] = loadImage("femaleNose" + (i + 1) + ".png");
  }
  
   // mouth
// make mouth array
  femaleMouth = [];
  for(var i = 0; i < mouthNum; i ++) {
    femaleMouth[i] = loadImage("femaleMouth" + (i + 1) + ".png");
  }
  // mouth display images
  femaleMouthDisplay = [];
  for(var i = 0; i < mouthNum; i ++) {
    femaleMouthDisplay[i] = loadImage("femaleMouth" + (i + 1) + ".png");
  }
  
  
  // hair
  // make hair array
  femaleHair = [];
  for(var i = 0; i < hairNum; i ++) {
    femaleHair[i] = loadImage("femaleHair" + (i + 1) + ".png");
  }
  // hair display images
  femaleHairDisplay = [];
  for(var i = 0; i < hairNum; i ++) {
    femaleHairDisplay[i] = loadImage("femaleHair" + (i + 1) + ".png");
  }
  
  
  
  
  // bottoms
 loadImage('femaleBottom1.png');
   femaleBottom1Display = 
    loadImage('femaleBottom1.png');
  femaleBottom2 = loadImage('femaleBottom2.png');
  femaleBottom2Display = loadImage('femaleBottom2.png');
	 femaleBottom3Display = 
    loadImage('femaleBottom3.png');
  femaleBottom3 = loadImage('femaleBottom3.png');
  
  // tops
  femaleTop1Display = loadImage('femaleTop1.png');
  femaleTop2 = loadImage('femaleTop2.png');
  femaleTop2Display = loadImage('femaleTop2.png');
femaleTop3 = loadImage('femaleTop3.png');
  femaleTop3Display = loadImage('femaleTop3.png');
  
  
  
  
 optionStrs = loadStrings('Options.txt');
 
}

function setup() {
  createCanvas(800, 600);


  maleCharacter[0] = maleBody;
  maleCharacter[1] = maleHead;
  maleCharacter[2] = maleEyeWhites;
  maleCharacter[3] = maleEyes1;
  maleCharacter[4] = malePupils;
  maleCharacter[5] = maleBrow1;
  maleCharacter[6] = maleNose1;
  maleCharacter[7] = maleMouth1;
  maleCharacter[8] = maleBottom1;
  maleCharacter[9] = maleTop1;
  maleCharacter[10] = maleHair1;
  
  femaleCharacter[0] = femaleBody;
  femaleCharacter[1] = femaleHead;
  femaleCharacter[2] = femaleEyeWhites;
  femaleCharacter[3] = femaleEyes1;
  femaleCharacter[4] = femalePupils;
  femaleCharacter[5] = femaleBrow1;
  femaleCharacter[6] = femaleNose1;
  femaleCharacter[7] = femaleMouth1;
  femaleCharacter[8] = femaleBottom1;
  femaleCharacter[9] = femaleTop1;
  femaleCharacter[10] = femaleHair1;
  
 
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
	fill(96,49,23);
   textSize(32);
	textFont('Helvetica');
  text('First, choose your character:', 30, 100);
  fill(0);

  
  
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
  
  /*
  Find which page to be on
  */
  
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
  
  /*
  Change what was clicked on in each individual page.
  */
  
  // if on skin
  if(pages[0]) {
    if (mouseX > 120 && mouseX < 170 && mouseY > 130 && mouseY < 180){
      skinR = 250;
      skinG = 250;
      skinB = 250;
      skinT = 250;

    }
      if(mouseX > 190 && mouseX < 240 && mouseY > 130 && mouseY < 180) {
        skinR = 240;
        skinG = 220;
        skinB = 220;
        skinT = 250;
      }
    if(mouseX > 260 && mouseX < 310 && mouseY > 130 && mouseY < 180) {
        skinR = 210;
        skinG = 200;
        skinB = 200;
        skinT = 250;
      }
    if(mouseX > 330 && mouseX < 380 && mouseY > 130 && mouseY < 180) {
        skinR = 170;
        skinG = 150;
        skinB = 150;
        skinT = 250;
      }
  //    rect(120, 200, 50, 50);
  // rect(190, 200, 50, 50);
  // rect(260, 200, 50, 50);
  // rect(330, 200, 50, 50);
    if(mouseX > 120 && mouseX < 170 && mouseY > 200 && mouseY < 250) {
        skinR = 140;
        skinG = 100;
        skinB = 100;
        skinT = 250;
      }
    if(mouseX > 190 && mouseX < 240 && mouseY > 200 && mouseY < 250) {
        skinR = 110;
        skinG = 80;
        skinB = 80;
        skinT = 250;
      }
    if(mouseX > 260 && mouseX < 310 && mouseY > 200 && mouseY < 250) {
        skinR = 90;
        skinG = 50;
        skinB = 50;
        skinT = 250;
      }
     if(mouseX > 330 && mouseX < 380 && mouseY > 200 && mouseY < 250) {
        skinR = 80;
        skinG = 60;
        skinB = 60;
        skinT = 250;
      }
    if(mouseX > 120 && mouseX < 170 && mouseY > 270 && mouseY < 320) {
        skinR = 100;
        skinG = 70;
        skinB = 160;
        skinT = 210;
      }
    if(mouseX > 190 && mouseX < 240 && mouseY > 270 && mouseY < 320) {
        skinR = 80;
        skinG = 100;
        skinB = 243;
        skinT = 210;
      }
    if(mouseX > 260 && mouseX < 310 && mouseY > 270 && mouseY < 320) {
        skinR = 65;
        skinG = 160;
        skinB = 103;
        skinT = 170;
      }
    if(mouseX > 330 && mouseX < 380 && mouseY > 270 && mouseY < 320) {
        skinR = 179;
        skinG = 65;
        skinB = 65;
        skinT = 190;
      }
    
      displayCharacter();
      skinColor();
   
    }
  //if on body
  
//   rect(150, 110, 80, 90);
//     rect(260, 110, 80, 90);
    
//     rect(150, 210, 80, 90);
//     rect(260, 210, 80, 90);
    
//     rect(150, 350, 80, 90);
//     rect(260, 350, 80, 90);
    
//     rect(150, 450, 80, 90);
//     rect(260, 450, 80, 90);
  if(pages[1]) {
    if (mouseX > 150 && mouseX < 230 && mouseY > 110 && mouseY < 200){
      width = -50;
      positionX = 25;

    }
    if (mouseX > 260 && mouseX < 340 && mouseY > 110 && mouseY < 200){
      width = 0;

    }
    if (mouseX > 150 && mouseX < 230 && mouseY > 210 && mouseY < 300){
      width = 50;
      positionX = -25;

    }
    if (mouseX > 260 && mouseX < 340 && mouseY > 210 && mouseY < 300){
      width = 100;
      positionX = -50;

    }
    
     if (mouseX > 150 && mouseX < 230 && mouseY > 350 && mouseY < 440){
      height = -50;
      positionY = 25;

    }
    if (mouseX > 260 && mouseX < 340 && mouseY > 350 && mouseY < 440){
      height = 0;

    }
    if (mouseX > 150 && mouseX < 230 && mouseY > 450 && mouseY < 540){
      height = 50;
      positionY = -25;

    }
    if (mouseX > 260 && mouseX < 340 && mouseY > 450 && mouseY < 540){
      height = 100;
      positionY = -80;

    }
    
    displayCharacter();
    bodyType();
    }
  
  
  // rect(130 + (col * 140), 130 + (row * 60), 100, 40);

  // if on eyes
  if(pages[2]) {
    // eye 1
    if(mouseX > 130 && mouseX < 230 && mouseY > 130 && mouseY < 170) {
        if(male) {
          maleCharacter[3] = maleEyes[0];
        } else {
        femaleCharacter[3] = femaleEyes[0];
      }
      }
    // eye 2
    if (mouseX > 270 && mouseX < 370 && mouseY > 130 && mouseY < 170){
      if (male) {
        maleCharacter[3] = maleEyes[3];
      } else {
        femaleCharacter[3] = femaleEyes[3];
      }
    }
    // eye 3
     if (mouseX > 130 && mouseX < 230 && mouseY > 190 && mouseY < 230){
      if (male) {
        maleCharacter[3] = maleEyes[1];
      } else {
        femaleCharacter[3] = femaleEyes[1];
      }
    }
    // eye 4
    if (mouseX > 270 && mouseX < 370 && mouseY > 190 && mouseY < 230){
      if (male) {
        maleCharacter[3] = maleEyes[4];
      } else {
        femaleCharacter[3] = femaleEyes[4];
      }
    }
    // eye 5
    if (mouseX > 130 && mouseX < 230 && mouseY > 250 && mouseY < 290){
      if (male) {
        maleCharacter[3] = maleEyes[2];
      } else {
        femaleCharacter[3] = femaleEyes[2];
      }
    }
    // eye 6
      if (mouseX > 270 && mouseX < 370 && mouseY > 250 && mouseY < 290){
      if (male) {
        maleCharacter[3] = maleEyes[5];
      } else {
        femaleCharacter[3] = femaleEyes[5];
      }
    }
    
//     rect(125, 340, 50, 50);
    
//     rect(195, 340, 50, 50);
    
//     rect(265, 340, 50, 50);
//     rect(335, 340, 50, 50);
    
    // change eye color
    if (mouseX > 125 && mouseX < 175 && mouseY > 340 && mouseY < 390){
      eyeR = 250;
      eyeG = 250;
      eyeB = 250;
      eyeT = 250;
    }
    if (mouseX > 195 && mouseX < 245 && mouseY > 340 && mouseY < 390){
      eyeR = 220;
      eyeG = 135;
      eyeB = 120;
      eyeT = 250;
    }
    
     if (mouseX > 265 && mouseX < 315 && mouseY > 340 && mouseY < 390){
      eyeR = 54;
      eyeG = 15;
      eyeB = 10;
      eyeT = 250;
    }
    
  if (mouseX > 335 && mouseX < 385 && mouseY > 340 && mouseY < 390){
      eyeR = 0;
      eyeG = 53;
      eyeB = 244;
      eyeT = 100;
    }
    if (mouseX > 125 && mouseX < 175 && mouseY > 415 && mouseY < 465){
      eyeR = 184;
      eyeG = 184;
      eyeB = 184;
      eyeT = 80;
    }
    if (mouseX > 195 && mouseX < 245 && mouseY > 415 && mouseY < 465){
      eyeR = 97;
      eyeG = 245;
      eyeB = 100;
      eyeT = 120;
    }
    if (mouseX > 265 && mouseX < 315 && mouseY > 415 && mouseY < 465){
      eyeR = 192;
      eyeG = 26;
      eyeB = 220;
      eyeT = 180;
    }
    if (mouseX > 335 && mouseX < 385 && mouseY > 415 && mouseY < 465){
      eyeR = 242;
      eyeG = 1;
      eyeB = 1;
      eyeT = 200;
    }
      displayCharacter();
      eyes();
   
    }
  
  // if on brows
  if(pages[3]) {
    
    // brow 1
    if(mouseX > 130 && mouseX < 230 && mouseY > 130 && mouseY < 170) {
        if(male) {
          maleCharacter[5] = maleBrows[0];
        } else {
        femaleCharacter[5] = femaleBrows[0];
      }
      }
    // brow 2
    if (mouseX > 270 && mouseX < 370 && mouseY > 130 && mouseY < 170){
      if (male) {
        maleCharacter[5] = maleBrows[3];
      } else {
        femaleCharacter[5] = femaleBrows[3];
      }
    }
    // brow 3
     if (mouseX > 130 && mouseX < 230 && mouseY > 190 && mouseY < 230){
      if (male) {
        maleCharacter[5] = maleBrows[1];
      } else {
        femaleCharacter[5] = femaleBrows[1];
      }
    }
    // brow 4
    if (mouseX > 270 && mouseX < 370 && mouseY > 190 && mouseY < 230){
      if (male) {
        maleCharacter[5] = maleBrows[4];
      } else {
        femaleCharacter[5] = femaleBrows[4];
      }
    }
    // brow 5
    if (mouseX > 130 && mouseX < 230 && mouseY > 250 && mouseY < 290){
      if (male) {
        maleCharacter[5] = maleBrows[2];
      } else {
        femaleCharacter[5] = femaleBrows[2];
      }
    }
    // brow 6
      if (mouseX > 270 && mouseX < 370 && mouseY > 250 && mouseY < 290){
      if (male) {
        maleCharacter[5] = maleBrows[5];
      } else {
        femaleCharacter[5] = femaleBrows[5];
      }
    }
    
//     rect(125, 340, 50, 50);
    
//     rect(195, 340, 50, 50);
    
//     rect(265, 340, 50, 50);
//     rect(335, 340, 50, 50);
    
    // change brow color
    if (mouseX > 125 && mouseX < 175 && mouseY > 340 && mouseY < 390){
      browR = 250;
      browG = 250;
      browB = 250;
      browT = 250;
    }
    if (mouseX > 195 && mouseX < 245 && mouseY > 340 && mouseY < 390){
      browR = 220;
      browG = 135;
      browB = 120;
      browT = 250;
    }
    
     if (mouseX > 265 && mouseX < 315 && mouseY > 340 && mouseY < 390){
      browR = 54;
      browG = 15;
      browB = 10;
      browT = 250;
    }
    
  if (mouseX > 335 && mouseX < 385 && mouseY > 340 && mouseY < 390){
      browR = 0;
      browG = 53;
      browB = 244;
      browT = 220;
    }
    if (mouseX > 125 && mouseX < 175 && mouseY > 415 && mouseY < 465){
      browR = 184;
      browG = 184;
      browB = 184;
      browT = 220;
    }
    if (mouseX > 195 && mouseX < 245 && mouseY > 415 && mouseY < 465){
      browR = 97;
      browG = 245;
      browB = 100;
      browT = 230;
    }
    if (mouseX > 265 && mouseX < 315 && mouseY > 415 && mouseY < 465){
      browR = 192;
      browG = 26;
      browB = 220;
      browT = 220;
    }
    if (mouseX > 335 && mouseX < 385 && mouseY > 415 && mouseY < 465){
      browR = 242;
      browG = 1;
      browB = 1;
      browT = 220;
    }
    
    
    
      displayCharacter();
      eyebrows();
   
    }
  
  // if on nose
  if(pages[4]) {
    //rect(160 + (col * 100), 130 + (row * 100), 80, 80);
    //if select nose 1
    if (mouseX > 160 && mouseX < 240 && mouseY > 130 && mouseY < 210){
      if (male) {
        maleCharacter[6] = maleNose[0];
      } else {
        femaleCharacter[6] = femaleNose[0];
      }
      
    }
      if(mouseX > 260 && mouseX < 340 && mouseY > 130 && mouseY < 210) {
        if(male) {
          maleCharacter[6] = maleNose[3];
        } else {
        femaleCharacter[6] = femaleNose[3];
      }
      }
    if(mouseX > 160 && mouseX < 240 && mouseY > 230 && mouseY < 310) {
        if(male) {
          maleCharacter[6] = maleNose[1];
        } else {
        femaleCharacter[6] = femaleNose[1];
      }
      }
    if(mouseX > 260 && mouseX < 340 && mouseY > 230 && mouseY < 310) {
        if(male) {
          maleCharacter[6] = maleNose[4];
        } else {
        femaleCharacter[6] = femaleNose[4];
      }
      }
    if(mouseX > 160 && mouseX < 240 && mouseY > 330 && mouseY < 410) {
        if(male) {
          maleCharacter[6] = maleNose[2];
        } else {
        femaleCharacter[6] = femaleNose[2];
      }
      }
    if(mouseX > 260 && mouseX < 340 && mouseY > 330 && mouseY < 410) {
        if(male) {
          maleCharacter[6] = maleNose[5];
        } else {
        femaleCharacter[6] = femaleNose[5];
      }
      }
    
      displayCharacter();
      nose();
   
    }
  // if on mouth
  if (pages[5]) {
     //if select nose 1
    if (mouseX > 160 && mouseX < 240 && mouseY > 130 && mouseY < 210){
      if (male) {
        maleCharacter[7] = maleMouth[0];
      } else {
        femaleCharacter[7] = femaleMouth[0];
      }
      
    }
      if(mouseX > 260 && mouseX < 340 && mouseY > 130 && mouseY < 210) {
        if(male) {
          maleCharacter[7] = maleMouth[3];
        } else {
        femaleCharacter[7] = femaleMouth[3];
      }
      }
    if(mouseX > 160 && mouseX < 240 && mouseY > 230 && mouseY < 310) {
        if(male) {
          maleCharacter[7] = maleMouth[1];
        } else {
        femaleCharacter[7] = femaleMouth[1];
      }
      }
    if(mouseX > 260 && mouseX < 340 && mouseY > 230 && mouseY < 310) {
        if(male) {
          maleCharacter[7] = maleMouth[4];
        } else {
        femaleCharacter[7] = femaleMouth[4];
      }
      }
    if(mouseX > 160 && mouseX < 240 && mouseY > 330 && mouseY < 410) {
        if(male) {
          maleCharacter[7] = maleMouth[2];
        } else {
        femaleCharacter[7] = femaleMouth[2];
      }
      }
    if(mouseX > 260 && mouseX < 340 && mouseY > 330 && mouseY < 410) {
        if(male) {
          maleCharacter[7] = maleMouth[5];
        } else {
        femaleCharacter[7] = femaleMouth[5];
      }
      }
    
    displayCharacter();
      mouth();
  }
  
  
  //rect(120 + (col * 90), 120 + (row * 90), 80, 80);
  // if on hair
  if(pages[6]) {
    //if select hair 1
      if(mouseX > 120 && mouseX < 200 && mouseY > 120 && mouseY < 200) {
        if(male) {
          maleCharacter[10] = maleHair[0];
        } else {
        femaleCharacter[10] = femaleHair[0];
      }
      }
    if (mouseX > 210 && mouseX < 290 && mouseY > 120 && mouseY < 200){
      if (male) {
        maleCharacter[10] = maleHair[3];
      } else {
        femaleCharacter[10] = femaleHair[3];
      }
      
    }
    if (mouseX > 300 && mouseX < 380 && mouseY > 120 && mouseY < 200){
      if (male) {
        maleCharacter[10] = maleHair[6];
      } else {
        femaleCharacter[10] = femaleHair[6];
      }
      
    }
    
    if (mouseX > 120 && mouseX < 200 && mouseY > 210 && mouseY < 290){
      if (male) {
        maleCharacter[10] = maleHair[1];
      } else {
        femaleCharacter[10] = femaleHair[1];
      }
      
    }
    if (mouseX > 210 && mouseX < 290 && mouseY > 210 && mouseY < 290){
      if (male) {
        maleCharacter[10] = maleHair[4];
      } else {
        femaleCharacter[10] = femaleHair[4];
      }
      
    }
    if (mouseX > 300 && mouseX < 380 && mouseY > 210 && mouseY < 290){
      if (male) {
        maleCharacter[10] = maleHair[7];
      } else {
        femaleCharacter[10] = femaleHair[7];
      }
      
    }
    if (mouseX > 120 && mouseX < 200 && mouseY > 300 && mouseY < 380){
      if (male) {
        maleCharacter[10] = maleHair[2];
      } else {
        femaleCharacter[10] = femaleHair[2];
      }
      
    }
     if (mouseX > 210 && mouseX < 290 && mouseY > 300 && mouseY < 380){
      if (male) {
        maleCharacter[10] = maleHair[5];
      } else {
        femaleCharacter[10] = femaleHair[5];
      }
      
    }
    if (mouseX > 300 && mouseX < 380 && mouseY > 300 && mouseY < 380){
      if (male) {
        maleCharacter[10] = maleHair[8];
      } else {
        femaleCharacter[10] = femaleHair[8];
      }
      
    }
    
    // change hair color
     if (mouseX > 125 && mouseX < 175 && mouseY > 400 && mouseY < 450){
      hairR = 250;
      hairG = 250;
      hairB = 250;
      hairT = 250;
    }
    if (mouseX > 195 && mouseX < 245 && mouseY > 400 && mouseY < 450){
      hairR = 220;
      hairG = 135;
      hairB = 120;
      hairT = 250;
    }
    
     if (mouseX > 265 && mouseX < 315 && mouseY > 400 && mouseY < 450){
      hairR = 54;
      hairG = 15;
      hairB = 10;
      hairT = 250;
    }
    
  if (mouseX > 335 && mouseX < 385 && mouseY > 400 && mouseY < 450){
      hairR = 0;
      hairG = 53;
      hairB = 244;
      hairT = 220;
    }
    if (mouseX > 125 && mouseX < 175 && mouseY > 475 && mouseY < 525){
      hairR = 184;
      hairG = 184;
      hairB = 184;
      hairT = 220;
    }
    if (mouseX > 195 && mouseX < 245 && mouseY > 475 && mouseY < 525){
      hairR = 97;
      hairG = 245;
      hairB = 100;
      hairT = 230;
    }
    if (mouseX > 265 && mouseX < 315 && mouseY > 475 && mouseY < 525){
      hairR = 192;
      hairG = 26;
      hairB = 220;
      hairT = 220;
    }
    if (mouseX > 335 && mouseX < 385 && mouseY > 475 && mouseY < 525){
      hairR = 242;
      hairG = 1;
      hairB = 1;
      hairT = 220;
    }
    
    
    
    
    
    
    
    
    
      displayCharacter();
      hair();
   
    }
  
  // if on tops page
  if(pages[7]) {
    //if select tops 2
    if (mouseX > 270 && mouseX < 370 && mouseY > 140 && mouseY < 250){
      if (male) {
        maleCharacter[9] = maleTop2;
      } else {
        femaleCharacter[9] = femaleTop2;
      }
    }
      if(mouseX > 130 && mouseX < 230 && mouseY > 140 && mouseY < 250) {
        if(male) {
          maleCharacter[9] = maleTop1;
        } else {
        femaleCharacter[9] = femaleTop1;
      }
      }
	  //rect(130, 280, 100, 110);
	  if(mouseX > 130 && mouseX < 230 && mouseY > 280 && mouseY < 390) {
        if(male) {
          maleCharacter[9] = maleTop3;
        } else {
        femaleCharacter[9] = femaleTop3;
      }
      }
      displayCharacter();
      tops();
   
    }
  
 
  if(pages[8]) {
    //if select bottoms 2
    if (mouseX > 270 && mouseX < 370 && mouseY > 130 && mouseY < 280){
      if (male) {
        maleCharacter[8] = maleBottom2;
      } else {
        femaleCharacter[8] = femaleBottom2;
      }
    }
      if(mouseX > 130 && mouseX < 230 && mouseY > 130 && mouseY < 280) {
        if(male) {
          maleCharacter[8] = maleBottom1;
        }
        else {
        femaleCharacter[8] = femaleBottom1;
      }
      }
	  //rect(130, 340, 100, 150);
	  if(mouseX > 130 && mouseX < 230 && mouseY >340 && mouseY < 490) {
        if(male) {
          maleCharacter[8] = maleBottom3;
        } else {
        femaleCharacter[8] = femaleBottom3;
      }
      }
      displayCharacter();
      bottom();
   
    }
  
  
  
  
  // if (pages[1]) {
  //   if(mouseX > 100 && mouseX < 380 && mouseY > 152 && mouseY <157) {
  //   while(mouseX > 100 && mouseX < 380) {
  //     // val = slider.value();
  //     // print(val);
  //   }
  // }
  //   }
}
  
  


function skinColor() {
  
  pages[0] = true;
  displayCharacter();
  options();
	
	
  
	
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[0], 30, 120);
  
  // display row 1
  fill(237, 211, 204);
   rect(120, 130, 50, 50);
  fill(217, 164, 150);
  rect(190, 130, 50, 50);
  fill(171, 136, 126);
  rect(260, 130, 50, 50);
  fill(112, 67, 55);
  rect(330, 130, 50, 50);
  
  // display row 2
  fill(82, 50, 47);
   rect(120, 200, 50, 50);
  fill(61, 40, 38);
  rect(190, 200, 50, 50);
  fill(59, 32, 30);
  rect(260, 200, 50, 50);
  fill(31, 17, 17);
  rect(330, 200, 50, 50);
  
  // display row 3
  fill(133, 81, 189);
  rect(120, 270, 50, 50);
  fill(84, 110, 240);
  rect(190, 270, 50, 50);
  fill(84, 176, 121);
  rect(260, 270, 50, 50);
  fill(179, 95, 95);
  rect(330, 270, 50, 50);
  
  
  
  
}
function bodyType() {
  
   displayCharacter();
  options();
  
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[1], 30, 150);
  
  
  fill(98, 94, 128);
    rect(150, 110, 80, 90);
    rect(260, 110, 80, 90);
    
    rect(150, 210, 80, 90);
    rect(260, 210, 80, 90);
    
    rect(150, 350, 80, 90);
    rect(260, 350, 80, 90);
    
    rect(150, 450, 80, 90);
    rect(260, 450, 80, 90);
  noTint();
  
  // display body type options
  if(male) {
    body1Display1.resize(40, 90);
    image(body1Display1, 170, 110);
    body1Display2.resize(50, 90);
    image(body1Display2, 275, 110);
    
    body1Display3.resize(60, 90);
    image(body1Display3, 160, 210);
    body1Display4.resize(70, 90);
    image(body1Display4, 265, 210);
    
    body1Display5.resize(40, 70);
    image(body1Display5, 165, 370);
    body1Display6.resize(40, 80);
    image(body1Display6, 275, 360);
    
    body1Display7.resize(40, 90);
    image(body1Display7, 165, 450);
    body1Display8.resize(40, 100);
    image(body1Display8, 275, 445);
    
    
  } else {
    body2Display1.resize(40, 90);
    image(body2Display1, 170, 110);
    body2Display2.resize(50, 90);
    image(body2Display2, 275, 110);
    
    body2Display3.resize(60, 90);
    image(body2Display3, 160, 210);
    body2Display4.resize(70, 90);
    image(body2Display4, 265, 210);
    
    body2Display5.resize(40, 70);
    image(body2Display5, 165, 370);
    body2Display6.resize(40, 80);
    image(body2Display6, 275, 360);
    
    body2Display7.resize(40, 90);
    image(body2Display7, 165, 450);
    body2Display8.resize(40, 100);
    image(body2Display8, 275, 445);
  }
  
  
  
  
  
  
}
function eyes() {
 
  
   displayCharacter();
  options();
  
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[2], 30, 180);
  
  
  // color choices
    
    fill(69, 35, 28);
    rect(125, 340, 50, 50);
    
    fill(51, 15, 7);
    rect(195, 340, 50, 50);
    
    fill(24, 5, 1);
    rect(265, 340, 50, 50);
    
    fill (82, 156, 196);
    rect(335, 340, 50, 50);
    
    fill(160, 160, 160);
    rect(125, 415, 50, 50);
    
    fill(97, 145, 110);
    rect(195, 415, 50, 50);
    
    fill(152, 78, 191);
    rect(265, 415, 50, 50);
    
    fill(237, 54, 54);
    rect(335, 415, 50, 50);
    
  noTint();
  if(male) {
    fill(98, 94, 128);
    maleEyeWhitesDisplay.resize(660, 660);
    
    malePupilsDisplay.resize(660, 660);
    
    
    // resize display eyes
    for(var i = 0; i < eyeNum; i++) {
      maleEyesDisplay[i].resize(660, 660);
    }
    i = 0;
    for(var col = 0; col < 2; col++){
      for(var row = 0; row < 3; row++){
        rect(130 + (col * 140), 130 + (row * 60), 100, 40);
        noTint();
        image(maleEyeWhitesDisplay, -140 + (col * 140), 30 + (row * 60));
        tint(skinR, skinG, skinB, skinT);
        image(maleEyesDisplay[i], -140 + (col * 140), 30 + (row * 60));
        tint(eyeR, eyeG, eyeB, eyeT);
        image(malePupilsDisplay, -140 + (col * 140), 30 + (row * 60))
        i++
        
      }
    }

    
    
    
   }else {
     fill(98, 94, 128);
      femaleEyeWhitesDisplay.resize(660, 660);
    
    femalePupilsDisplay.resize(660, 660);
    
    
    // resize display eyes
    for(var i = 0; i < eyeNum; i++) {
      femaleEyesDisplay[i].resize(660, 660);
    }
    i = 0;
    for(var col = 0; col < 2; col++){
      for(var row = 0; row < 3; row++){
        rect(130 + (col * 140), 130 + (row * 60), 100, 40);
        noTint();
        image(femaleEyeWhitesDisplay, -140 + (col * 140), 60 + (row * 60));
        tint(skinR, skinG, skinB, skinT);
        image(femaleEyesDisplay[i], -140 + (col * 140), 60 + (row * 60));
        tint(eyeR, eyeG, eyeB, eyeT);
        image(femalePupilsDisplay, -140 + (col * 140), 60 + (row * 60))
        i++
        
      }
    }
    
  }
  
  
  
}

function eyebrows() {

  
 displayCharacter();
  options();
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[3], 30, 210);
  
  // color choices
  
    fill(69, 35, 28);
    rect(125, 340, 50, 50);
    
    fill(51, 15, 7);
    rect(195, 340, 50, 50);
    
    fill(24, 5, 1);
    rect(265, 340, 50, 50);
    
    fill (28, 37, 138);
    rect(335, 340, 50, 50);
    
    fill(122, 122, 122);
    rect(125, 415, 50, 50);
    
    fill(26, 125, 71);
    rect(195, 415, 50, 50);
    
    fill(115, 26, 125);
    rect(265, 415, 50, 50);
    
    fill(140, 17, 17);
    rect(335, 415, 50, 50);
    
  noTint();
  if(male) {
    fill(98, 94, 128);
    
    // resize display eyes
    for(var i = 0; i < eyeNum; i++) {
      maleBrowsDisplay[i].resize(660, 660);
    }
    i = 0;
    for(var col = 0; col < 2; col++){
      for(var row = 0; row < 3; row++){
        rect(130 + (col * 140), 130 + (row * 60), 100, 40);
        noTint();
        
        tint(browR, browG, browB, browT);
        image(maleBrowsDisplay[i], -140 + (col * 140), 30 + (row * 60));
        i++
        
      }
    }

    
   }else {
     fill(98, 94, 128);
    
    
    
    // resize display eyes
    for(var i = 0; i < eyeNum; i++) {
      femaleBrowsDisplay[i].resize(660, 660);
    }
    i = 0;
    for(var col = 0; col < 2; col++){
      for(var row = 0; row < 3; row++){
        rect(130 + (col * 140), 130 + (row * 60), 100, 40);
        tint(browR, browG, browB, browT);
        image(femaleBrowsDisplay[i], -140 + (col * 140), 65 + (row * 60));
        i++
        
      }
    }
    
  }
}
function nose() {
 
   displayCharacter();
  options();
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[4], 30, 240);
  
  if(male) {
    fill(98, 94, 128);
    
    // resize display eyes
    for(var i = 0; i < noseNum; i++) {
      maleNoseDisplay[i].resize(1360, 1960);
    }
    i = 0;
    for(var col = 0; col < 2; col++){
      for(var row = 0; row < 3; row++){
        rect(160 + (col * 100), 130 + (row * 100), 80, 80);
        
        tint(skinR, skinG, skinB, skinT);
        image(maleNoseDisplay[i], -445 + (col * 100), -235 + (row * 100));
        i++
        
      }
    }

    
   }else {
     fill(98, 94, 128);
    
    
    
    // resize display eyes
    for(var i = 0; i < noseNum; i++) {
      femaleNoseDisplay[i].resize(1360, 1960);
    }
    i = 0;
    for(var col = 0; col < 2; col++){
      for(var row = 0; row < 3; row++){
        rect(160 + (col * 100), 130 + (row * 100), 80, 80);
        
        tint(skinR, skinG, skinB, skinT);
        image(femaleNoseDisplay[i], -445 + (col * 100), -120 + (row * 100));
        i++
        
      }
    }
    
  }
  
  
  
  
}
function mouth() {

  
  displayCharacter();
  options();
  
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[5], 30, 270);
  noTint();
  
  if(male) {
    fill(98, 94, 128);
    
    // resize display eyes
    for(var i = 0; i < mouthNum; i++) {
      maleMouthDisplay[i].resize(1360, 1960);
    }
    i = 0;
    for(var col = 0; col < 2; col++){
      for(var row = 0; row < 3; row++){
        rect(160 + (col * 100), 130 + (row * 100), 80, 80);
        
        tint(skinR, skinG, skinB, skinT);
        image(maleMouthDisplay[i], -445 + (col * 100), -265 + (row * 100));
        i++
        
      }
    }

    
   }else {
     fill(98, 94, 128);
    
    
    
    // resize display eyes
    for(var i = 0; i < mouthNum; i++) {
      femaleMouthDisplay[i].resize(1360, 1960);
    }
    i = 0;
    for(var col = 0; col < 2; col++){
      for(var row = 0; row < 3; row++){
        rect(160 + (col * 100), 130 + (row * 100), 80, 80);
        noTint();
        
        tint(skinR, skinG, skinB, skinT);
        image(femaleMouthDisplay[i], -455 + (col * 100), -140 + (row * 100));
        i++
        
      }
    }
    
  }
}

function hair() {

  
   displayCharacter();
  options();
  // change color of text
  textSize(20);
  fill(98, 94, 128);
  text(optionStrs[6], 30, 300);
  
  fill(69, 35, 28);
    rect(125, 400, 50, 50);
    
    fill(51, 15, 7);
    rect(195, 400, 50, 50);
    
    fill(24, 5, 1);
    rect(265, 400, 50, 50);
    
    fill (28, 37, 138);
    rect(335, 400, 50, 50);
    
    fill(122, 122, 122);
    rect(125, 475, 50, 50);
    
    fill(26, 125, 71);
    rect(195, 475, 50, 50);
    
    fill(115, 26, 125);
    rect(265, 475, 50, 50);
    
    fill(140, 17, 17);
    rect(335, 475, 50, 50);
  
  
  fill(98, 94, 128);
  
  if (male) {
    // resize display eyes
    for(var i = 0; i < hairNum; i++) {
      maleHairDisplay[i].resize(200, 400);
    }
    
    i = 0;
    for(var col = 0; col < 3; col++){
      for(var row = 0; row < 3; row++){
        rect(120 + (col * 90), 120 + (row * 90), 80, 80);
        // noTint();
        tint(hairR, hairG, hairB, hairT);
        image(maleHairDisplay[i], 60 + (col * 90), 80 + (row * 90));
        i++
        
        
        
      }
    }
  } else {
   // resize display eyes
    for(var i = 0; i < hairNum; i++) {
      femaleHairDisplay[i].resize(200, 400);
    }
    femaleHairDisplay[7].resize(200, 250);
    i = 0;
    for(var col = 0; col < 3; col++){
      for(var row = 0; row < 3; row++){
        rect(120 + (col * 90), 120 + (row * 90), 80, 80);
        // noTint();
        tint(hairR, hairG, hairB, hairT);
        image(femaleHairDisplay[i], 60 + (col * 90), 110 + (row * 90));
        i++
        // image(maleEyesDisplay[i], -140 + (col * 140), 30 + (row * 60));
        // tint(eyeR, eyeG, eyeB, eyeT);
        // image(malePupilsDisplay, -140 + (col * 140), 30 + (row * 60))
        
        
      }
    }
  }
  
  
  
  
  
  
  
//   rect(130, 140, 100, 110);
//   rect(270, 140, 100, 110);
  
//   if(male) {
//     maleHair1Display.resize(360, 560);
//     maleHair2Display.resize(360, 560);
    
//     image(maleHair1Display, 0, 90);
//     image(maleHair2Display, 140, 90);
//   } else{
//     femaleHair1Display.resize(360, 560);
//     femaleHair2Display.resize(360, 560);
    
//     image(femaleHair1Display, 0, 120);
//     image(femaleHair2Display, 140, 120);
//   }
  
  
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
  rect(130, 280, 100, 110);
  
	noTint();
  if(male) {
    maleTop1Display.resize(160, 260);
    maleTop2Display.resize(160, 260);
    maleTop2Display.resize(160, 260);
    maleTop3Display.resize(160, 260);
    
    image(maleTop1Display, 100, 90);
    image(maleTop2Display, 240, 90);
    image(maleTop3Display, 100, 220);
    
  } else{
    femaleTop1Display.resize(160, 260);
    femaleTop2Display.resize(160, 260);
    femaleTop3Display.resize(160, 260);
    
    image(femaleTop1Display, 90, 105);
    image(femaleTop2Display, 230, 105);
    image(femaleTop3Display, 90, 235);
    
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
 rect(130, 340, 100, 150);
  noTint();
  if(male) {
    maleBottom1Display.resize(160, 260);
    maleBottom2Display.resize(160, 260);
	maleBottom3Display.resize(160, 260);
    
    image(maleBottom1Display, 100, 20);
    image(maleBottom2Display, 240, 20);
	image(maleBottom3Display, 100, 235);
  } else {
    femaleBottom1Display.resize(160, 260);
    femaleBottom2Display.resize(160, 260);
	femaleBottom3Display.resize(160, 260);
    
    image(femaleBottom1Display, 90, 40);
    image(femaleBottom2Display, 230, 40);
	image(femaleBottom3Display, 90, 255);
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
    fill(220);
  rect(0, 0, 800, 600);
   
    for(var i = 0; i < maleCharacter.length; i++) {
  maleCharacter[i].resize(350 + width, 600 + height); 
    }
    
   // body
      tint(skinR, skinG, skinB, skinT); 
    image(maleCharacter[0], 430 + positionX, 0 + positionY);
      // head
    image(maleCharacter[1], 430 + positionX, 0 + positionY); 
      // eye whites
      noTint();
    image(maleCharacter[2], 430 + positionX, 0 + positionY);
      //eyes
      tint(skinR, skinG, skinB, skinT);
    image(maleCharacter[3], 430 + positionX, 0 + positionY);
    // pupils
      tint(eyeR, eyeG, eyeB, eyeT);
    image(maleCharacter[4], 430 + positionX, 0 + positionY);
    // eyebrows
    tint(browR, browG, browB, browT);
    image(maleCharacter[5], 430 + positionX, 0 + positionY);
    // nose
    tint(skinR, skinG, skinB, skinT);
    image(maleCharacter[6], 430 + positionX, 0 + positionY);
    // mouth
    image(maleCharacter[7], 430 + positionX, 0 + positionY);
      //bottom
      noTint();
    image(maleCharacter[8], 430 + positionX, 0 + positionY);
    //top
    image(maleCharacter[9], 430 + positionX, 0 + positionY);
      //hair
      tint(hairR, hairG, hairB, hairT);
    image(maleCharacter[10], 430 + positionX, 0 + positionY);
    
    
   
    }else {
    fill(220);
  rect(0, 0, 800, 600);
   
    for(var i = 0; i < femaleCharacter.length; i++) {
  femaleCharacter[i].resize(350 + width, 600 + height); 
  
      
    }
   
      // body
      tint(skinR, skinG, skinB, skinT); 
    image(femaleCharacter[0], 430 + positionX, 30 + positionY);
      // head
    image(femaleCharacter[1], 430 + positionX, 30 + positionY); 
      // eye whites
      noTint();
    image(femaleCharacter[2], 430 + positionX, 30 + positionY);
      //eyes
      tint(skinR, skinG, skinB, skinT);
    image(femaleCharacter[3], 430 + positionX, 30 + positionY);
    // pupils
      tint(eyeR, eyeG, eyeB, eyeT);
    image(femaleCharacter[4], 430 + positionX, 30 + positionY);
    // eyebrows
    tint(browR, browG, browB, browT);
    image(femaleCharacter[5], 430 + positionX, 30 + positionY);
    // nose
    tint(skinR, skinG, skinB, skinT);
    image(femaleCharacter[6], 430 + positionX, 30 + positionY);
    // mouth
    image(femaleCharacter[7], 430 + positionX, 30 + positionY);
      //bottom
      noTint();
    image(femaleCharacter[8], 430 + positionX, 30 + positionY);
    //top
    image(femaleCharacter[9], 430 + positionX, 30 + positionY);
      //hair
      tint(hairR, hairG, hairB, hairT);
    image(femaleCharacter[10], 430 + positionX, 30 + positionY);
    
    
   
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



