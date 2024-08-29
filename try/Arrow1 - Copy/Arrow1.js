/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arrow1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrow1-c", "./Arrow1/costumes/arrow1-c.svg", {
        x: 23,
        y: 28,
      }),
    ];

    this.sounds = [new Sound("pop", "./Arrow1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-96, -139);
    this.visible = false;
    while (true) {
      if (this.stage.costume.name === "experiment") {
        this.visible = true;
      } else {
        this.visible = false;
      }
      if (this.touching("mouse")) {
        this.size = 100;
        if (this.mouse.down) {
          this.broadcast("labdesk");
          this.visible = false;
        }
      } else {
        this.size = 80;
      }
      yield;
    }
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }
}
