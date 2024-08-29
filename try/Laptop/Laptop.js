/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Laptop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("laptop", "./Laptop/costumes/laptop.png", { x: 75, y: 75 }),
    ];

    this.sounds = [new Sound("pop", "./Laptop/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(59, 31);
    this.visible = false;
    while (true) {
      if (this.stage.costume.name === "labdesk") {
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
    this.broadcast("computer");
    this.visible = false;
  }
}
