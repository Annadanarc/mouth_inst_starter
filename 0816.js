// video variables
let video;
let showCapture = true;

// trigger boundary and threshold variables
let middleX;
let mouthOpenThreshold = 10;
let lastMouthOpenBool = false;

// classifier options
const detectionOptions = {
    withLandmarks: true,
    withDescriptors: false
};

function modelLoaded() {
    console.log("Model loaded!");

    // run face detection, with gotResult method passed as callback
    classifier.detect(gotResult);

    /* enable the next line to hide webcam view
       after model has loaded */
    // showCapture = false;
}

function gotResult(error, results) {
  // display error in the console
  if (error) {
      console.error(error);
  } else {
        // do something with your results
        // console.log("new results: "); // uncomment for debugging
        // console.log(results); // uncomment for debugging
        // bind to a global `detections` variable
        detections = results;
  }

  // call the detect method again here so it keeps going
  // could also potentially call detect in draw, with some handling
  classifier.detect(gotResult);
}

function preload() {
}

function setup() {
  createCanvas(600, 400);

  // load video using p5
  video = createCapture(VIDEO);
  // set video size to width and height of canvas
  // hide video feed to render later in draw
  video.size(width, height);
  video.hide();
  
   // load classifier with video, options, and callback
   classifier = ml5.faceApi(
      video, detectionOptions, modelLoaded
   );
}

function draw() {
}

