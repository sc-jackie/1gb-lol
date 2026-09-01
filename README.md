# CARD — 1gb.lol

Unofficial fan site for **CARD**, the original production 1GB SanDisk SD card. I shipped 27 January 2004. Suggested retail: **$499.99**. Domain: [1gb.lol](https://1gb.lol).

First-person voice. The joke is the price. This is not SanDisk. There is no partnership.

## Run locally

```bash
npm install
npm run dev
```

Dev server defaults to port **43127**. Open the URL printed in the terminal.

Production (`npm start`) binds **0.0.0.0** and **`PORT`** (falls back to 43127). Public health: `GET /health`.

## Railway

Ship this Origin repo. **Do not invent a GitHub mirror.**

New Railway project (EVE-435, Cursorio). Not tan-property-group / warsaw-homes / japan-honeymoon. Attach **1gb.lol** and **www.1gb.lol** on that project.

- `railway.toml` — Nixpacks build, `npm start`, health `/health`
- `nixpacks.toml` — Node 22
- `.railway/railway.ts` — same service settings, **no GitHub source** (CLI / tarball)

```bash
npm ci
npm run build
PORT=43127 npm start
curl -fsS http://127.0.0.1:43127/health
```

## What is on the page

One long page, six chapters. See `DESIGN-CONTRACT.md`.

1. **1988 SunDisk** — I did not exist yet. Type + rule only.
2. **SD format** — I am this size. Postage stamp. Size still + millimetres.
3. **27 Jan 2004** — I ship at $499.99. Spec table and the card photo live here.
4. **Price crash** — Cited stamps only: CeBIT 2003 $329.99 projection; SRP $499.99; week one ~$389; Engadget Oct 2004 ~$65.
5. **Drawer, 2026** — I am still here. Six KEEP host/slot photos. Show the oldest card in your drawer.
6. **Token** — Not official. Fees to @SanDisk.

- Marquee, unchanged: *I cost $499.99. I am 1GB. I am still here.*
- Footer, unchanged: *Not official SanDisk. Fees go to @SanDisk.*
- Token address last, under the footer, on [long.xyz](https://app.long.xyz/tokens/0xb4ba5b179709169ef917ea8d1a37633315ad1e18)
- Sources: DPReview (Jan 2004 / $499.99 / press), TWICE (CeBIT 2003 projection), PalmInfocenter (week one / $389), Engadget (Oct 2004 / ~$65)

No buy button. No fake market cap. No Discord, Telegram, or airdrop.

## Design lock

- **Logo / hero mark:** photograph of the original 1.0GB SanDisk SD card (`public/brand/card-logo-1gb.jpg`). Not the One Gig flat pfp. At 48px the crop is the **1.0GB** type (`public/brand/favicon-1gb.jpg`).
- **Hero:** 1500×500 tighter vortex, served compressed as WebP (`public/brand/card-banner-icon-3x1.webp`, ≤200KB). Same picture as the original PNG.
- **Page atmosphere:** 16:9 vortex field behind the cream table (`public/brand/card-vortex-16x9.webp`).
- Chrome: cream `#EDE4D0`, gold `#C6A24A`, ink `#1A1612`. Verdana body. Centered ~760px HTML table. Visitor counter.

## Photos

Period camera photos are from Wikimedia Commons and captioned on the page. See `public/photos/ATTRIBUTION.txt`.
