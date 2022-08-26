import { Module } from "../core/module";

export class SoundModule extends Module {

	trigger() {
		const audio = new Audio;
		audio.src = 'https://zvukogram.com/index.php?r=site/download&id=43825';
		audio.play();
	}
}