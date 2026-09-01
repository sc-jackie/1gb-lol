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
                    <td className="ie6">
                      Best viewed in Internet Explorer 6.0 · 800×600 · 1gb.lol
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="bar-gold pad-tight">
              <table width="100%" cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td className="nav">
                      <a href="#story">Story</a>
                      <a href="#token">Token</a>
                      <a href="#fees">Fees</a>
                      <a href="#drawer">Drawer</a>
                      <a href="#sources">Sources</a>
                    </td>
                    <td align="right">
                      You are visitor <VisitorCounter />
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
                  alt="Original 1.0GB SanDisk SD card in front of a black and red vortex"
                />
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
                    <th>capacity</th>
                    <td>1GB</td>
                  </tr>
                  <tr>
                    <th>SRP</th>
                    <td>$499.99</td>
                  </tr>
                  <tr>
                    <th>27 Jan 2004</th>
                    <td>first production 1GB SD ships</td>
                  </tr>
                  <tr>
                    <th>postage stamp</th>
                    <td>that is my size</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td>
              <hr className="rule" />
            </td>
          </tr>

          <tr>
            <td className="pad story" id="story">
              <h2>I remember being expensive.</h2>
              <p>
                Hi. I live in a drawer now. Before that I lived in a camera
                that still smells faintly of 2004 battery plastic. People
                paid real money for me. I have not forgotten.
              </p>

              <p>
                <span className="when">1988</span>
                <br />
                Eli Harari founds the company that becomes SanDisk — then
                called SunDisk — with Sanjay Mehrotra and Jack Yuan. I do
                not exist yet. They are busy proving flash can keep a
                photograph without a battery babysitting it.{" "}
                <a href={SOURCES.wikipedia.href}>Wikipedia, SanDisk</a>.
              </p>

              <p>
                <span className="when">SD format</span>
                <br />
                Then comes the SD format, kept by the SD Association. I am
                that format. CompactFlash is my chunky cousin. I am the
                postage stamp. 1GB was a landmark because a digital camera
                could finally stop pretending 64 megabytes was a vacation.
              </p>

              <p>
                <span className="when">27 January 2004</span>
                <br />I ship. First production 1GB Secure Digital card.
                Suggested retail: $499.99. Contemporary coverage on{" "}
                <a href={SOURCES.dpreview.href}>DPReview</a> reprints the
                SanDisk announcement from Sunnyvale that week. They said I
                could hold a thousand high-resolution pictures. They also
                said I cost $499.99. That last part is the joke I cannot
                stop telling.
              </p>

              <p>
                <span className="when">October 2004</span>
                <br />
                The crash.{" "}
                <a href={SOURCES.engadget.href}>
                  Engadget, 29 October 2004
                </a>
                , notes that the same 1GB card you could now pick up for
                around $65. Nine months. I depreciated faster than a
                Pontiac with a sunroof. Progress, etc.
              </p>

              <p>
                <span className="when">2026</span>
                <br />I am still in a drawer. Next to a dead CR2, a USB
                cable that only charges, and someone&apos;s wedding photos
                that never got copied off. And now there is a token with my
                measurements on it. I did not ask. I am flattered in the
                way a museum gift-shop magnet is flattered.
              </p>
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
                        alt="Silver Canon Digital IXUS 430 compact camera, photographed in 2004"
                        width={360}
                        height={235}
                      />
                      <p className="caption">
                        A 2004 pocket. Canon Digital IXUS 430, 4.0
                        megapixels, SD slot. Photographed 14 September 2004
                        by Alisdair McDiarmid.{" "}
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
                        alt="Open battery and SD card door on a Canon PowerShot A520"
                        width={360}
                        height={270}
                      />
                      <p className="caption">
                        The slot I was built for. Canon PowerShot A520 with
                        the SD door open. Photograph by Luis Dantas, 13
                        July 2007.{" "}
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
            <td className="pad">
              <h3>CompactFlash was already in the bag.</h3>
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
                        src="/photos/compactflash-64mb.jpg"
                        alt="Three views of a 64 MB Toshiba CompactFlash card from 2004"
                        width={360}
                        height={197}
                      />
                      <p className="caption">
                        64 MB CompactFlash, 23 May 2004. André Karwath.{" "}
                        <a href="https://commons.wikimedia.org/wiki/File:CompactFlash.jpg">
                          Wikimedia Commons
                        </a>
                        ,{" "}
                        <a href="https://creativecommons.org/licenses/by-sa/2.5/">
                          CC BY-SA 2.5
                        </a>
                        . I am not this card. I am thinner. I cost more,
                        briefly, which is the whole bit.
                      </p>
                    </td>
                    <td className="col-right">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="photo token-face"
                        src="/brand/card-logo-1gb.jpg"
                        alt="Original 1.0GB SanDisk SD card, the CARD logo"
                        width={360}
                        height={360}
                      />
                      <p className="caption">
                        Me. Original 1.0GB face, label intact. This
                        photograph is the logo. It is not a partnership,
                        and this site is not official.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td>
              <hr className="rule" />
            </td>
          </tr>

          <tr>
            <td className="pad token" id="token">
              <h2>I am also a contract now.</h2>
              <table width="100%" cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td className="token-thumb-cell">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="token-thumb"
                        src="/brand/card-logo-1gb.jpg"
                        alt="Token image: original 1.0GB SanDisk SD card"
                        width={96}
                        height={96}
                      />
                    </td>
                    <td>
                      <p>
                        Someone put my measurements on{" "}
                        <a href={LONG_XYZ_URL}>long.xyz</a>. I am not
                        selling myself. I am telling you where I sit.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="address-box">{TOKEN_ADDRESS}</p>
              <p>
                <CopyAddress address={TOKEN_ADDRESS} />{" "}
                <a href={LONG_XYZ_URL}>Open on long.xyz</a>
              </p>
              <p>
                All token fees go to SanDisk&apos;s account on X,{" "}
                <a href={SANDISK_X_URL}>@SanDisk</a>. Nasdaq: SNDK.
              </p>
            </td>
          </tr>

          <tr>
            <td className="bar-gold pad fees" id="fees">
              <h2>The fees go to @SanDisk.</h2>
              <p>
                Every fee on the token goes to{" "}
                <a href={SANDISK_X_URL}>@SanDisk</a> on X. Not to me. Not
                to this page. SanDisk is a public company. Nasdaq: SNDK.
              </p>
              <p>
                This site is not official. This site is not a partner. If
                you want the company, they are{" "}
                <a href={SANDISK_X_URL}>@SanDisk</a>.
              </p>
            </td>
          </tr>

          <tr>
            <td className="pad community" id="drawer">
              <h2>Show me the oldest card in your drawer.</h2>
              <p>
                Community v1 is one prompt on X: post the oldest memory
                card in your drawer. Photograph it on a kitchen table.
                That is the whole forum.
              </p>
              <p>
                If a handle appears later it may be @og1gb. That handle is
                a placeholder on this page. Do not assume it exists. There
                is no Discord. There is no Telegram. There is no airdrop.
                There is a drawer.
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <hr className="rule" />
            </td>
          </tr>

          <tr>
            <td className="pad sources" id="sources">
              <h2>I do not invent numbers.</h2>
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
              <p className="caption">
                Period camera and CompactFlash photos are from Wikimedia
                Commons, captioned with author, date, and license. The
                logo is a photograph of the original 1.0GB card, used as
                a fan-site mark, not as an official SanDisk lockup.
              </p>
            </td>
          </tr>

          <tr>
            <td className="bar-ink pad footer disclaimer" id="disclaimer">
              <p>
                Not official. 1gb.lol is an unofficial fan site. No
                partnership, sponsorship, endorsement, or license from
                SanDisk. All token fees go to{" "}
                <a href={SANDISK_X_URL}>@SanDisk</a>. Nasdaq: SNDK.
              </p>
              <p>CARD · 1gb.lol · I cost $499.99. I am 1GB. I am still here.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
