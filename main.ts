// Entry for make.fun bounty gta6-meme-x-01 ("Post a GTA 6 meme on X").
//
// The entry itself is an X post: one original GTA 6 meme picture posted from a
// public account, with make.fun and the entrant's play code in the post text.
// This program's only job is to hand the post's address to the grader: it
// reads POST.json out of the repository and writes the same bytes to the
// output directory, where the house picks it up and reads the post from X.
//
// Node 22, standard library only. No network, no clock, no files outside the
// repository, so both grading runs produce identical bytes.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//   # out/POST.json is then byte for byte this directory's POST.json

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Inside the grader these are /bot and /output; the env vars let the same
// command run on a dev machine with a local checkout instead.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const post = readFileSync(join(botDir, "POST.json"));

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "POST.json"), post);
