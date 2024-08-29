/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Book extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Book/costumes/costume1.svg", {
        x: 38.21623677372463,
        y: 61.07627223813074,
      }),
    ];

    this.sounds = [
      new Sound("xylo1", "./Book/sounds/xylo1.wav"),
      new Sound("bell toll", "./Book/sounds/bell toll.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.start2 = 0;
    this.goto(35, 79);
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
      if (
        this.touching("mouse") &&
        this.mouse.down &&
        this.toNumber(this.stage.vars.start2) === 1
      ) {
        this.broadcast("openbook");
        this.visible = false;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    yield* this.glide(1, -69, -107);
    this.stage.vars.start2 = 1;
    return;
  }
}
