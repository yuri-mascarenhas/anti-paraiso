/**
 *Constansts
 * - All time constants are in ms
 */
const TEXT_PADDING = 10;
const STR1 = ["todos m____", "todos merdas", "todos mortos"];
const DISPLAY_TIME = 1500;

// Variables
let str1;
let str2;
let grid;
let cellSize;
let img;
let lastMove;
let thresholdValue;

function setup() {
  createCanvas(500, 500);
  str1 = new TextObj(
    "todos m____",
    TEXT_PADDING,
    TEXT_PADDING,
    20,
    255,
    LEFT,
    TOP
  );
  str2 = new TextObj(
    "meus amig__",
    width - TEXT_PADDING,
    height - TEXT_PADDING,
    20,
    (255, 0, 10),
    RIGHT,
    BOTTOM
  );
  grid = new Grid(5, 5, width, height);
  img = loadImage("assets/men.jpeg");
  lastMove = 0;
}

function draw() {
  image(img, 0, 0, width, height);
  thresholdValue = fluctuatingValue(0.01, 0.5, frameCount + 190, 0.02);
  filter(THRESHOLD, thresholdValue);
  filter(BLUR, 10);
  // Texts
  str2.display();
  console.log(frameCount);
}

// Other p5.js functions
function keyPressed() {
  if (key === "s") {
    saveCanvas("export", "png");
  }
}

// Utils

/**
 *Generates a fluctuating value between a specified range using the sine function.
 *
 * @param {number} min - The smallest value possible to be converted
 * @param {number} max - The largest value possible to be converted
 * @param {number} num - The number to be converted
 *
 * @returns {number} - The fluctuating value within range converted from num
 */
const fluctuatingValue = (min, max, num, freq = 0.01) => {
  let range = max - min;
  let amplitude = range / 2;
  let scaledNum = map(sin(num * freq), -1, 1, -0.5, 0.5);
  return min + amplitude + amplitude * scaledNum;
};
