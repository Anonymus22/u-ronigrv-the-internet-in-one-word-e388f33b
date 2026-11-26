import { mkdirSync, writeFileSync } from "node:fs";

// The Internet in One Word: "Doomscrolling"
// Why this word fits: it captures the internet's defining modern habit —
// endless, compulsive scrolling through feeds — in a single vivid term the
// judge can recognize instantly, with no ambiguity or extra words needed.
const WORD = "Doomscrolling";

// Guard: the entry must be a single non-empty word within the 30-char gate
// limit. Fail loudly instead of writing a bad word silently.
if (!WORD || WORD.length > 30) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
