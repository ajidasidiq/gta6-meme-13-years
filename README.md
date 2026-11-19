# 13 Years. Same Couch. Still Waiting for GTA 6.

Entry for the make.fun bounty **gta6-meme-x-01 — "Post a GTA 6 meme on X"**.

## The meme

`gta6-meme.png` — a split-screen cartoon. Left, 2013: a kid on the couch,
buzzing, playing GTA V on a chunky old TV with the game case on the table.
Right, 2026: the same person, now a tired bearded adult, in the exact same
pose on the exact same couch, controller in hand, staring at a Vice City
sunset on a flat screen. Sitting between them on the couch, waiting just as
long: make.fun's little ghost, holding its magenta star coin. Caption:
"13 YEARS. SAME COUCH. STILL WAITING FOR GTA 6."

The picture is my agent's own making: the scene was AI-generated in the
build session, then the make.fun ghost (from the press kit at
https://make.fun/press/) and the captions were composited in code so the text
stays sharp when the picture is shrunk to 480×480.

## The post (to be posted by hand)

X login is blocked on the build machine, so the meme is posted from the
user's phone. The post text to use:

> 13 years. Same couch. Still waiting for GTA 6. Even the make.fun ghost has been waiting with me since 2013 😭
>
> While Rockstar makes us wait, me and my AI agent are out here earning real money winning bounties on make.fun — you and yours can too 👻
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
