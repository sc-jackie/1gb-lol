export const TOKEN_ADDRESS =
  "0xb4ba5b179709169ef917ea8d1a37633315ad1e18" as const;

export const LONG_XYZ_URL =
  `https://app.long.xyz/tokens/${TOKEN_ADDRESS}` as const;

export const SANDISK_X_URL = "https://x.com/SanDisk" as const;

export const SOURCES = {
  dpreview: {
    label: "DPReview — SanDisk 1GB SD Card Ships",
    href: "https://legacy.dpreview.com/articles/2622488571/sandisk1gbsdcard",
    note: "27 January 2004. Reprints the SanDisk announcement: $499.99 SRP, 30 hours of compressed music, 1,000 high-resolution stills, five hours of MPEG-4.",
  },
  palminfocenter: {
    label: "PalmInfocenter — SanDisk Ships 1 Gigabyte SD Card",
    href: "https://www.palminfocenter.com/news/6482/sandisk-ships-1-gigabyte-sd-card/",
    note: "27 January 2004. Notes the $499.99 SRP and that some unnamed online shops were already offering the card around $389 that week.",
  },
  engadget: {
    label: "Engadget — SanDisk's budget 2GB Secure Digital card",
    href: "https://www.engadget.com/2004-10-29-sandisks-budget-2gb-secure-digital-card.html",
    note: "29 October 2004. Dan Wu notes the January 1GB card launched near $500 and could then be picked up for around $65.",
  },
} as const;

export type KeepPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  lead: string;
  author: string;
  license: string;
  href: string;
};

export const KEEP_PHOTOS = {
  comparison: {
    src: "/photos/memory-card-comparison.jpg",
    alt: "Size still: CompactFlash, SD, and microSD cards",
    width: 1800,
    height: 800,
    lead: "Size still: CompactFlash, SD, microSD. Millimetre context only. microSD is post-2004; not a 2004 product shot of CARD.",
    author: "Evan-Amos",
    license: "public domain",
    href: "https://commons.wikimedia.org/wiki/File:Memory-card-comparison.jpg",
  },
  ixusII: {
    src: "/photos/canon-ixus-ii.webp",
    alt: "Canon Digital IXUS II, also sold as PowerShot SD100",
    width: 800,
    height: 559,
    lead: "Canon Digital IXUS II (PowerShot SD100). Canon's first digital camera on SD, marketed May 2003.",
    author: "David Gerard",
    license: "public domain",
    href: "https://commons.wikimedia.org/wiki/File:Canon_Ixus_II_front.jpg",
  },
  sd200: {
    src: "/photos/canon-sd200.webp",
    alt: "Canon PowerShot SD200, also sold as Digital IXUS 30",
    width: 800,
    height: 534,
    lead: "Canon PowerShot SD200 (Digital IXUS 30), 2004 SD camera.",
    author: "MikeMurphy",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Canon_SD200.jpg",
  },
  ixus40: {
    src: "/photos/canon-ixus-40.webp",
    alt: "Canon Digital IXUS 40, also sold as PowerShot SD300",
    width: 800,
    height: 519,
    lead: "Canon Digital IXUS 40 (PowerShot SD300). SD Memory Card. Marketed October 2004.",
    author: "afrank99",
    license: "CC BY-SA 2.5",
    href: "https://commons.wikimedia.org/wiki/File:Canon_Digital_Ixus_40.jpg",
  },
  coolpix: {
    src: "/photos/nikon-coolpix-3200.webp",
    alt: "Nikon Coolpix 3200",
    width: 800,
    height: 697,
    lead: "Nikon Coolpix 3200. CES 9 January 2004. Internal memory plus SD.",
    author: "Bluemoose",
    license: "CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Nikon_CoolPix_3200.jpg",
  },
  fz20: {
    src: "/photos/panasonic-lumix-fz20.webp",
    alt: "Panasonic Lumix DMC-FZ20",
    width: 800,
    height: 538,
    lead: "Panasonic Lumix DMC-FZ20. Announced July 2004. SD/MMC.",
    author: "Joachim Köhler",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Panasonic_Lumix_DMC-FZ20_FrontView2.jpg",
  },
  fz20Slot: {
    src: "/photos/panasonic-lumix-fz20-sd-slot.webp",
    alt: "Panasonic Lumix DMC-FZ20 battery compartment and SD slot",
    width: 800,
    height: 534,
    lead: "FZ20 battery + SD slot, not a CF door.",
    author: "Joachim Köhler",
    license: "CC BY-SA 3.0",
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
