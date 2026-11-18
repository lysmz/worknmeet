const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const html = fs.readFileSync(path.join(__dirname, "../index.html"), "utf8");
const playlistId = "17XAuHesssymCa6FadSygb";
const section = html.match(/<article[^>]*id="playlist"[\s\S]*?<\/article>/)?.[0];

test("The team playlist is part of the single-page facts section", () => {
  const facts = html.match(/<section class="section facts"[\s\S]*?<\/section>/)?.[0];
  assert(section);
  assert(facts.includes(section));
  assert.match(section, /aria-labelledby="playlist-title"/);
  assert.match(section, /id="playlist-title"/);
});

test("Spotify is embedded with the requested playlist ID and a full player", () => {
  const iframe = section.match(/<iframe\b[^>]*>/)?.[0];
  assert(iframe);
  assert(iframe.includes(`src="https://open.spotify.com/embed/playlist/${playlistId}"`));
  assert.match(iframe, /title="Spotify/);
  assert.match(iframe, /height="352"/);
  assert.match(iframe, /width="100%"/);
  assert.match(iframe, /loading="lazy"/);
  assert.match(iframe, /encrypted-media/);
  assert(!iframe.includes("autoplay=1"));
});

test("The external fallback preserves the user's shared playlist link", () => {
  const link = section.match(/<a\b[^>]*id="spotifyPlaylistLink"[^>]*>/)?.[0];
  assert(link);
  const href = link.match(/href="([^"]+)"/)[1].replaceAll("&amp;", "&");
  assert.equal(href, `https://open.spotify.com/playlist/${playlistId}?utm_source=native-share-menu&pi=xEkPFGaZQyuQa&pt_success=1`);
  assert.match(link, /target="_blank"/);
  assert.match(link, /rel="noopener noreferrer"/);
});

test("Song contribution and missing collaborator access are explained", () => {
  assert.match(section, /Songs fügt ihr direkt in Spotify hinzu/);
  assert.match(section, /als Mitwirkende freigegeben/);
  assert.match(section, /aktuellen Einladungslink/);
  assert.match(section, /Verbindung zu Spotify/);
});
