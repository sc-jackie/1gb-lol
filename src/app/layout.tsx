import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "CARD — I used to cost $499.99",
  description:
    "Fan site for CARD, the 1GB SanDisk SD card that shipped 27 January 2004 at $499.99. Not affiliated with SanDisk. Token fees go to @SanDisk.",
  metadataBase: new URL("https://1gb.lol"),
  openGraph: {
    title: "CARD — I used to cost $499.99",
    description:
      "First-person fan site for the original production 1GB SD card. Not official. Fees to @SanDisk.",
    url: "https://1gb.lol",
    siteName: "1gb.lol",
    type: "website",
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
