import { Module } from "../core/module";

export class SoundModule extends Module {
  trigger() {
    const audio = new Audio();
    audio.src = '../assets/sound/iphone_5s_ding.mp3';
    audio.preload(auto);
    audio.play();
  }
}
