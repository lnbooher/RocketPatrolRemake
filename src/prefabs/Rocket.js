class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);

      scene.add.existing(this);
      this.isFiring = false;
      this.moveSpeed = 2;
    }


    update(){
    if(!this.isFiring){
        if(keyLEFT.isDown && this.x >= borderUISize + this.width){
            this.x -= this.moveSpeed;
        }else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
            this.x += this.moveSpeed;
        }
    }

    //Fire control
    if(Phaser.Input.Keyboard.JustDown(keyF)){
        this.isFiring = true;
    }
    //Move up if fired
    if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
        this.y -= this.moveSpeed;
    }
    //reset on miss
    if(this.y <= borderUISize * 3 + borderPadding){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }

	if(keyLEFT.isDown) {
    	this.x -= this.moveSpeed;
    } else if (keyRIGHT.isDown) {
    	this.x += this.moveSpeed;
    }
    }
  }