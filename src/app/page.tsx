import { CopyAddress } from "@/components/CopyAddress";
import { VisitorCounter } from "@/components/VisitorCounter";
import {
  CARD_BLOCKSCOUT_URL,
  DRAWER_PHOTOS,
  KEEP_PHOTOS,
  LONG_XYZ_URL,
  RH_SNDK_TOKEN_ADDRESS,
  SANDISK_X_URL,
  SOURCES,
  TOKEN_ADDRESS,
  type KeepPhoto,
} from "@/lib/facts";

function Credit({ photo }: { photo: KeepPhoto }) {
  return (
    <p className="caption">
      {photo.href ? <a href={photo.href}>{photo.credit}</a> : photo.credit}
    </p>
  );
}

export default function Home() {
  const drawerRows = [
    [DRAWER_PHOTOS[0], DRAWER_PHOTOS[1]],
    [DRAWER_PHOTOS[2], DRAWER_PHOTOS[3]],
    [DRAWER_PHOTOS[4], DRAWER_PHOTOS[5]],
  ] as const;

  return (
    <div className="wrap">
      <table className="site" width={760} cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            <td className="bar-ink pad-tight">
              <table width="100%" cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td className="brand-cell">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="logo-48"
                        src="/brand/favicon-1gb.jpg"
                        alt="1.0GB"
                        width={48}
                        height={48}
                      />
                      <span className="brand">CARD</span>
                    </td>
                    <td align="right">
                      <span className="visitor-label">You are visitor </span>
                      <VisitorCounter />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="hero">
              <div className="hero-vortex">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/card-banner-icon-3x1.webp"
                  alt="Original 1.0GB SanDisk SD card being pulled into a tighter vortex"
                  width={1500}
                  height={500}
                />
              </div>
            </td>
          </tr>

          <tr>
            <td className="ticker-wrap">
              <div className="ticker-track">
                <span className="ticker">
                  I cost $499.99. I am 1GB. I am still here. · I cost $499.99. I
                  am 1GB. I am still here. · I cost $499.99. I am 1GB. I am
                  still here. ·
                </span>
                <span className="ticker" aria-hidden="true">
                  I cost $499.99. I am 1GB. I am still here. · I cost $499.99. I
                  am 1GB. I am still here. · I cost $499.99. I am 1GB. I am
                  still here. ·
                </span>
              </div>
            </td>
          </tr>

          <tr>
            <td className="bar-gold pad-tight">
              <table width="100%" cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td className="nav">
                      <a href="#sd">SD</a>
                      <a href="#y2004">2004</a>
                      <a href="#crash">Crash</a>
                      <a href="#drawer">2026</a>
                      <a href="#token">Token</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="chapter" id="sd">
              <table
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                className="chapter-row"
              >
                <tbody>
                  <tr>
                    <td className="chapter-year">
                      <span className="chapter-kicker">Format</span>
                      SD
                    </td>
                    <td className="chapter-body">
                      <p className="chapter-lede">
                        I am this size. Postage stamp.
                      </p>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="photo"
                        src={KEEP_PHOTOS.comparison.src}
                        alt={KEEP_PHOTOS.comparison.alt}
                        width={KEEP_PHOTOS.comparison.width}
                        height={KEEP_PHOTOS.comparison.height}
                      />
                      <Credit photo={KEEP_PHOTOS.comparison} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="chapter chapter-ship" id="y2004">
              <table
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                className="chapter-row"
              >
                <tbody>
                  <tr>
                    <td className="chapter-year">
                      <span className="chapter-kicker">I ship</span>
                      2004
                    </td>
                    <td className="chapter-body">
                      <p className="chapter-lede">
                        27 January 2004.{" "}
                        <span className="plex-price">$499.99</span>.
                      </p>
                      <p className="price">$499.99</p>
                      <p className="hero-gig">1GB</p>
                      <table
                        width="100%"
                        cellPadding={0}
                        cellSpacing={0}
                        className="stack-mobile ship-split"
                      >
                        <tbody>
                          <tr>
                            <td className="col-left">
                              <table
                                className="spec"
                                cellPadding={0}
                                cellSpacing={0}
                              >
                                <tbody>
                                  <tr>
                                    <th>Capacity</th>
                                    <td>1GB</td>
                                  </tr>
                                  <tr>
                                    <th>SRP</th>
                                    <td>$499.99</td>
                                  </tr>
                                  <tr>
                                    <th>Shipped</th>
                                    <td>27 Jan 2004</td>
                                  </tr>
                                  <tr>
                                    <th>Size</th>
                                    <td>
                                      postage stamp
                                      <br />
                                      32×24×2.1 mm
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Press</th>
                                    <td>
                                      30 hours / 1,000 stills / five hours
                                      MPEG-4
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td className="col-right">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                className="mark-photo"
                                src="/brand/card-logo-1gb.jpg"
                                alt="Original 1.0GB SanDisk SD card"
                                width={240}
                                height={240}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="chapter" id="crash">
              <table
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                className="chapter-row"
              >
                <tbody>
                  <tr>
                    <td className="chapter-year">
                      <span className="chapter-kicker">The crash</span>
                      OCT
                    </td>
                    <td className="chapter-body">
                      <p className="chapter-lede">$499.99.</p>
                      <p>
                        Week I shipped,{" "}
                        <a href={SOURCES.palminfocenter.href}>$389</a>.
                      </p>
                      <p>
                        By 29 October 2004,{" "}
                        <a href={SOURCES.engadget.href}>$65</a>.
                      </p>
                      <p>I did not get worse. Storage did.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="chapter" id="drawer">
              <table
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                className="chapter-row"
              >
                <tbody>
                  <tr>
                    <td className="chapter-year">
                      <span className="chapter-kicker">Drawer</span>
                      2026
                    </td>
                    <td className="chapter-body community">
                      <p className="ask">
                        Show the oldest card in your drawer.
                      </p>
                      <table
                        width="100%"
                        cellPadding={0}
                        cellSpacing={0}
                        className="drawer-grid"
                      >
                        <tbody>
                          {drawerRows.map((row) => (
                            <tr key={row[0].src}>
                              {row.map((photo) => (
                                <td className="drawer-cell" key={photo.src}>
                                  <div className="drawer-well">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                      className="photo"
                                      src={photo.src}
                                      alt={photo.alt}
                                      width={photo.width}
                                      height={photo.height}
                                      loading="lazy"
                                    />
                                  </div>
                                  <Credit photo={photo} />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="chapter" id="token">
              <table
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                className="chapter-row"
              >
                <tbody>
                  <tr>
                    <td className="chapter-year">
                      <span className="chapter-kicker">Token</span>
                      NOW
                    </td>
                    <td className="chapter-body">
                      <p className="chapter-lede">
                        I am a fan token in a public pool against Robinhood’s
                        Sandisk Stock Token on Robinhood Chain — not Sandisk,
                        not Robinhood, not a share.
                      </p>
                      <p>
                        Community AMM vs RH contract {RH_SNDK_TOKEN_ADDRESS}.
                      </p>
                      <p>CARD {TOKEN_ADDRESS}.</p>
                      <p>
                        Not equity. Not 1:1. Not redeemable. Not a
                        partnership.
                      </p>
                      <p>
                        Not official. Fees to{" "}
                        <a href={SANDISK_X_URL}>@SanDisk</a>.
                      </p>
                      <p>
                        Token URL last:{" "}
                        <a href={CARD_BLOCKSCOUT_URL}>
                          {CARD_BLOCKSCOUT_URL}
                        </a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="pad sources" id="sources">
              <ol>
                <li>
                  <a href={SOURCES.dpreview.href}>{SOURCES.dpreview.label}</a>
                  . {SOURCES.dpreview.note}
                </li>
                <li>
                  <a href={SOURCES.palminfocenter.href}>
                    {SOURCES.palminfocenter.label}
                  </a>
                  . {SOURCES.palminfocenter.note}
                </li>
                <li>
                  <a href={SOURCES.engadget.href}>{SOURCES.engadget.label}</a>
                  . {SOURCES.engadget.note}
                </li>
                <li>
                  {SOURCES.cardBlockscout.label}:{" "}
                  <a href={SOURCES.cardBlockscout.href}>
                    {SOURCES.cardBlockscout.note}
                  </a>
                </li>
                <li>
                  {SOURCES.sndkBlockscout.label}:{" "}
                  <a href={SOURCES.sndkBlockscout.href}>
                    {SOURCES.sndkBlockscout.note}
                  </a>
                </li>
                <li>
                  {SOURCES.robinhoodDocs.label}: {SOURCES.robinhoodDocs.note}{" "}
                  <a href={SOURCES.robinhoodDocs.href}>
                    {SOURCES.robinhoodDocs.href}
                  </a>
                </li>
              </ol>
            </td>
          </tr>

          <tr>
            <td className="bar-ink pad footer disclaimer" id="disclaimer">
              <p>
                Not official SanDisk. Fees go to{" "}
                <a href={SANDISK_X_URL}>@SanDisk</a>.
              </p>
            </td>
          </tr>

          <tr>
            <td className="pad token" id="address">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="token-thumb"
                src="/brand/card-logo-1gb.jpg"
                alt="Original 1.0GB SanDisk SD card"
                width={96}
                height={96}
              />
              <p className="address-box">{TOKEN_ADDRESS}</p>
              <p>
                <CopyAddress address={TOKEN_ADDRESS} />{" "}
                <a href={LONG_XYZ_URL}>long.xyz</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
