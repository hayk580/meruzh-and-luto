class Fireball {
  constructor(ctx, x, y, maxY) {
    this.ctx = ctx
    this.x = x
    this.vx = SPEED

    this.y = y
    this.maxY = maxY
    this.vy = SPEED

    this.sprite = new Image()
    this.sprite.src = './assets/img/fireball.sprite.png'
    this.sprite.isReady = false
    this.sprite.horizontalFrames = 4
    this.sprite.verticalFrames = 1
    this.sprite.horizontalFrameIndex = 0
    this.sprite.verticalFrameIndex = 0
    this.sprite.onload = () => {
      this.sprite.isReady = true
      this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames)
      this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames)
      this.width = this.sprite.frameWidth
      this.height = this.sprite.frameWidth
    }

    this.sprite.drawCount = 0
  }

  isReady() {
    return this.sprite.isReady
  }

  draw() {
    if (this.isReady) {
      this.ctx.drawImage(
        this.sprite,
        this.sprite.horizontalFrameIndex * this.sprite.frameWidth,
        this.sprite.verticalFrameIndex * this.sprite.frameHeight,
        this.sprite.frameWidth,
        this.sprite.frameHeight,
        this.x,
        this.y,
        this.width,
        this.height
      )

      this.sprite.drawCount++
      this.animate()
    }
  }

  move() {
    this.x += this.vx
    this.y += this.vy
    this.vy += GRAVITY

    if (this.y >= (this.maxY - this.height)) {
      this.vy *= -1;
    }
  }



  animate() {
    if (this.sprite.drawCount % MOVEMENT_FRAMES === 0) {
      this.sprite.horizontalFrameIndex = (this.sprite.horizontalFrameIndex + 1) % this.sprite.horizontalFrames
      this.sprite.drawCount = 0
    }
  }



  collidesWithAnmie(element) {
    return this.x < element.x + element.width &&
      this.x + this.width > element.x &&
      this.y < element.y + element.height &&
      this.y + this.height > element.y

  }

}