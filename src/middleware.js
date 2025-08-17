export function onRequest(context, next) {
	// 获取语言
	const acceptLang = context.request.headers.get("Accept-Language") || "en-US";
	const browserLang = acceptLang.split(",")[0];
	const queryLang = context.url.searchParams.get("lang");
	const lang = queryLang || browserLang || "en-US";

	context.locals.lang = lang;
	return next();
}
