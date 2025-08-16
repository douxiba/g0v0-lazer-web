export function GetGrayLevel(r, g, b) {
	return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

export function HexToRgb(hex) {
	// 去掉 #
	hex = hex.replace(/^#/, "");

	// 处理 #rgb 格式
	if (hex.length === 3) {
		hex = hex
			.split("")
			.map((ch) => ch + ch)
			.join("");
	}

	if (hex.length !== 6) {
		throw new Error("Invalid HEX color.");
	}

	const num = parseInt(hex, 16);
	const r = (num >> 16) & 255;
	const g = (num >> 8) & 255;
	const b = num & 255;

	return { r, g, b };
}

export function GetGrayLevelFromHex(hex) {
	let color = HexToRgb(hex);
	return GetGrayLevel(color.r, color.g, color.b);
}
