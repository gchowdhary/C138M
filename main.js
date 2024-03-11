img = "";

// 3
status = "";
// variable to hold the status of this model 
// used to keep a track whether the cocossd model is loaded or not.

function preload(){
  img = loadImage('dog_cat.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();

  // 2
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  // initializing the CocoSsd model
  // objectDetector a var
  // objectDetector is a predefined function of ml5.js- triggers ml5.js object "detect" function
  // pass 2 parameters : model name and a function which will start the ml5 object detection
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  // update h3 tag with “Status : Detecting Objects”
}

// 4
function modelLoaded() {
  console.log("Model Loaded!")
  // console
  status = true;
  // after the model is loaded, set the status variable as true
  //  we will draw rectangles around objects only if the status variable is true
  objectDetector.detect(img, gotResult);
  // call a predefined function of ml5.js which is used for object detection
  // objectDetector is the variable that is holding the cocossd model 
  // "detect" predefined function of ml5.js used for object detection and get back result of object detection
  // img variable holds the image
  // gotResult function will be holding the result of object detection
}

// 5
function gotResult(error, results) {
  // gotResult function which holds the result of the object detection, has two parameters inside it 
  // one is error and second is results.
  if (error) {
    console.log(error);
    }
  else{console.log(results);}
  }


function draw() {
  image(img, 0, 0, 640, 420);
  // fill("#FF0000");
  fill("green");
  text("Dog", 45, 75);
  noFill();
  stroke("green");
  rect(30, 60, 450, 350 );


  // 1
  fill("#FF0000");
  // to fill the colour
  text("Cat", 320, 120);
  // to put the text (<text>,x,y)
  noFill();
  // to remove colour from rectangle
  stroke("#FF0000");
  // set border colour
  rect(300, 90, 270, 320 );
  // draw rect(x,y,width,height)
}
