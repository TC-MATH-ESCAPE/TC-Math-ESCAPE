/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Handcuff2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Handcuff2/costumes/costume1.svg", {
        x: 317.8999938964844,
        y: 213.10000610351562,
      }),
      new Costume("costume2", "./Handcuff2/costumes/costume2.svg", {
        x: 317.8999938964844,
        y: 213.10000610351562,
      }),
      new Costume("costume3", "./Handcuff2/costumes/costume3.svg", {
        x: 317.8999938964844,
        y: 213.10000610351562,
      }),
      new Costume("costume4", "./Handcuff2/costumes/costume4.svg", {
        x: 317.8999938964844,
        y: 213.10000610351562,
      }),
    ];

    this.sounds = [new Sound("pop", "./Handcuff2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenthisspriteclicked() {
    this.costumeNumber++;
    this.stage.vars.handcuff2++;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.handcuff2 = 0;
    this.costume = "costume1";
    this.goto(100, -50);
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
      if (
        this.toNumber(this.stage.vars.handcuff1) % 4 === 0 &&
        this.toNumber(this.stage.vars.handcuff2) % 4 === 3
      ) {
        yield* this.playSoundUntilDone("pop");
        this.visible = false;
        return;
      } else {
        this.visible = true;
      }
      yield;
    }
  }
}
