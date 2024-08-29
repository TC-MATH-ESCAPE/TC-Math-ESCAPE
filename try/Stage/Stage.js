/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("wakeup", "./Stage/costumes/wakeup.svg", {
        x: 244.29818678261034,
        y: 177.53602815700523,
      }),
      new Costume("labdesk", "./Stage/costumes/labdesk.svg", {
        x: 241.32388378110522,
        y: 202.90751252327337,
      }),
      new Costume("experiment", "./Stage/costumes/experiment.svg", {
        x: 287.8999938964844,
        y: 223.92536192512148,
      }),
      new Costume("letter", "./Stage/costumes/letter.svg", {
        x: 169.89999389648438,
        y: 115.34456308296686,
      }),
      new Costume("computer", "./Stage/costumes/computer.svg", {
        x: 229.89309206172746,
        y: 145.3929975252017,
      }),
      new Costume(
        "computer_information",
        "./Stage/costumes/computer_information.svg",
        { x: 199.31661609524758, y: 163.70001220703125 }
      ),
      new Costume("computer_content", "./Stage/costumes/computer_content.svg", {
        x: 270.8999938964844,
        y: 177.10000610351562,
      }),
      new Costume("brainpage", "./Stage/costumes/brainpage.svg", {
        x: 310.8999938964844,
        y: 185.10000610351562,
      }),
      new Costume("bookcontent", "./Stage/costumes/bookcontent.svg", {
        x: 201.24229200389976,
        y: 152.5978863266551,
      }),
      new Costume("locker", "./Stage/costumes/locker.svg", {
        x: 233.37036364316234,
        y: 190.60278927169594,
      }),
      new Costume("sudoku", "./Stage/costumes/sudoku.svg", {
        x: 198.39999389648438,
        y: 150.88510009128794,
      }),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "labdesk" },
        this.whenIReceiveLabdesk
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "openletter" },
        this.whenIReceiveOpenletter
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "computer" },
        this.whenIReceiveComputer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "computer_information" },
        this.whenIReceiveComputerInformation
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "brainpage" },
        this.whenIReceiveBrainpage
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "computer_content" },
        this.whenIReceiveComputerContent
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "openbook" },
        this.whenIReceiveOpenbook
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "locker" },
        this.whenIReceiveLocker
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "experiment" },
        this.whenIReceiveExperiment
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sudoku" },
        this.whenIReceiveSudoku
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wakeup" },
        this.whenIReceiveWakeup
      ),
    ];

    this.vars.firstdigit = 3;
    this.vars.seconddigit = 2;
    this.vars.thirddigit = 1;
    this.vars.fourthdigit = 0;
    this.vars.start2 = 0;
    this.vars.door = 0;
    this.vars.bag = 6;
    this.vars.handcuff1 = 8;
    this.vars.handcuff2 = 3;

    this.watchers.handcuff1 = new Watcher({
      label: "handcuff1",
      style: "normal",
      visible: true,
      value: () => this.vars.handcuff1,
      x: 245,
      y: 175,
    });
    this.watchers.handcuff2 = new Watcher({
      label: "handcuff2",
      style: "normal",
      visible: true,
      value: () => this.vars.handcuff2,
      x: 245,
      y: 149,
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "wakeup";
  }

  *whenIReceiveLabdesk() {
    this.costume = "labdesk";
  }

  *whenIReceiveOpenletter() {
    this.costume = "letter";
  }

  *whenIReceiveComputer() {
    this.costume = "computer";
  }

  *whenIReceiveComputerInformation() {
    this.costume = "computer_information";
  }

  *whenIReceiveBrainpage() {
    this.costume = "brainpage";
  }

  *whenIReceiveComputerContent() {
    this.costume = "computer_content";
  }

  *whenIReceiveOpenbook() {
    this.costume = "bookcontent";
  }

  *whenIReceiveLocker() {
    this.costume = "locker";
  }

  *whenIReceiveExperiment() {}

  *whenIReceiveSudoku() {
    this.costume = "sudoku";
  }

  *whenIReceiveWakeup() {
    this.costume = "wakeup";
  }
}
