class Spaceship extends Phaser.GameObjects.Sprite{
    constructor (scene, x, y, texture, frame, pointValue){
        super (scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue; //I SPENT 2 DAYS LOOKING FOR A TYPO HERE
        this.moveSpeed = game.settings.spaceshipSpeed;
    }

    update(){
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }

    reset(){
        this.x = game.config.width;
    }
}