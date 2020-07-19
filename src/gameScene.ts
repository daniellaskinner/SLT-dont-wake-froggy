import "phaser";

//config stuff for the scene
const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

//set up a scene and pass in the scene config object
export class GameScene extends Phaser.Scene {
    private froggy: Phaser.Physics.Arcade.Sprite;

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.image('froggy', '../assets/images/froggy.png');
    }

    public create() {
        this.froggy = this.physics.add.sprite(200, 200, 'froggy');
        this.froggy.setScale(0.3, 0.3);
        // this.froggy.displayWidth = this.config.width * .1; this.froggy.scaleY = this.froggy.scaleX.
        // this.froggy.setBounce(0.2);

        this.physics.add.existing(this.froggy);

        // player.setCollideWorldBounds(true);
    }

    public update() {
        const cursorKeys = this.input.keyboard.createCursorKeys();

        if (cursorKeys.left.isDown)
        {
            this.froggy.setVelocityX(-150);

            // this.froggy.anims.play('left', true);
        }
        else if (cursorKeys.right.isDown)
        {
            this.froggy.setVelocityX(150);

            // this.froggy.anims.play('right', true);
        }
        else if (cursorKeys.down.isDown)
        {
            this.froggy.setVelocityY(150);

            // this.froggy.anims.play('down', true);
        }
        else if (cursorKeys.up.isDown)
        {
            this.froggy.setVelocityY(-150);

            // this.froggy.anims.play('up', true);
        }
        else
        {
            this.froggy.setVelocity(0, 0);

            // this.froggy.anims.play('turn');
        }

        if (cursorKeys.space.isDown) {
            this.froggy.setBounceY(0.2);
        }
        // if (cursorKeys.up.isDown && this.froggy.body.touching.down)
        // {
        //     this.froggy.setVelocityY(-330);
        // }
    }
}
