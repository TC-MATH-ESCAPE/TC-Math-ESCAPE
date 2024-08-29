/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Controller extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Catcher-b", "./Controller/costumes/Catcher-b.svg", {
        x: 41,
        y: 47,
      }),
    ];

    this.sounds = [new Sound("pop", "./Controller/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "labdesk" },
        this.whenIReceiveLabdesk
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(35, -104);
    this.visible = false;
  }

  *whenIReceiveLabdesk() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "sudoku";
  }

  *whenbackdropswitchesto() {
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

  *whenbackdropswitchesto2() {
    this.visible = false;
  }
}
