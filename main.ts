import { App, Plugin } from 'obsidian';

export default class GarbleText extends Plugin {
	private isGarbled: boolean = false;

	async onload() {
		console.log('loading Garble Text plugin');

		this.addCommand({
			id: "toggle-garble-text",
			name: "Toggle Garble Text",
			callback: () => {
				if (this.isGarbled) this.ungarble();
				else this.garble();

				this.isGarbled = !this.isGarbled;
			}
		});

		//TODO: garble with regex
	}

	onunload() {
		this.isGarbled = false;
		this.ungarble();
		console.log('Garble Text unloaded');
	}

	garble() {
		this.app.garbleText();
	}

	ungarble() {
		this.app.dom.appContainerEl.removeClass('is-text-garbled');
	}
}
