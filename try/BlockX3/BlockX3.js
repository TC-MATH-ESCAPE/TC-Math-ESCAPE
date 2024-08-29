/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlockX3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Block-x", "./BlockX3/costumes/Block-x.svg", {
        x: 25,
        y: 32,
      }),
    ];

    this.sounds = [new Sound("meow", "./BlockX3/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(186, 132);
    while (true) {
      if (this.stage.costume.name === "sudoku") {
        this.visible = true;
      } else {
        this.visible = false;
      }
      if (this.touching("mouse")) {
        this.size = 100;
        if (this.mouse.down) {
          this.broadcast("experiment");
        }
      } else {
        this.size = 80;
      }
      yield;
    }
  }
}
