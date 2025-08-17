import GsuConfig from "../gsu.config";

export function IsValidUsername(username) {
	// ^(?![0-9])   → 不能以数字开头
	// [A-Za-z0-9_-]{3,15}$ → 只允许大小写字母/数字/-/_，长度 3-15
	const regex = /^(?![0-9])[A-Za-z0-9_-]{3,15}$/;
	return regex.test(username) && !GsuConfig.usernameBlacklist.includes(username.toLowerCase());
}
