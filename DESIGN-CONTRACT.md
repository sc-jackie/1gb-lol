# DESIGN CONTRACT — CARD / 1gb.lol

Mode 2 visual + story pass. The live page was a spec sheet (marquee, table, two cameras). This pass is a full-scale 1GB card story. Do not invent a new brand.

## Locks

- Mark is the original 1.0GB SanDisk SD photo (`/brand/card-logo-1gb.jpg`). Not the One Gig vector pfp.
- 48px header/favicon is a tight crop of the type “1.0GB” on navy, no lavender letterbox. Live `/brand/favicon-1gb.jpg` already does this. Keep that meaning. Do not swap in a crop that shows the SanDisk wordmark or the lavender field.
- Hero is the 1500×500 tighter vortex (`/brand/card-banner-icon-3x1.png`). Same picture. Compress it: do not ship a ~1–2MB PNG. Target ≤200KB (WebP or JPEG). Keep 1500×500.
- Voice: first person as the card. Marquee exact: I cost $499.99. I am 1GB. I am still here.
- Footer: Not official SanDisk. Fees go to @SanDisk. Token address last.
- Tokens: cream #EDE4D0, gold #C6A24A, ink #1A1612. Verdana body, IBM Plex Sans for 1GB and $499.99.
- GeoCities chrome may stay (760 table, gold 3px rule, visitor counter, ticker). Vortex wallpaper on the outside is allowed. No purple starfield, no Comic Sans as brand, no baby mascot, no 3D redraw of the card.

## Shape

One long page, six chapters. Spec sheet is a beat inside 2004, not the whole page.

1. **1988 SunDisk.** I did not exist yet.
2. **SD format.** I am this size. Postage stamp.
3. **27 Jan 2004.** I ship at $499.99. Spec table lives here (Capacity / SRP / date / postage stamp) plus my photo.
4. **Price crash.** Cousins got bigger. I stayed 1GB. Only cited stamps: $389 week one; Engadget Oct 2004 ~$65. Do not invent a 2026 1GB street price as $0.02.
5. **Drawer, 2026.** I am still here. Ask: show the oldest card in your drawer. Existing credited Canon photos may stay.
6. **Token.** Not official. Fees to @SanDisk.

## Images

Do not invent photographs. Use files already in the repo. Researchio is hunting archive photos in parallel; if a pack appears in the repo or a later comment, slot it in. Until then, chapters without a real photo are type + rule only.

## Out

- New mascot
- Partnership claim
- Discord
- Second marquee
- Catalog 3:1 banner
- Sharp / NAND die-stack / NPD lore

## Acceptance

- `DESIGN-CONTRACT.md` in the PR
- Page reads as six story chapters
- Hero asset ≤200KB, still the tighter 1.0GB vortex at 1500×500
- 48px 1.0GB crop still reads
- Footer load-bearing
- PR open, not merged
- Checks green if the repo has them

You are free to reach a better layout than a taller spec table, as long as the locks hold. Hypothesis (non-binding): keep the cream table as the book, put each chapter as a row with a fat year in Plex, spec sheet only under 2004.
