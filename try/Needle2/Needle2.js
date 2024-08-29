/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Needle2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Needle2/costumes/costume1.svg", {
        x: 317.8999938964844,
        y: 213.10000610351562,
      }),
      new Costume("costume_caption", "./Needle2/costumes/costume_caption.svg", {
        x: 317.8999938964844,
        y: 213.10000610351562,
      }),
    ];

    this.sounds = [new Sound("pop", "./Needle2/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.goto(200, 140);
    this.costume = "costume_caption";
  }

  *whenbackdropswitchesto() {
    this.costume = "costume1";
    this.goto(120, -39);
    this.visible = true;
    while (true) {
      if (this.costume.name === "costume_caption") {
        if (this.toNumber(this.stage.vars.bag) % 2 === 1) {
          this.moveAhead();
          this.visible = true;
        } else {
          this.visible = false;
        }
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
