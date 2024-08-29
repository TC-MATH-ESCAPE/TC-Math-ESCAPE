/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arrow2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrow1-c", "./Arrow2/costumes/arrow1-c.svg", {
        x: 23,
        y: 28,
      }),
    ];

    this.sounds = [new Sound("pop", "./Arrow2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-120, -120);
    this.visible = false;
    while (true) {
      if (this.stage.costume.name === "labdesk") {
        this.visible = true;
      } else {
        this.visible = false;
      }
      if (this.touching("mouse")) {
        this.size = 100;
        if (this.mouse.down) {
          this.broadcast("wakeup");
          this.visible = false;
        }
      } else {
        this.size = 80;
      }
      yield;
    }
  }
}
