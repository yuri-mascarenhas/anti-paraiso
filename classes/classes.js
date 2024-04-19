class TextObj {
  constructor(
    text,
    x,
    y,
    size = 12,
    color = 0,
    horizAlign = LEFT,
    vertAlign = TOP
  ) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.horizAlign = horizAlign;
    this.vertAlign = vertAlign;
  }

  move(dx = 1, dy = 1) {
    this.x += dx;
    this.y += dy;
  }

  display() {
    push();
    fill(this.color);
    textAlign(this.horizAlign, this.vertAlign);
    textSize(this.size);
    text(this.text, this.x, this.y);
    pop();
  }
}

class Grid {
  constructor(rows, cols, cnvWidth, cnvHeight) {
    this.rows = rows;
    this.cols = cols;
    this.cellSize = new Cell(cnvWidth / cols, cnvHeight / rows);
    this.map = this.#createMap();
  }

  #createMap() {
    return Array.from(Array(this.rows).fill(0), () => Array(this.cols).fill(0));
  }
}

class Cell {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
