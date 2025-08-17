import { LitElement, html } from "lit";
import { CircleUserRound, createElement } from "lucide";
import { IsValidUsername } from "../../utils/Auth";

export class AuthRegisterUsernameInput extends LitElement {
	static properties = {
		placeholder: { type: String },
		_username: { type: String },
		_validateResult: { type: Boolean },
		_requirementsSatisfied: { type: Array },
	};

	constructor() {
		super();
		this._username = "";
		this._validateResult = false;
		this._requirementsSatisfied = [];
	}

	createRenderRoot() {
		return this;
	}

	_handleChangedEvent(e) {
		let v = e.currentTarget.value;
		let vf = v.replace(/[^a-zA-Z0-9-_]/g, "");
		e.currentTarget.value = vf;

		this._username = vf;
		this._validateResult = IsValidUsername(vf);
	}

	render() {
		return html`
			<div
				class="relative rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition">
				<input
					type="text"
					id="username"
					placeholder=${this.placeholder}
					style="ime-mode: disabled"
					maxlength="15"
					@input=${this._handleChangedEvent}
					class="w-full transition-all duration-150 ease-in-out px-3 pl-10 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder-zinc-400 dark:placeholder-zinc-500" />
				<div class="absolute top-0 left-0 w-10 h-full flex items-center justify-center">
					${createElement(CircleUserRound, {
						class: ["h-5 w-5 ml-1 text-zinc-400 dark:text-zinc-500"],
						"stroke-width": 2,
						stroke: "currentColor",
					})}
				</div>
				<div class="absolute top-0 right-0 w-10 h-full flex items-center justify-center">
					${this._username !== ""
						? !this._validateResult
							? html`
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5 ml-1 text-red-600 dark:text-red-400"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										fill="currentColor">
										<path
											d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
									</svg>
								`
							: html`
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5 ml-1 text-teal-600 dark:text-teal-400"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										fill="currentColor">
										<path
											d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
									</svg>
								`
						: null}
				</div>
			</div>
		`;
	}
}
