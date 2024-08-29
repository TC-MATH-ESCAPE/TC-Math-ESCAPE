/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Trashpaper extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./Trashpaper/costumes/ball-a.svg", {
        x: 22,
        y: 22,
      }),
      new Costume("ball-b", "./Trashpaper/costumes/ball-b.svg", {
        x: 22,
        y: 22,
      }),
      new Costume("ball-c", "./Trashpaper/costumes/ball-c.svg", {
        x: 22,
        y: 22,
      }),
      new Costume("ball-d", "./Trashpaper/costumes/ball-d.svg", {
        x: 22,
        y: 22,
      }),
      new Costume("ball-e", "./Trashpaper/costumes/ball-e.svg", {
        x: 22,
        y: 22,
      }),
    ];

    this.sounds = [
      new Sound("Boing", "./Trashpaper/sounds/Boing.wav"),
      new Sound("Pop", "./Trashpaper/sounds/Pop.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "trashout" },
        this.whenIReceiveTrashout
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "computer" },
        this.whenIReceiveComputer
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveTrashout() {
    this.goto(-187, -97);
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.y += 10;
      yield;
    }
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
    this.broadcast("openletter");
    this.visible = false;
  }

  *whenIReceiveComputer() {
    this.visible = false;
  }
}
