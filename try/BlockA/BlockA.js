/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlockA extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Block-a", "./BlockA/costumes/Block-a.svg", {
        x: 27.4692,
        y: 37.13991000971066,
      }),
      new Costume("Block-b", "./BlockA/costumes/Block-b.svg", { x: 29, y: 42 }),
      new Costume("Block-c", "./BlockA/costumes/Block-c.svg", { x: 35, y: 43 }),
      new Costume("Block-d", "./BlockA/costumes/Block-d.svg", { x: 31, y: 41 }),
    ];

    this.sounds = [new Sound("meow", "./BlockA/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "computer" },
        this.whenIReceiveComputer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "labdesk" },
        this.whenIReceiveLabdesk
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "computer_information" },
        this.whenIReceiveComputerInformation
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveComputer() {
    this.stage.vars.firstdigit = 0;
    this.goto(-150, 36);
    this.costume = "Block-a";
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

  *whenIReceiveLabdesk() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.vars.firstdigit++;
    this.costumeNumber++;
  }

  *whenIReceiveComputerInformation() {
    this.visible = false;
  }
}
