import { NavbarColorToggleSwitch } from "./navbar/NavbarColorToggleSwitch";
import { AuthRegisterUsernameInput } from "./auth/AuthRegisterUsernameInput";

export function initLitElements() {
	customElements.define("g0v0-navbar-color-switch", NavbarColorToggleSwitch);
	customElements.define("g0v0-auth-register-uninput", AuthRegisterUsernameInput);
}
