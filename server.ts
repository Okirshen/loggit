import { Context, Middleware } from 'https://deno.land/x/oak/mod.ts';

export const loggit: Middleware = async (ctx: Context, next) => {
	await next();
	console.log(
		`${ctx.request.method} - ${ctx.response.status}: ${ctx.request.url}`
	);
};
