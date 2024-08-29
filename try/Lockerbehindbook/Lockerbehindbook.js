/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lockerbehindbook extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Cheesy Puffs",
        "./Lockerbehindbook/costumes/Cheesy Puffs.png",
        { x: 87, y: 72 }
      ),
    ];

    this.sounds = [
      new Sound("xylo1", "./Lockerbehindbook/sounds/xylo1.wav"),
      new Sound("bell toll", "./Lockerbehindbook/sounds/bell toll.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(30, 90);
    this.visible = false;
    while (true) {
      if (this.stage.costume.name === "labdesk") {
        this.visible = true;
      } else {
        this.visible = false;
      }
      if (this.touching("mouse")) {
        this.size = 50;
      } else {
        this.size = 30;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("locker");
    this.visible = false;
  }
}
