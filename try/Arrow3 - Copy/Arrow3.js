/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arrow3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Arrow1-d", "./Arrow3/costumes/Arrow1-d.svg", {
        x: 23,
        y: 28,
      }),
    ];

    this.sounds = [new Sound("pop", "./Arrow3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wakeup" },
        this.whenIReceiveWakeup
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.size = 100;
        if (this.mouse.down) {
          this.broadcast("labdesk");
          this.visible = false;
        }
      } else {
        this.size = 80;
      }
      yield;
    }
  }

  *whenIReceiveWakeup() {}
}
