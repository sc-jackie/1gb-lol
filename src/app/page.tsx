import { CopyAddress } from "@/components/CopyAddress";
import { OneGigCard } from "@/components/OneGigCard";
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
                    <td>
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
            <td className="ticker-wrap">
              <div className="ticker">
                $499.99 → $65 → basically free · $499.99 → $65 → basically
                free · $499.99 → $65 → basically free ·
              </div>
            </td>
          </tr>

          <tr>
            <td className="hero">
              <div className="slot">
                <div className="card-slide">
                  <OneGigCard />
                </div>
                <div className="slot-lip" />
              </div>
              <p className="price">$499.99</p>
              <p className="lede">I used to cost that.</p>
              <p className="sub">
                I am CARD. I am a 1GB SD card. I am not a company. I am not
                official. I am the postage stamp that once cost a used Civic
                payment.
              </p>
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
                that format. CompactFlash is my chunky cousin — thicker,
                pin-holed, always hogging the DSLR. I am the one that slid
                into the thin cameras. 1GB was a landmark because a digital
                camera could finally stop pretending 64 megabytes was a
                vacation.
              </p>

              <p>
                <span className="when">27 January 2004</span>
                <br />I ship. First production 1GB Secure Digital card.
                Suggested retail: the number on the hero. Contemporary
                coverage on{" "}
                <a href={SOURCES.dpreview.href}>DPReview</a> reprints the
                SanDisk announcement from Sunnyvale that week. They said I
                could hold a thousand high-resolution pictures, or thirty
                hours of compressed music, or five hours of MPEG-4. They
                also said I cost $499.99. That last part is the joke I
                cannot stop telling.
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
                      {/* Period photos: keep raw img for 2004 table layout */}
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
                      <p>
                        CF held the SLRs. I held the pockets. By 2004 the
                        argument was over in the compact cameras: if you
                        wanted a thin body, you wanted me. I do not have a
                        rights-clean picture of my original face that
                        isn&apos;t wearing someone else&apos;s wordmark, so
                        I drew myself. Beige body. Gold pins. Fat 1GB.
                        That is the mascot. That is me.
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
              <p>
                Someone put my measurements on{" "}
                <a href={LONG_XYZ_URL}>long.xyz</a>. I am not selling
                myself. I am telling you where I sit, the way a museum
                label tells you the accession number.
              </p>
              <p className="address-box">{TOKEN_ADDRESS}</p>
              <p>
                <CopyAddress address={TOKEN_ADDRESS} />{" "}
                <a href={LONG_XYZ_URL}>Open on long.xyz</a>
              </p>
              <p>
                All token fees go to SanDisk&apos;s account on X,{" "}
                <a href={SANDISK_X_URL}>@SanDisk</a>. Nasdaq: SNDK. That
                is the arrangement. I do not keep a cut. I could not spend
                it if I did. I am plastic.
              </p>
            </td>
          </tr>

          <tr>
            <td className="bar-gold pad fees" id="fees">
              <h2>The fees go to @SanDisk.</h2>
              <p>
                Say it again, slower. Every fee on the token goes to{" "}
                <a href={SANDISK_X_URL}>@SanDisk</a> on X. Not to me. Not
                to this page. Not to a Discord that does not exist.
                SanDisk is a public company. Nasdaq: SNDK.
              </p>
              <p>
                This site is not SanDisk. This site is not a partner. This
                site is a fan page about a card that used to cost $499.99.
                If you want the company, they are{" "}
                <a href={SANDISK_X_URL}>@SanDisk</a>. If you want me, I am
                still in the drawer.
              </p>
            </td>
          </tr>

          <tr>
            <td className="pad community" id="drawer">
              <h2>Show me the oldest card in your drawer.</h2>
              <p>
                Community v1 is one prompt on X: post the oldest memory
                card in your drawer. CF, SmartMedia, Memory Stick, a
                mysterious miniSD in an adapter, me. Photograph it on a
                kitchen table. That is the whole forum.
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
                Photos on this page are downloaded from Wikimedia Commons
                and captioned with author, date, and license. The cream
                card with gold pins is a drawing. It is not a SanDisk
                product shot and it does not use a SanDisk wordmark.
              </p>
            </td>
          </tr>

          <tr>
            <td className="bar-ink pad footer disclaimer" id="disclaimer">
              <p>
                <strong>Not affiliated.</strong> 1gb.lol is an unofficial
                fan site. There is no partnership, sponsorship,
                endorsement, or license from SanDisk, Western Digital, the
                SD Association, or Nasdaq. Names of companies and ticker
                SNDK are used to talk about public history and a public
                fee destination. They are not our logo.
              </p>
              <p>
                Do not treat this page as SanDisk. Do not treat CARD as a
                SanDisk spokesperson. The mascot is a beige SD card with a
                gold contact row and the print &ldquo;1GB.&rdquo; All
                token fees go to{" "}
                <a href={SANDISK_X_URL}>@SanDisk</a>. Nasdaq: SNDK.
              </p>
              <p>
                CARD · 1gb.lol · first person, first gigabyte · a 2004
                story
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
