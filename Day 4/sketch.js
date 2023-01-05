function setup() {

  let ratio = 1;
  //we should always be the height of the thing at most
  let windowRatio = windowWidth / windowHeight;
  let w = windowWidth;
  let h = windowHeight;
  if (windowRatio > ratio)
  {
    w = windowHeight;
    h = windowHeight;
  }

  createCanvas(w,h);
}


function draw() {
  background(0);
}
