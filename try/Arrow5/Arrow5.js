/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arrow5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Arrow1-d2", "./Arrow5/costumes/Arrow1-d2.svg", {
        x: 23,
        y: 28,
      }),
    ];

    this.sounds = [new Sound("pop", "./Arrow5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-67, 22);
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    while (true) {
      if (this.toNumber(this.stage.vars.door) === 1) {
        if (this.stage.costume.name === "labdesk") {
          this.visible = true;
        } else {
          this.visible = false;
        }
      } else {
        this.visible = false;
      }
      if (this.touching("mouse")) {
        this.size = 100;
        if (this.mouse.down) {
          this.stage.costume = "experiment";
          this.visible = false;
        }
      } else {
        this.size = 80;
      }
      yield;
    }
  }
}
