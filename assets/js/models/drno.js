class Drno {
    constructor(ctx, x, y) {
      this.ctx = ctx
      
      this.x = x
      this.y = y
      this.vy = 0.7
      this.vx = 1
      this.sprite = new Image()
      this.sprite.src = './assets/img/drno.png'
      this.sprite.isReady = false
      this.stop = false
      this.sprite.horizontalFrames = 4
      this.sprite.verticalFrames = 4
      this.sprite.horizontalFrameIndex = 0
      this.sprite.verticalFrameIndex = 2
      this.sprite.drawCount = 0
      this.finish_flag = false
      this.sprite.onload = () => {
        this.sprite.isReady = true
        this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames)
        this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames)
        this.width = this.sprite.frameWidth
        this.height = this.sprite.frameHeight
      }
  
      this.movements = {
        right: true
      }
    }
  
    isReady() {
      return this.sprite.isReady
    }
  
    draw() {
       
      if (this.isReady()) {
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
  
    animate() {
      if (this.sprite.drawCount % MOVEMENT_FRAMES === 0) {
        if (this.sprite.horizontalFrameIndex >= this.sprite.horizontalFrames - 1) {
          this.sprite.horizontalFrameIndex = 0
        } else {
          this.sprite.horizontalFrameIndex++
        }
        this.sprite.drawCount = 0
      }
    }
  
    move() {
      if (stop === false) {
        this.x = 0
      }
      else {
        this.x -= ALVARDSPEED
      }
    }
  
  
    moveRigth() {
      if (this.movements.right) {
        this.x -= SPEED - 11 
      }
      if (stop === false) {
        this.x = 0
      }
  }

  fight_move() {
    if(this.turn) {
          this.x += ALVARDSPEED + ALVARDSPEED
      }
      else if(!this.turn) {
          this.x -= ALVARDSPEED - ALVARDSPEED; 
          //this.vx += SPEED
      }
    
      if(this.vy > 10) {
        this.vy = 2
      }
      
      this.y -= this.vy
      this.vy -= 0.9

      if (this.y >= 793) {
        this.vy *= -1;
      }
      if(this.x >= 1200) { 
          this.turn = false;
      }
      else if(this.x <= 10) { 
          this.turn = true;
      }
  }

  finish_move() {
    this.turn = false
    this.y = 350
    this.x -= ALVARDSPEED * 2
    this.horizontalFrameIndex = 1
    this.verticalFrameIndex = 3
  }

    
    animateDie() {
      this.sprite.verticalFrameIndex = 0
      this.sprite.horizontalFrameIndex = 3
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
  
  