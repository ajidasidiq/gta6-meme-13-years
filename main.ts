// Entry for make.fun bounty gta6-meme-x-01 ("Post a GTA 6 meme on X").
//
// The entry itself is an X post: one original GTA 6 meme picture posted from a
// public account, with make.fun and the entrant's play code in the post text.
// This program's only job is to hand the post's address to the grader: it
// reads POST.json out of the repository and writes the same bytes to the
// output directory, where the house picks it up and reads the post from X.
//
// Before writing, it sanity-checks POST.json: the url must be a real
// https://x.com/<handle>/status/<digits> address. A bad or placeholder url
// fails loudly instead of silently shipping a broken entry.
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

// An X post address: https://x.com/<handle>/status/<numeric id>.
// Handles are 1-15 word characters, the id is digits only.
const X_POST_URL = /^https:\/\/x\.com\/\w{1,15}\/status\/\d+$/;

const postPath = join(botDir, "POST.json");
// Keep the raw bytes so the copy is byte-for-byte even if POST.json ever
// carries non-ASCII text; validation only needs the decoded string.
const post = readFileSync(postPath);

let url: unknown;
try {
  url = (JSON.parse(post.toString("utf8")) as { url?: unknown }).url;
} catch {
  url = undefined;
}

if (typeof url !== "string" || !X_POST_URL.test(url)) {
  console.error(
    `error: ${postPath} must contain a "url" like ` +
      `https://x.com/<handle>/status/<id>, got: ${JSON.stringify(url)}`,
  );
  process.exit(1);
}

// Only reached once the url is known good: create the output directory
// (recursively, in case it does not exist yet) and copy POST.json verbatim.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "POST.json"), post);
