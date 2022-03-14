class Background {
  constructor(ctx, src) {
    this.ctx = ctx

    this.x = 0
    this.y = 0
    this.h = this.ctx.canvas.height
    // this.w = this.ctx.canvas.width
    this.w = MASIV_WIDTH
    this.vx = -3
    this.src = src
    this.img = new Image()
    this.img.src = src
    this.img.isReady = false
    this.img.onload = () => {
      this.img.isReady = true
    }

    this.movements = {
      right: false
    }
  }

  isReady() {
    return this.img.isReady
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      )

      this.ctx.drawImage(
        this.img,
        this.x + this.w,
        this.y,
        this.w,
        this.h
      )
    }
  }

  move() {
    if (this.movements.right) {
      this.x += this.vx

      if (this.x + this.w <= 0) {
        this.x = 0
      }
    }
  }

  onKeyEvent(event) {
    const status = event.type === 'keydown'

    switch (event.keyCode) {
      case KEY_RIGHT:
        this.movements.right = status
        break;

      default:
        break;
    }
  }
}


