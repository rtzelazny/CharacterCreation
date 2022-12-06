
var page1 = true;
var page2 = false;
var body1x, body2x, body1y, body2y;
var clicked = false;
var male= false;
var female = false;
// male character array with all selections
var maleCharacter = [];

var scorecard;
var newStr;


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
  maleTop1 = loadImage('maleTop1.png');
  maleBottom1 = loadImage('maleBottom1.png');
 var options = loadStrings('Options.txt');
  
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
	
  scorecard = createP("Your score is ");
  
  

}

function draw() {
  noLoop();
  background(220);
  page1 = true;
	

//	let div = createDiv('').size(100, 100);
//div.html('hi');
  
  body1x = 190; body1y = 70;
  body2x = 480; body2y = 70;
  image(body1, body1x, body1y, 175, 400);
  image(body2, body2x, body2y, 135, 400);
   textSize(32);
  text('Choose your character:', 0, 30);
	score();
	
	
  
//   if(mouseX > body1x && mouseX < 365 && mouseY > body1y && mouseY < 470) {
   
//      text('Choose your character:',400, 550);
//   }
  
//   if(mouseX > body2x && mouseX < 615 && mouseY > body2y && mouseY < 470) {
//          text('Choose your character:',400, 550);
//   }

  
}
function score (newStr) {
	
	scorecard.html("newStr");
}


function mouseClicked() {
  noLoop();
  if (page1) {
    if(mouseX > body1x && mouseX < 365 && mouseY > body1y && mouseY < 470) {
     clicked = true;
      male = true;
		newStr = "pew";
		score(newStr);
		
      page();
		
  }
  
  if(mouseX > body2x && mouseX < 615 && mouseY > body2y && mouseY < 470) {
    clicked = true;
    page();
  }
    
  }
  
  if(page2) {
    page2 = false;
    skinColor();
    
  }
  
 
  
  
}

function skinColor() {
  fill(220);
  rect(0, 0, 800, 600);
  options();
  displayCharacter();
	
//	score_display_element = document.getElementById('#p1');
//score_display_element.textContent = "Score: ";
  
}
function bodyType() {
  fill(220);
  rect(0, 0, 800, 600);
  
  options();
  displayCharacter();
}
function eyes() {
  fill(220);
  rect(0, 0, 800, 600);
  
  options();
  displayCharacter();
}

function eyebrows() {
  fill(220);
  rect(0, 0, 800, 600);
  
  options();
  displayCharacter();
}
function nose() {
  fill(220);
  rect(0, 0, 800, 600);
  
  options();
  displayCharacter();
}
function mouth() {
  fill(220);
  rect(0, 0, 800, 600);
  
  options();
  displayCharacter();
}

function hair() {
  fill(220);
  rect(0, 0, 800, 600);
  
  options();
  displayCharacter();
}
function tops() {
  fill(220);
  rect(0, 0, 800, 600);
  
  options();
  displayCharacter();
}
function bottom() {
  fill(220);
  rect(0, 0, 800, 600);
  
  options();
  displayCharacter();
}
function more() {
  fill(220);
  rect(0, 0, 800, 600);
  
  options();
  displayCharacter();
}

function page() {
  if(page1) {
    page1 = false;
  page2 = true;
    print(page2);
  }
}

// displayCharacter
function displayCharacter() {
  if(male) {
  maleCharacter[0].resize(400, 600);
    for(var i = 0; i < maleCharacter.length; i++) {
  maleCharacter[i].resize(350, 600); 
  image(maleCharacter[i], 380, 0); 
      
    }
    }
    
}

function options() {
  noStroke();
  fill(128, 119, 159);
  rect(20, 100, 400, 450);
   textSize(20);
  for(var i = 0; i < options.length; i++) {
    text(options[i], 30, 95 + 15*i);
  }
  
  // text('Skin', 30, 120);
  // text('Body', 30, 145);
  // text('Eyes', 30, 170);
  // text('Brows', 30, 195);
  // text('Nose', 30, 220);
  // text('Mouth', 30, 245);
  // text('Hair', 30, 270);
  // text('Top', 30, 295);
  // text('Bottoms', 30, 320);
  // text('More', 30, 345);
  
}

  
//   if(mouseX > body1x && mouseX < 365 && mouseY > body1y && mouseY < 470) {
   
