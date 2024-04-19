// Constants
const TEXT_PADDING = 10;
const STR1 = ["todos m____", "todos merdas", "todos mortos"];

// Variables
let str1;
let str2;
let grid;
let cellSize;
let img;
let lastMove;

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
  filter(THRESHOLD, fluctuatingValue(0.2, 0.5, frameCount + 190, 0.01));
  filter(BLUR, 10);
  // Texts
  str2.display();
  if (millis() - lastMove > 1000) {
    str1.display();
    lastMove = millis();
    if (str1.y >= 100) str1.y = -20;
    str1.y += 20;
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
  let amplitude = (max - min) / 2;

  return min + amplitude * sin(num / 50);
};
