import "phaser";

//config stuff for the scene
const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

//set up a scene and pass in the scene config object
export class GameScene extends Phaser.Scene {
    private froggy : Phaser.GameObjects.Sprite;

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
        // froggy.setBounce(0.2);
        // this.froggy.
        this.physics.add.existing(this.froggy);

        // player.setCollideWorldBounds(true);
    }

    public update() {
        const cursorKeys = this.input.keyboard.createCursorKeys();

        if (cursorKeys.up.isDown) {
            this.froggy.y -= 10;
        } else if (cursorKeys.down.isDown) {
            this.froggy.y += 10;
        } else {
            this.froggy.y += 0;
        }

        if (cursorKeys.right.isDown) {
            this.froggy.x += 10;
        } else if (cursorKeys.left.isDown) {
            this.froggy.x -= 10;
        } else {
            this.froggy.x += 0;
        }

        // if (cursorKeys.up.isDown && this.froggy.body.touching.down)
        // {
        //     this.froggy.setVelocityY(-330);
        // }
    }
}
