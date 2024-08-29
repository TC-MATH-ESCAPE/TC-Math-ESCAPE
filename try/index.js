import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Needle from "./Needle/Needle.js";
import Needle2 from "./Needle2/Needle2.js";
import Trashcan from "./Trashcan/Trashcan.js";
import Laptop from "./Laptop/Laptop.js";
import BlockA from "./BlockA/BlockA.js";
import BlockA2 from "./BlockA2/BlockA2.js";
import BlockA3 from "./BlockA3/BlockA3.js";
import BlockA4 from "./BlockA4/BlockA4.js";
import PasswordEnter from "./PasswordEnter/PasswordEnter.js";
import Folder from "./Folder/Folder.js";
import Shutdown from "./Shutdown/Shutdown.js";
import BlockX2 from "./BlockX2/BlockX2.js";
import ShutdownButton from "./ShutdownButton/ShutdownButton.js";
import Book from "./Book/Book.js";
import Locker from "./Locker/Locker.js";
import Lockerbehindbook from "./Lockerbehindbook/Lockerbehindbook.js";
import Controller from "./Controller/Controller.js";
import Arrow1 from "./Arrow1/Arrow1.js";
import Arrow2 from "./Arrow2/Arrow2.js";
import Arrow3 from "./Arrow3/Arrow3.js";
import BlockX3 from "./BlockX3/BlockX3.js";
import Arrow4 from "./Arrow4/Arrow4.js";
import Arrow5 from "./Arrow5/Arrow5.js";
import Trashpaper from "./Trashpaper/Trashpaper.js";
import BlockX from "./BlockX/BlockX.js";
import Bag from "./Bag/Bag.js";
import Button2 from "./Button2/Button2.js";
import Handcuff1 from "./Handcuff1/Handcuff1.js";
import Handcuff2 from "./Handcuff2/Handcuff2.js";

const stage = new Stage({ 
  costumeNumber: 2,
  width:1450,
  height:700 });

const sprites = {
  Needle: new Needle({
    x: 28,
    y: 140,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 80,
    visible: false,
    layerOrder: 28,
  }),
  Needle2: new Needle2({
    x: 200,
    y: 140,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 80,
    visible: false,
    layerOrder: 27,
  }),
  Trashcan: new Trashcan({
    x: -193,
    y: -57,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 15,
  }),
  Laptop: new Laptop({
    x: 59,
    y: 31,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 3,
  }),
  BlockA: new BlockA({
    x: -150,
    y: 36,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 80,
    visible: false,
    layerOrder: 4,
  }),
  BlockA2: new BlockA2({
    x: -23,
    y: 36,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 80,
    visible: false,
    layerOrder: 5,
  }),
  BlockA3: new BlockA3({
    x: 105,
    y: 36,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 80,
    visible: false,
    layerOrder: 25,
  }),
  BlockA4: new BlockA4({
    x: 183,
    y: 36,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 6,
  }),
  PasswordEnter: new PasswordEnter({
    x: 11,
    y: -57,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 29,
  }),
  Folder: new Folder({
    x: -141,
    y: 89,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 7,
  }),
  Shutdown: new Shutdown({
    x: -141,
    y: 26,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 8,
  }),
  BlockX2: new BlockX2({
    x: 187,
    y: 120,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 2,
  }),
  ShutdownButton: new ShutdownButton({
    x: 11,
    y: -57,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 9,
  }),
  Book: new Book({
    x: 35,
    y: 79,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 11,
  }),
  Locker: new Locker({
    x: -67,
    y: 22,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 17,
  }),
  Lockerbehindbook: new Lockerbehindbook({
    x: 30,
    y: 90,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 10,
  }),
  Controller: new Controller({
    x: 35,
    y: -104,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 12,
  }),
  Arrow1: new Arrow1({
    x: -96,
    y: -139,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 18,
  }),
  Arrow2: new Arrow2({
    x: -120,
    y: -120,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 19,
  }),
  Arrow3: new Arrow3({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 14,
  }),
  BlockX3: new BlockX3({
    x: 186,
    y: 132,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 16,
  }),
  Arrow4: new Arrow4({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 13,
  }),
  Arrow5: new Arrow5({
    x: -67,
    y: 22,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 20,
  }),
  Trashpaper: new Trashpaper({
    x: -187,
    y: 3,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 1,
  }),
  BlockX: new BlockX({
    x: 186,
    y: 132,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 21,
  }),
  Bag: new Bag({
    x: -207,
    y: 83,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 23,
  }),
  Button2: new Button2({
    x: -101,
    y: 122,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22,
  }),
  Handcuff1: new Handcuff1({
    x: -100,
    y: -50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 80,
    visible: false,
    layerOrder: 24,
  }),
  Handcuff2: new Handcuff2({
    x: 100,
    y: -50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 26,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
