/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shutdown extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button3-a", "./Shutdown/costumes/button3-a.svg", {
        x: 72,
        y: 72,
      }),
      new Costume("button3-b", "./Shutdown/costumes/button3-b.svg", {
        x: 72,
        y: 72,
      }),
    ];

    this.sounds = [new Sound("pop", "./Shutdown/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-141, 26);
    while (true) {
      if (this.stage.costume.name === "computer_information") {
        this.visible = true;
        if (this.touching("mouse")) {
          this.size = 100;
        } else {
          this.size = 80;
        }
        if (this.touching("mouse") && this.mouse.down) {
          this.broadcast("brainpage");
          this.visible = false;
        }
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
