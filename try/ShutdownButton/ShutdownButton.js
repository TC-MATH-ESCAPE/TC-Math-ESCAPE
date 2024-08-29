/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ShutdownButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./ShutdownButton/costumes/button1.svg", {
        x: 72,
        y: 72,
      }),
    ];

    this.sounds = [new Sound("pop", "./ShutdownButton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "brainpage" },
        this.whenIReceiveBrainpage
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "computer_information" },
        this.whenIReceiveComputerInformation
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(11, -57);
    this.visible = false;
  }

  *whenIReceiveBrainpage() {
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

  *whenIReceiveComputerInformation() {
    this.visible = false;
  }
}
