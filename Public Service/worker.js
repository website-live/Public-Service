export default {
  async fetch(request, env) {
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) return assetResponse;

    const method = request.method.toUpperCase();
    const acceptsHtml = request.headers.get("accept")?.includes("text/html");
    if ((method === "GET" || method === "HEAD") && acceptsHtml) {
      return env.ASSETS.fetch(new URL("/index.html", request.url));
    }

    return assetResponse;
  },
};
