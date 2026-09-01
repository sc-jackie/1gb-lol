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

1. **1988 SunDisk.** I did not exist yet. Type + rule only. No founder paragraph until a pack pastes one.
2. **SD format.** I am this size. Postage stamp. `memory-card-comparison.jpg` plus SD 32×24×2.1 mm vs CF Type I 43×36×3.3 mm. microSD is post-2004 millimetre context, not a 2004 product shot of CARD.
3. **27 Jan 2004.** I ship at $499.99. Spec table lives here (Capacity / SRP / date / 2.1 mm / 30 hours / 1,000 stills / five hours MPEG-4 from SanDisk press only) plus the existing 1.0GB mark photo. Sharp 3D-SiP (two 512MB dice in 2.1 mm) is 2004 press language, not a new partnership.
4. **Price crash.** Cousins got bigger. I stayed 1GB. Cited stamps only: CeBIT 2003 $329.99 projection (label as projection); SRP $499.99; week-of-ship around $389 unnamed shops; Engadget 29 Oct 2004 around $65. No curve. Do not invent a 2026 1GB street price as $0.02.
5. **Drawer, 2026.** I am still here. Ask: show the oldest card in your drawer. The six KEEP camera/slot photos. Equal-height cells. Captions 12px floor, credits on the same baseline.
6. **Token.** Not official. Fees to @SanDisk.

## Images

Paste only. Do not invent photographs. Do not replace the 1.0GB site mark.

Researchio KEEP pack (`public/photos/`):

- `canon-ixus-ii.jpg`
- `canon-sd200.jpg`
- `canon-ixus-40.jpg`
- `nikon-coolpix-3200.jpg`
- `panasonic-lumix-fz20.jpg`
- `panasonic-lumix-fz20-sd-slot.jpg`
- `memory-card-comparison.jpg`

MUST DROP from the live page: Canon Digital IXUS 430 / PowerShot S410 (CompactFlash Type I, not SD). Do not recaption it as SD. Drop `canon-a520` if it is not in this KEEP list.

Caption every KEEP photo: Photo: [author] / Wikimedia Commons / [license] / [File: URL]

## Out

- New mascot
- Partnership claim
- Discord
- Second marquee
- Catalog 3:1 banner
- NPD lore
- Invented prices or shot counts
- Recropping the 48px favicon

## Acceptance

- `DESIGN-CONTRACT.md` in the PR
- Page reads as six story chapters
- Hero asset ≤200KB, still the tighter 1.0GB vortex at 1500×500
- 48px 1.0GB crop still reads
- Footer load-bearing
- PR open, not merged
- Checks green if the repo has them

You are free to reach a better layout than a taller spec table, as long as the locks hold. Hypothesis (non-binding): keep the cream table as the book, put each chapter as a row with a fat year in Plex, spec sheet only under 2004.
