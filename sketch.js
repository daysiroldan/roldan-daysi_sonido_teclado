let sonidoBurbuja;


function preload() {
  soundFormats("wav", "mp3", "ogg");
  sonidoBurbuja = loadSound("sonidos/burbuja");
}
df



function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(presionado);

}

function presionado() {
  sonidoBurbuja.play();
  circle(mouseX, mouseY, 20, 20);
}

function draw() {

}

function mouseDragged() {
  sonidoBurbuja.play();
  circle(mouseX, mouseY, 20, 20);
}