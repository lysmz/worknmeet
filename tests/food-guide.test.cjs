const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "../food-guide.js"), "utf8");
const html = fs.readFileSync(path.join(__dirname, "../index.html"), "utf8");
const records = new Function("return " + source.match(/const restaurants = (\[[\s\S]*?\n  \]);/)[1])();

test("All eleven colleague-recommended restaurants and both bars are present", () => {
  assert.deepEqual(records.map(record => record.id).sort(), ["nuno", "azsteakas", "blockhouse", "joes", "n8", "kaelberhalle", "bodega", "mille", "enchilada", "coco", "ratskeller", "golden", "3m"].sort());
  assert.equal(new Set(records.map(record => record.id)).size, 13);
});

test("Filters contain seven lunch options, ten dinner options and two bars", () => {
  for (const [category, expected] of [["lunch", 7], ["dinner", 10], ["bar", 2]]) {
    assert.equal(records.filter(record => record.categories.includes(category)).length, expected);
  }
});

test("Every detail has a local address, factual highlights and HTTPS source links", () => {
  for (const record of records) {
    assert(record.address.includes("Augsburg"));
    assert(record.description && record.hours && record.note);
    assert(record.highlights.length >= 2);
    assert.equal(new URL(record.website).protocol, "https:");
    assert.equal(new URL(record.menu).protocol, "https:");
    if (record.photo) assert.equal(new URL(record.photo).protocol, "https:");
  }
});

test("The two agreed photo placeholders are explicit, not made-up venue photos", () => {
  assert.deepEqual(records.filter(record => !record.photo).map(record => record.id), ["enchilada", "golden"]);
  for (const record of records.filter(record => !record.photo)) assert(record.photoType.includes("folgt"));
});

test("The shared details panel, filters and navigation are wired into the page", () => {
  assert.match(html, /href="#essen"/);
  assert.match(html, /<script src="\.\/food-guide\.js" defer><\/script>/);
  assert.match(html, /id="foodDetails"[^>]*aria-labelledby="foodDetailTitle"[^>]*hidden/);
  assert.equal((html.match(/data-food-filter=/g) || []).length, 4);
  const section = html.match(/<section class="section food-guide"[\s\S]*?<\/section>/)[0];
  const stack = [];
  for (const match of section.matchAll(/<(\/?)([a-z][a-z0-9]*)\b[^>]*>/gi)) {
    if (match[1]) assert.equal(stack.pop(), match[2]);
    else if (match[2] !== "br") stack.push(match[2]);
  }
  assert.equal(stack.length, 0);
});

test("New and existing JavaScript still parse", () => {
  assert.doesNotThrow(() => new Function(source));
  for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) {
    assert.doesNotThrow(() => new Function(script[1]));
  }
});
