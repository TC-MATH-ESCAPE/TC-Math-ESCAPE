/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button3-a", "./Button2/costumes/button3-a.svg", {
        x: 67.30880191616771,
        y: 23.619291137724616,
      }),
    ];

    this.sounds = [new Sound("pop", "./Button2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-101, 122);
    while (true) {
      if (this.toNumber(this.stage.vars.bag) % 2 === 1) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
