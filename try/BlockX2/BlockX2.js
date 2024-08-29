/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlockX2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Block-x", "./BlockX2/costumes/Block-x.svg", {
        x: 24.475899999999996,
        y: 31.794966211428687,
      }),
    ];

    this.sounds = [new Sound("meow", "./BlockX2/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(187, 120);
    while (true) {
      if (
        this.stage.costume.name === "brainpage" ||
        this.stage.costume.name === "computer_content"
      ) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      if (this.touching("mouse")) {
        this.size = 100;
      } else {
        this.size = 80;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stage.costume = "computer_information";
  }
}