//      text('Choose your character:',400, 550);
//   }
  
//   if(mouseX > body2x && mouseX < 615 && mouseY > body2y && mouseY < 470) {
//          text('Choose your character:',400, 550);
//   }
 
 
  
  
 
 
  
  
  
  


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
    page();
  }
    
  }
  
  if(page2) {
    page2 = false;
    skinColor();
    
  }
	
	// if clicked on word, go to the function of the word that will draw over with options
  
 
  
  
}

function skinColor() {
  fill(220);
  rect(0, 0, 800, 600);
  
  options();
  displayCharacter();
  
  
  
  
}

function page() {
  if(page1) {
    page1 = false;
  page2 = true;
    print(page2);
  }
}

function displayCharacter() {
  if(male) {
  maleCharacter[0].resize(400, 600);
    for(var i = 0; i < maleCharacter.length; i++) {
  maleCharacter[i].resize(350, 600); 
  image(maleCharacter[i], 380, 0); 
      
    }
    }
    
}

function options() {
  noStroke();
  fill(128, 119, 159);
  rect(20, 100, 400, 450);
   textSize(20);
  text('Skin', 30, 120);
  text('Body', 30, 145);
  text('Eyes', 30, 170);
  text('Brows', 30, 195);
  text('Nose', 30, 220);
  text('Mouth', 30, 245);
  text('Hair', 30, 270);
  text('Top', 30, 295);
  text('Bottoms', 30, 320);
  text('More', 30, 345);
  
}

















//// set up canvas
//const canvas = document.querySelector('canvas');
//// get canvas context
//const ctx = canvas.getContext('2d');
//
//
//
//var imageData = ctx.getImageData(0, 0, 320, 472);
//var dA = imageData.data; // raw pixel data in array
//
//var sv = 0; // saturation value. 0 = grayscale, 1 = original
//
//var luR = 0.3086; // constant to determine luminance of red. Similarly, for green and blue
//var luG = 0.6094;
//var luB = 0.0820;
//
//var az = (1 - sv)*luR + sv;
//var bz = (1 - sv)*luG;
//var cz = (1 - sv)*luB;
//var dz = (1 - sv)*luR;
//var ez = (1 - sv)*luG + sv;
//var fz = (1 - sv)*luB;
//var gz = (1 - sv)*luR;
//var hz = (1 - sv)*luG;
//var iz = (1 - sv)*luB + sv;
//
//for(var i = 0; i < dA.length; i += 4)
//{
//    var red = dA[i]; // Extract original red color [0 to 255]. Similarly for green and blue below
//    var green = dA[i + 1];
//    var blue = dA[i + 2];
//
//    var saturatedRed = (az*red + bz*green + cz*blue);
//    var saturatedGreen = (dz*red + ez*green + fz*blue);
//    var saturateddBlue = (gz*red + hz*green + iz*blue);
//
//    dA[i] = saturatedRed;
//    dA[i + 1] = saturatedGreen;
//    dA[i + 2] = saturateddBlue;
//}
//        
//ctx.putImageData(imageData, 0, 0);
//
//function show_image()
//{
//  document.write("img src="+"\"bodiesTransparant.png\"" +">");
//}
//







//
//
//// load images
//
//
//
//
//
//// initialize variables
//var mouseX;
//var mouseY;
//
//
//
////test
//ctx.fillStyle = 'green';
//ctx.fillRect(10, 10, 100, 100);
//
//// slider
//ctx.rect(400, 100, 200, 10);
//ctx.stroke();
//
//ctx.rect(500, 100, 10, 10);
//ctx.stroke();

//Global variables

        