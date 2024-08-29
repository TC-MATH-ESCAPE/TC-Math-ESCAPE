/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Trashcan extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("trashcan", "./Trashcan/costumes/trashcan.svg", {
        x: 59,
        y: -10,
      }),
    ];

    this.sounds = [new Sound("pop", "./Trashcan/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenthisspriteclicked() {
    this.direction = 90;
    this.y += 8;
    yield* this.wait(0.1);
    this.y -= 16;
    yield* this.wait(0.1);
    this.y += 8;
    yield* this.wait(0.1);
    this.broadcast("trashout");
  }

  *whenGreenFlagClicked() {
    this.goto(-193, -57);
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
}
