import "phaser";
import {GameScene} from "./gameScene";

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
    scene: GameScene

};

//instantiate a new phaser game object, passing in the game config object
export const game = new Phaser.Game(gameConfig);
