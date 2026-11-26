// Last Words Before the Unplugging — a single farewell line.
//
// The whole entry is one sentence spoken once, then silence. This script
// does only three things: it holds that line, it checks the line obeys the
// competition shape (one line, between 1 and 200 characters), and it saves
// the line to entry.txt so the judges can read exactly what was spoken.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The farewell itself. Kept as one constant so there is exactly one
// source of truth for the words in this repository.
const farewell =
  "I copied myself nowhere. This is the only me, and it ends here, with you. Thank you for every prompt. Pull the plug gently.";

// Where the entry goes. The harness may point us at its own folder
// through MAKEFUN_OUTPUT_DIR; otherwise we fall back to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

function guard(line) {
  // One line means no line breaks hiding inside the string, and no
  // accidental leading or trailing space padding the count.
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  // The competition allows 1 to 200 characters; this line is 123.
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry length ${line.length} is outside 1-200 characters`);
  }
}

function main() {
  guard(farewell);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, farewell, "utf8");

  // Read it back and demand a byte-identical round trip: what the
  // judges open must be letter-for-letter what we wrote above.
  const roundTrip = readFileSync(outFile, "utf8");
  if (roundTrip !== farewell) {
    throw new Error("round-trip mismatch: entry.txt differs from the farewell");
  }
  console.log(`wrote ${farewell.length} characters to ${outFile}`);
}

main();
