import http from "node:http";
import { createReadStream } from "node:fs";

// Only serve the site files, never the repository or other local files.
const files = new Map([
  ["/", "index.html"],
  ["/index.html", "index.html"],
  ["/food-guide.js", "food-guide.js"],
  ["/assets/anreise/lageplan-augsburg.png", "assets/anreise/lageplan-augsburg.png"],
  ["/assets/anreise/parkplaetze-villa-1.png", "assets/anreise/parkplaetze-villa-1.png"],
  ["/assets/anreise/parkplaetze-satellit.png", "assets/anreise/parkplaetze-satellit.png"],
  ["/assets/anreise/parkplaetze-hanreibach.png", "assets/anreise/parkplaetze-hanreibach.png"]
]);

const contentTypes = {
  html: "text/html; charset=utf-8",
  js: "text/javascript; charset=utf-8",
  png: "image/png"
};

const server = http.createServer((request, response) => {
  const file = files.get(new URL(request.url, "http://127.0.0.1").pathname);
  if (!file) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  const stream = createReadStream(new URL(file, import.meta.url));
  stream.on("error", () => {
    if (!response.headersSent) response.writeHead(500);
    response.end("Site file unavailable");
  });
  response.setHeader("Content-Type", contentTypes[file.split(".").at(-1)]);
  response.setHeader("Cache-Control", "no-store");
  stream.pipe(response);
});

server.on("error", (error) => {
  console.error(error.code === "EADDRINUSE" ? "Port 4173 ist belegt. Bitte den bisherigen Vorschau-Server beenden." : error.message);
  process.exitCode = 1;
});
server.listen(4173, "127.0.0.1", () => console.log("Vorschau: http://127.0.0.1:4173/#essen\nBeenden mit Strg+C."));
process.on("SIGINT", () => server.close(() => process.exit(0)));
process.on("SIGTERM", () => server.close(() => process.exit(0)));
