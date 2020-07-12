import * as Phaser from 'phaser';

//config stuff for the scene
const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

//set up a scene and pass in the scene config object
export class GameScene extends Phaser.Scene {
    private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
    private froggy: Phaser.GameObjects.Sprite;

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.image('froggy', '../assets/images/froggy.png');
    }

    public create() {
        this.square = this.add.rectangle(400, 400, 100, 100, 0x8FBC8F) as any;
        this.physics.add.existing(this.square);

        //  This simply creates a sprite using the frog image we loaded above and positions it at 200 x 200
        this.froggy = this.add.sprite(200, 200, 'froggy');
        this.froggy.height = 100;
        this.froggy.width = 100;
    }

    public update() {
        const cursorKeys = this.input.keyboard.createCursorKeys();

        if (cursorKeys.up.isDown) {
            this.square.body.setVelocityY(-500);
        } else if (cursorKeys.down.isDown) {
            this.square.body.setVelocityY(500);
        } else {
            this.square.body.setVelocityY(0);
        }

        if (cursorKeys.right.isDown) {
            this.square.body.setVelocityX(500);
        } else if (cursorKeys.left.isDown) {
            this.square.body.setVelocityX(-500);
        } else {
            this.square.body.setVelocityX(0);
        }
    }
}

//setting up our game config object
const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Sample',

    type: Phaser.AUTO,

    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },

    parent: 'game',
    backgroundColor: '#000000',
    scene: GameScene,

};

//instantiate a new phaser game object, passing in the game config object
export const game = new Phaser.Game(gameConfig);
