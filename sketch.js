// Constants
const TEXT_PADDING = 10;

// Variables
let str1;
let str2;
let grid;
let cellSize;
let img;

function setup() {
  createCanvas(500, 500);
  str1 = new TextObj(
    "meus amig__",
    TEXT_PADDING,
    TEXT_PADDING,
    20,
    255,
    LEFT,
    TOP
  );
  str2 = new TextObj(
    "hoje estão todos m____",
    width - TEXT_PADDING,
    height - TEXT_PADDING,
    20,
    255,
    RIGHT,
    BOTTOM
  );
  grid = new Grid(5, 5, width, height);
  img = loadImage("assets/men.jpeg");
}

function draw() {
  image(img, 0, 0, width, height);
  filter(THRESHOLD, fluctuatingValue(0.3, 0.5, frameCount));
  // Texts
  str1.display();
  str2.display();
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
  let amplitude = (max - min) / 2;

  return min + amplitude * sin(freq * num);
};
