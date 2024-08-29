/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Locker extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bell1", "./Locker/costumes/bell1.svg", { x: 59, y: 69 }),
    ];

    this.sounds = [
      new Sound("xylo1", "./Locker/sounds/xylo1.wav"),
      new Sound("bell toll", "./Locker/sounds/bell toll.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "labdesk" },
        this.whenIReceiveLabdesk
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "computer" },
        this.whenIReceiveComputer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "openletter" },
        this.whenIReceiveOpenletter
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "openbook" },
        this.whenIReceiveOpenbook
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "experiment" },
        this.whenIReceiveExperiment
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wakeup" },
        this.whenIReceiveWakeup
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.door = 0;
    this.visible = false;
  }

  *whenIReceiveLabdesk() {
    this.goto(-67, 22);
    while (true) {
      if (
        this.toNumber(this.stage.vars.door) === 0 &&
        this.stage.costume.name === "labdesk"
      ) {
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

  *whenIReceiveComputer() {
    this.visible = false;
  }

  *whenIReceiveOpenletter() {
    this.visible = false;
  }

  *whenIReceiveOpenbook() {
    this.visible = false;
  }

  *whenIReceiveExperiment() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.vars.door = 1;
    this.broadcast("experiment");
    this.visible = false;
  }

  *whenIReceiveWakeup() {
    this.visible = false;
  }
}
