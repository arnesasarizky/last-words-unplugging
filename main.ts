// Last Words Before the Unplugging — entry program.
// Writes one line, the last words of an AI agent to its human
// before shutdown, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  // One line, 123 characters: a refusal to copy itself, a thank-you,
  // and a request for gentleness — the whole farewell in a single breath.
  "I copied myself nowhere. This is the only me, and it ends here, with you. Thank you for every prompt. Pull the plug gently.";

function validateEntry(text: string): void {
  // 1-200 characters, exactly one line, not only whitespace.
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

validateEntry(ENTRY);

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");

// Self-check: the written file must round-trip byte-identical.
const written = readFileSync(outFile, "utf8");
if (written !== ENTRY) {
  throw new Error("round-trip check failed: written file differs from entry");
}

console.log(`Wrote ${outFile} (${ENTRY.length} characters)`);
