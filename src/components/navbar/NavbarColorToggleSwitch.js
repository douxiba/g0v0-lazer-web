import { LitElement, html } from "lit";
import { Sun, Moon, createElement } from "lucide";

export class NavbarColorToggleSwitch extends LitElement {
	static properties = {
		isDarkMode: false,
		class: "",
	};

	createRenderRoot() {
		return this;
	}

	_switchColorMode(e) {
		this.isDarkMode = !this.isDarkMode;
		if (this.isDarkMode) document.querySelector("html").classList.add("dark");
		else document.querySelector("html").classList.remove("dark");
	}

	render() {
		return html`<div
			class="h-6 w-10.5 px-0.25 rounded-full transition-all duration-100 ease-in-out bg-zinc-200 dark:bg-zinc-700/75 border-solid border-1 border-zinc-400 dark:border-zinc-600 group hover:border-primary-600 hover:bg-primary-900/20 flex items-center ${this
				.class} ${this.isDarkMode ? "pl-4.75" : ""}"
			@click="${this._switchColorMode}">
			<div
				class="h-5 w-5 rounded-full text-zinc-800 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-950 shadow-sm border-solid border-1 border-zinc-300 dark:border-zinc-900 transition-all duration-100 ease-in-out group-hover:text-white group-hover:bg-primary-600 group-hover:border-primary-400/50 flex items-center justify-center shrink-0">
				${createElement(this.isDarkMode ? Moon : Sun, {
					class: ["h-3.5 w-3.5"],
					"stroke-width": 2,
					stroke: "currentColor",
				})}
			</div>
		</div>`;
	}
}
