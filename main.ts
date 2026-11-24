// The Funniest Toaster Error Message — make.fun entry
// u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
//
// One line, 64 characters, written to /output/entry.txt.
// The line reads like a real message on a real appliance: it opens with a
// genuine error ("Bread jammed"), then the joke arrives from somewhere the
// obvious toaster puns never go — the toaster escalates the problem up the
// chain of command, and the chain of command turns out to be bread too.
// Deadpan throughout, one voice, lands on a single read.
//
// The program enforces the gate itself before writing: 1–120 characters,
// UTF-8, not only whitespace, single line. If the entry ever stopped
// passing, it fails loudly instead of writing a dead entry.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Bread jammed. Escalated to management. Management is also bread.";

const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 120) {
  throw new Error(`entry is ${chars.length} characters, gate needs 1-120`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
