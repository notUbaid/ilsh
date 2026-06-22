// Captures the original Error out-of-band so server.ts can recover the stack
// when h3 has already swallowed the throw into a generic 500 Response.

let lastCapturedError: { error: unknown; at: number } | undefined;
const TTL_MS = 5_000;

function record(error: unknown) {
  lastCapturedError = { error, at: Date.now() };
}

if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record((event as ErrorEvent).error ?? event));
  globalThis.addEventListener("unhandledrejection", (event) =>
    record((event as PromiseRejectionEvent).reason),
  );
}

const originalConsoleError = console.error;
console.error = function (...args) {
  const errArg = args.find((a) => a instanceof Error);
  if (errArg) {
    record(errArg);
  } else {
    // If h3 logs a string, capture it as an error
    record(new Error("Captured console.error: " + args.map((a) => String(a)).join(" ")));
  }
  originalConsoleError.apply(console, args);
};

export function consumeLastCapturedError(): unknown {
  if (!lastCapturedError) return undefined;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = undefined;
    return undefined;
  }
  const { error } = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}
