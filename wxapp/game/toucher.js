import Hammer from '../libs/hammer'

export default class Toucher {

    constructor (handler) {
        this.handler = handler
        this.sn = handler.sn

        this.hammer = new Hammer(this.sn.canvas)

        this.effecting = false

        this.initialize()
    }

    initialize () {
        //
    }

    isEffecting () {
        return this.effecting
    }

    pause () {
        this.effecting = false
    }

    resume () {
        this.effecting = true
    }

}
