let lastCapturedError;
const TTL_MS = 5e3;
function record(error) {
  lastCapturedError = { error, at: Date.now() };
}
if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record(event.error ?? event));
  globalThis.addEventListener(
    "unhandledrejection",
    (event) => record(event.reason)
  );
}
if (typeof process !== "undefined" && typeof process.on === "function") {
  process.on("uncaughtException", (err) => record(err));
  process.on("unhandledRejection", (reason) => record(reason));
}
const wrapConsole = (method) => {
  const original = console[method];
  console[method] = function(...args) {
    const errArg = args.find((a) => a instanceof Error);
    if (errArg) {
      record(errArg);
    } else {
      record(new Error(`Captured console.${method}: ` + args.map((a) => String(a)).join(" ")));
    }
    original.apply(console, args);
  };
};
wrapConsole("error");
wrapConsole("warn");
wrapConsole("log");
function consumeLastCapturedError() {
  if (!lastCapturedError) return void 0;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = void 0;
    return void 0;
  }
  const { error } = lastCapturedError;
  lastCapturedError = void 0;
  return error;
}
let serverEntryPromise;
async function getServerEntry() {
  if (!serverEntryPromise) {
    serverEntryPromise = import("./server-BZP1vbek.mjs").then(
      (m) => m.default ?? m
    );
  }
  return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;
  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }
  const actualError = consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`);
  console.error(actualError);
  return new Response(
    `<!doctype html><html><body><h1>Catastrophic SSR Error</h1><pre>${actualError?.stack || actualError?.message || String(actualError)}</pre></body></html>`,
    {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" }
    }
  );
}
const server = {
  async fetch(request, env, ctx) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(
        `<!doctype html><html><body><h1>Internal Server Error</h1><pre>${error?.stack || error?.message || String(error)}</pre></body></html>`,
        {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" }
        }
      );
    }
  }
};
export {
  server as default
};
