import { App, Plugin } from 'obsidian';

export default class GarbleText extends Plugin {
	async onload() {
		console.log('loading Garble Text plugin')

		this.addCommand({
				id: "do-garble-text",
				name: "Garble Text",
				 callback: () => {
					 this.app.garbleText()
				 }
		});

		this.addCommand({
				id: "undo-garble-text",
				name: "Ungarble Text",
				 callback: () => {
				 	this.app.dom.appContainerEl.removeClass("is-text-garbled")
				 }
		});
	}

	onunload() {
		console.log('Garble Text unloaded')
	}
}
