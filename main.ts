import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One entry: an everyday thing in one vivid analogy, plus an honest second line.
const ENTRY = [
  "Rain is like a cold spoon held over a steaming kettle: the steam cools into drops on the spoon until they are too heavy to cling, and then they fall off.",
  "The spoon shows how cooling makes vapor into drops that fall, but clouds have no spoon: their drops gather on dust, and their water came from oceans and rivers, not a kettle.",
].join("\n");

const OUTPUT = "/output/entry.txt";

// The gate accepts UTF-8 text of 1..400 characters that is not only whitespace.
if (!ENTRY.trim() || Buffer.byteLength(ENTRY, "utf8") > 400) {
  throw new Error("entry must be non-blank UTF-8 text of at most 400 characters");
}

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, ENTRY, "utf8");
