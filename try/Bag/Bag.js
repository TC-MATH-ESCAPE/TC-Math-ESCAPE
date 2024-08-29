/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bag extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("balloon1-a", "./Bag/costumes/balloon1-a.svg", {
        x: 32,
        y: 94,
      }),
      new Costume("balloon1-b", "./Bag/costumes/balloon1-b.svg", {
        x: 31,
        y: 94,
      }),
      new Costume("balloon1-c", "./Bag/costumes/balloon1-c.svg", {
        x: 31,
        y: 94,
      }),
    ];

    this.sounds = [new Sound("Pop", "./Bag/sounds/Pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.bag = 0;
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.size = 100;
      } else {
        this.size = 80;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.bag++;
  }
}
