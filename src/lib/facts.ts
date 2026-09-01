export const TOKEN_ADDRESS =
  "0xb4ba5b179709169ef917ea8d1a37633315ad1e18" as const;

export const RH_SNDK_TOKEN_ADDRESS =
  "0xB90A19fF0Af67f7779afF50A882A9CfF42446400" as const;

export const CARD_BLOCKSCOUT_URL =
  `https://robinhoodchain.blockscout.com/token/${TOKEN_ADDRESS}` as const;

export const SNDK_BLOCKSCOUT_URL =
  `https://robinhoodchain.blockscout.com/token/${RH_SNDK_TOKEN_ADDRESS}` as const;

export const ROBINHOOD_CHAIN_DOCS_URL =
  "https://docs.robinhood.com/chain/stock-tokens/" as const;

export const LONG_XYZ_URL =
  `https://app.long.xyz/tokens/${TOKEN_ADDRESS}` as const;

export const SANDISK_X_URL = "https://x.com/SanDisk" as const;

export const SOURCES = {
  dpreview: {
    label: "DPReview, 27 Jan 2004",
    href: "https://legacy.dpreview.com/articles/2622488571/sandisk1gbsdcard",
    note: "$499.99 SRP. 30 hours / 1,000 stills / five hours MPEG-4.",
  },
  palminfocenter: {
    label: "PalmInfocenter, 27 Jan 2004",
    href: "https://www.palminfocenter.com/news/6482/sandisk-ships-1-gigabyte-sd-card/",
    note: "Week-of-ship ~$389.",
  },
  engadget: {
    label: "Engadget, 29 Oct 2004",
    href: "https://www.engadget.com/2004-10-29-sandisks-budget-2gb-secure-digital-card.html",
    note: "Around $65.",
  },
  cardBlockscout: {
    label: "CARD on Robinhood Chain Blockscout",
    href: CARD_BLOCKSCOUT_URL,
    note: CARD_BLOCKSCOUT_URL,
  },
  sndkBlockscout: {
    label: "SNDK stock token on Robinhood Chain Blockscout",
    href: SNDK_BLOCKSCOUT_URL,
    note: SNDK_BLOCKSCOUT_URL,
  },
  robinhoodDocs: {
    label: "Robinhood Chain docs",
    href: ROBINHOOD_CHAIN_DOCS_URL,
    note: "stock tokens are not shares.",
  },
} as const;

export type KeepPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
  href?: string;
};

export const KEEP_PHOTOS = {
  comparison: {
    src: "/photos/memory-card-comparison.jpg",
    alt: "Size still: CompactFlash, SD, and microSD cards",
    width: 1800,
    height: 800,
    credit: "Photo: Evan-Amos / Wikimedia Commons / public domain.",
  },
  ixusII: {
    src: "/photos/canon-ixus-ii.webp",
    alt: "Canon Digital IXUS II, also sold as PowerShot SD100",
    width: 800,
    height: 559,
    credit:
      "Canon Digital IXUS II (PowerShot SD100). Photo: David Gerard / Wikimedia Commons / public domain.",
    href: "https://commons.wikimedia.org/wiki/File:Canon_Ixus_II_front.jpg",
  },
  sd200: {
    src: "/photos/canon-sd200.webp",
    alt: "Canon PowerShot SD200, also sold as Digital IXUS 30",
    width: 800,
    height: 534,
    credit:
      "Canon PowerShot SD200 (Digital IXUS 30). Photo: MikeMurphy / Wikimedia Commons / CC BY-SA 3.0.",
    href: "https://commons.wikimedia.org/wiki/File:Canon_SD200.jpg",
  },
  ixus40: {
    src: "/photos/canon-ixus-40.webp",
    alt: "Canon Digital IXUS 40, also sold as PowerShot SD300",
    width: 800,
    height: 519,
    credit:
      "Canon Digital IXUS 40 (PowerShot SD300). Photo: afrank99 / Wikimedia Commons / CC BY-SA 2.5.",
    href: "https://commons.wikimedia.org/wiki/File:Canon_Digital_Ixus_40.jpg",
  },
  coolpix: {
    src: "/photos/nikon-coolpix-3200.webp",
    alt: "Nikon Coolpix 3200",
    width: 800,
    height: 697,
    credit:
      "Nikon Coolpix 3200. Photo: Bluemoose / Wikimedia Commons / CC BY-SA 2.0.",
    href: "https://commons.wikimedia.org/wiki/File:Nikon_CoolPix_3200.jpg",
  },
  fz20: {
    src: "/photos/panasonic-lumix-fz20.webp",
    alt: "Panasonic Lumix DMC-FZ20",
    width: 800,
    height: 538,
    credit:
      "Panasonic Lumix DMC-FZ20. Photo: Joachim Köhler / Wikimedia Commons / CC BY-SA 3.0.",
    href: "https://commons.wikimedia.org/wiki/File:Panasonic_Lumix_DMC-FZ20_FrontView2.jpg",
  },
  fz20Slot: {
    src: "/photos/panasonic-lumix-fz20-sd-slot.webp",
    alt: "Panasonic Lumix DMC-FZ20 battery compartment and SD slot",
    width: 800,
    height: 534,
    credit:
      "FZ20 slot. Photo: Joachim Köhler / Wikimedia Commons / CC BY-SA 3.0.",
    href: "https://commons.wikimedia.org/wiki/File:Panasonic_Lumix_DMC-FZ20_BatteryCompartment_MemoryCardSlot.JPG",
  },
} as const satisfies Record<string, KeepPhoto>;

export const DRAWER_PHOTOS = [
  KEEP_PHOTOS.ixusII,
  KEEP_PHOTOS.sd200,
  KEEP_PHOTOS.ixus40,
  KEEP_PHOTOS.coolpix,
  KEEP_PHOTOS.fz20,
  KEEP_PHOTOS.fz20Slot,
] as const;
