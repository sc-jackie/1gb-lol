export const TOKEN_ADDRESS =
  "0xb4ba5b179709169ef917ea8d1a37633315ad1e18" as const;

export const LONG_XYZ_URL =
  `https://app.long.xyz/tokens/${TOKEN_ADDRESS}` as const;

export const SANDISK_X_URL = "https://x.com/SanDisk" as const;

export const SOURCES = {
  dpreview: {
    label: "DPReview — SanDisk 1GB SD Card Ships",
    href: "https://legacy.dpreview.com/articles/2622488571/sandisk1gbsdcard",
    note: "Contemporary coverage of the 27 January 2004 ship date and $499.99 suggested retail price, reprinting the SanDisk announcement.",
  },
  palminfocenter: {
    label: "PalmInfocenter — SanDisk Ships 1 Gigabyte SD Card",
    href: "https://www.palminfocenter.com/news/6482/sandisk-ships-1-gigabyte-sd-card/",
    note: "27 January 2004. Notes the $499.99 SRP and that some online retailers were already offering the card around $389 that week.",
  },
  engadget: {
    label: "Engadget — SanDisk's budget 2GB Secure Digital card",
    href: "https://www.engadget.com/2004-10-29-sandisks-budget-2gb-secure-digital-card.html",
    note: "29 October 2004. Dan Wu notes the January 1GB card launched near $500 and could then be picked up for around $65.",
  },
  wikipedia: {
    label: "Wikipedia — SanDisk",
    href: "https://en.wikipedia.org/wiki/SanDisk",
    note: "Founded 1 June 1988 as SunDisk by Eli Harari, Sanjay Mehrotra, and Jack Yuan. Nasdaq: SNDK.",
  },
} as const;
