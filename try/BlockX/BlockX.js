/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlockX extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Block-x", "./BlockX/costumes/Block-x.svg", { x: 25, y: 32 }),
    ];

    this.sounds = [new Sound("meow", "./BlockX/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(186, 132);
    this.visible = false;
    while (true) {
      if (
        this.stage.costume.name === "computer_information" ||
        this.stage.costume.name === "letter" ||
        this.stage.costume.name === "bookcontent" ||
        this.stage.costume.name === "locker" ||
        this.stage.costume.name === "computer"
      ) {
        this.visible = true;
        if (this.touching("mouse")) {
          this.size = 100;
          if (this.mouse.down) {
            this.broadcast("labdesk");
            this.visible = false;
          }
        } else {
          this.size = 80;
        }
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
