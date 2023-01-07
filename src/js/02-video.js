
import Player from "@vimeo/player";

import { save, load } from "./storage.js";
const _ = require("lodash");

const iframe = document.querySelector("#vimeo-player");
const key = "videoplayer-current-time";

const player = new Player(iframe);

let second = load(key);

window.addEventListener("load", () => {
  if (second != null) {
    player.setCurrentTime(second);
    console.log(second);
  }
});

player.on(
  "timeupdate",
  _.throttle((e) => {
    save(key, e.seconds);
  }),
  1000
);
