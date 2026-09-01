import { CopyAddress } from "@/components/CopyAddress";
import { VisitorCounter } from "@/components/VisitorCounter";
import {
  DRAWER_PHOTOS,
  KEEP_PHOTOS,
  LONG_XYZ_URL,
  SANDISK_X_URL,
  SOURCES,
  TOKEN_ADDRESS,
  type KeepPhoto,
} from "@/lib/facts";

function Credit({ photo }: { photo: KeepPhoto }) {
  return (
    <p className="caption">
      {photo.lead} Photo: {photo.author} / Wikimedia Commons / {photo.license} /{" "}
      <a href={photo.href}>{photo.href}</a>
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
      <table className="site" cellPadding={0} cellSpacing={0}>
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
                      <a href="#y1988">1988</a>
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
            <td className="chapter" id="y1988">
              <table
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                className="chapter-row"
              >
                <tbody>
                  <tr>
                    <td className="chapter-year">
                      <span className="chapter-kicker">SunDisk</span>
                      1988
                    </td>
                    <td className="chapter-body">
                      <p className="chapter-lede">I did not exist yet.</p>
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
                      <p>
                        SD: 32×24×2.1 mm. CompactFlash Type I: 43×36×3.3 mm.
                        Millimetre context. I am the thin one.
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
                        27 January 2004. I ship at{" "}
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
                                    <td>32×24×2.1 mm</td>
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
                      <p>
                        First production 1GB Secure Digital card. The{" "}
                        <a href={SOURCES.dpreview.href}>
                          Sunnyvale announcement
                        </a>{" "}
                        said Sharp 3D-SiP: two 512MB dice in 2.1 mm. That is
                        2004 press language. It is not a partnership on this
                        page. They also said I cost $499.99. That last part is
                        the joke I cannot stop telling.
                      </p>
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
                      <p className="chapter-lede">
                        Cousins got bigger. I stayed 1GB.
                      </p>
                      <p>
                        <a href={SOURCES.cebit.href}>CeBIT 2003</a> projected
                        $329.99. That was a projection. I shipped at $499.99.
                        Week of ship, unnamed shops around $389 —{" "}
                        <a href={SOURCES.palminfocenter.href}>
                          PalmInfocenter, 27 January 2004
                        </a>
                        .{" "}
                        <a href={SOURCES.engadget.href}>
                          Engadget, 29 October 2004
                        </a>
                        : around $65. No curve. I did not grow. They did.
                      </p>
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
                      <p className="chapter-lede">I am still here.</p>
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
                        Not official. Fees to{" "}
                        <a href={SANDISK_X_URL}>@SanDisk</a>.
                      </p>
                      <p>
                        Someone put my measurements on{" "}
                        <a href={LONG_XYZ_URL}>long.xyz</a>. I did not ask. I
                        am flattered in the way a museum gift-shop magnet is
                        flattered. This site is not SanDisk. There is no
                        partnership. I do not keep a cut. I am plastic.
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
                  <a href={SOURCES.cebit.href}>{SOURCES.cebit.label}</a>.{" "}
                  {SOURCES.cebit.note}
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
