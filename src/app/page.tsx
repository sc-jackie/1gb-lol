import { CopyAddress } from "@/components/CopyAddress";
import { VisitorCounter } from "@/components/VisitorCounter";
import {
  LONG_XYZ_URL,
  SANDISK_X_URL,
  SOURCES,
  TOKEN_ADDRESS,
} from "@/lib/facts";

export default function Home() {
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
                  src="/brand/card-banner-icon-3x1.png"
                  alt="Original 1.0GB SanDisk SD card and NAND being pulled into a black and red vortex"
                  width={1500}
                  height={500}
                />
              </div>
              <div className="hero-lock">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="hero-mark"
                  src="/brand/card-logo-1gb.jpg"
                  alt="Original 1.0GB SanDisk SD card"
                  width={200}
                  height={200}
                />
                <p className="hero-name">CARD</p>
                <p className="hero-gig">1GB</p>
                <p className="price">$499.99</p>
                <p className="hero-shipped">Shipped 27 Jan 2004</p>
              </div>
            </td>
          </tr>

          <tr>
            <td className="ticker-wrap">
              <div className="ticker">
                I cost $499.99. I am 1GB. I am still here. · I cost $499.99. I
                am 1GB. I am still here. · I cost $499.99. I am 1GB. I am still
                here. ·
              </div>
            </td>
          </tr>

          <tr>
            <td className="pad spec-wrap">
              <table className="spec" cellPadding={0} cellSpacing={0}>
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
                    <td>postage stamp</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="pad">
              <table
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                className="stack-mobile"
              >
                <tbody>
                  <tr>
                    <td className="col-left">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="photo"
                        src="/photos/canon-ixus-430.jpg"
                        alt="Canon Digital IXUS 430, 2004"
                        width={360}
                        height={235}
                      />
                      <p className="caption">
                        Canon Digital IXUS 430, 14 Sep 2004. Alisdair
                        McDiarmid.{" "}
                        <a href="https://commons.wikimedia.org/wiki/File:Canon_IXUS_430.jpg">
                          Wikimedia Commons
                        </a>
                        ,{" "}
                        <a href="https://creativecommons.org/licenses/by/2.0/">
                          CC BY 2.0
                        </a>
                        .
                      </p>
                    </td>
                    <td className="col-right">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="photo"
                        src="/photos/canon-a520-sd-slot.jpg"
                        alt="Canon PowerShot A520 SD slot"
                        width={360}
                        height={270}
                      />
                      <p className="caption">
                        Canon PowerShot A520, SD door open. Luis Dantas, 13
                        Jul 2007.{" "}
                        <a href="https://commons.wikimedia.org/wiki/File:Canon_PowerShot_A520_06.jpg">
                          Wikimedia Commons
                        </a>
                        , public domain.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="pad community" id="drawer">
              <p>Show the oldest card in your drawer.</p>
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
                  <a href={SOURCES.engadget.href}>{SOURCES.engadget.label}</a>
                  . {SOURCES.engadget.note}
                </li>
                <li>
                  <a href={SOURCES.wikipedia.href}>
                    {SOURCES.wikipedia.label}
                  </a>
                  . {SOURCES.wikipedia.note}
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
            <td className="pad token" id="token">
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
