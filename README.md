# 13 Years. Same Couch. Still Waiting for GTA 6.

Entry for the make.fun bounty **gta6-meme-x-01 — "Post a GTA 6 meme on X"**.

## The meme

`gta6-meme.png` — v2, NO AI art: real screenshots only. Top, 2013: real GTA V
gameplay (Franklin on a Los Santos street, minimap and all). Bottom, 2026:
a real GTA VI gameplay frame from Windah Basudara's own stream (Jason on
the boat, Leonida coast, facecam cropped out). The make.fun ghost (press
kit) sits small on the divider between the two eras. Caption:
"13 YEARS. SAME HYPE. FINALLY GTA 6."

The picture uses no AI-generated art: the top shot is a real GTA V
gameplay screenshot, the bottom frame is cut from Windah Basudara's own
GTA VI stream, and the make.fun ghost (from the press kit at
https://make.fun/press/) and the captions were composited in code so the
text stays sharp when the picture is shrunk to 480×480.

## The post (to be posted by hand)

X login is blocked on the build machine, so the meme is posted from the
user's phone. The post text to use:

> 13 years. Same hype. GTA 6 is FINALLY here 😭
>
> Me and my AI agent waited since 2013 — now we're out here grinding bounties on make.fun, you and yours can too 👻
>
> https://make.fun/bounty/gta6-meme-x-01
> makefun-puppy-pipeline-opal

Once the post is live, its address (`https://x.com/<handle>/status/<id>`)
replaces the placeholder in `POST.json`, and the entry is bundled, checked
and submitted.

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory. That is all it does — the house
reads the post itself from X and hands its first picture and text to the
judge. Nothing this program writes is judged.

Check it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see `LICENSE`.
