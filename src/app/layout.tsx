import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "CARD — I cost $499.99. I am 1GB. I am still here.",
  description:
    "Fan site for CARD, the 1GB SanDisk SD card that shipped 27 January 2004 at $499.99. Not official. Token fees go to @SanDisk.",
  metadataBase: new URL("https://1gb.lol"),
  icons: {
    icon: [
      { url: "/brand/favicon-1gb.jpg", type: "image/jpeg", sizes: "96x96" },
      { url: "/brand/card-logo-1gb.jpg", type: "image/jpeg" },
    ],
    apple: [{ url: "/brand/card-logo-1gb.jpg" }],
  },
  openGraph: {
    title: "CARD — I cost $499.99. I am 1GB. I am still here.",
    description:
      "First-person fan site for the original production 1GB SD card. Not official. Fees to @SanDisk.",
    url: "https://1gb.lol",
    siteName: "1gb.lol",
    type: "website",
    images: [{ url: "/brand/card-logo-1gb.jpg", width: 774, height: 774 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={plex.variable}>
      <body>
        <div className="scanlines" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
