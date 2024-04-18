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
    this.speed = 10;
  }

  update(dx = 1, dy = 1) {
    this.x += dx * this.speed;
    this.y += dy * this.speed;
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
