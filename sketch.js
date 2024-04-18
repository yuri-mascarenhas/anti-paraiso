let str1;
let str2;

function setup() {
  createCanvas(500, 500);
  str1 = new TextObj("fiz essa para os meus ami__s", 0, 0, 20, 255, LEFT, TOP);
  str2 = new TextObj(
    "hoje estão todos m____",
    width,
    height,
    20,
    255,
    RIGHT,
    BOTTOM
  );
}
function draw() {
  background(0);

  // Texts
  str1.display();
  str2.display();
}
