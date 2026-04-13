
// 🍣 Welcome to Maki!
// preload() loads assets, create() sets up the scene
// update() runs every frame

import { Scene } from 'maki'

export default class GameScene extends Scene {
    preload() {
        super.preload()
        this.lia = this.maki.player('lia')
    }

    create() {
        super.create()
    }

    update() {
        this.maki.move(this.lia)
    }
}
