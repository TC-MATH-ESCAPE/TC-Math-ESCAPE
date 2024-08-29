/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PasswordEnter extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Button2-a", "./PasswordEnter/costumes/Button2-a.svg", {
        x: 72,
        y: 72,
      }),
    ];

    this.sounds = [new Sound("meow", "./PasswordEnter/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenthisspriteclicked() {
    if (
      this.toNumber(this.stage.vars.firstdigit) % 4 === 3 &&
      this.toNumber(this.stage.vars.seconddigit) % 4 === 2 &&
      this.toNumber(this.stage.vars.thirddigit) % 4 === 1 &&
      this.toNumber(this.stage.vars.fourthdigit) % 4 === 0
    ) {
      this.broadcast("computer_information");
      this.visible = false;
    } else {
      yield* this.sayAndWait("Wrong Password", 2);
    }
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.costume.name === "computer") {
        this.goto(11, -57);
        this.moveAhead();
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
