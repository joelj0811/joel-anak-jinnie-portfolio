const skills = [
  "Videography",
  "Photography",
  "Video editing",
  "Photo editing",
  "Scriptwriting",
  "Digital marketing",
];

const software = [
  "DaVinci Resolve Studio",
  "Adobe Premiere Pro",
  "Final Cut Pro",
  "Adobe Lightroom",
  "Canva",
  "Celtx",
];

const equipment = [
  "Sony FX6",
  "Sony FX3",
  "Sony A7IV",
  "Sony A7III",
  "Sony A7II",
  "Sony FX30",
  "Sony FS5 II",
  "Sony A6500",
  "Sony ZV-E10 II",
  "Blackmagic Pyxis 6K",
  "Blackmagic Pocket Cinema Camera 6K",
  "Blackmagic URSA Broadcast G2",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Joel Anak Jinnie home">
          JOEL<span>AJ</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#screening">Reels</a>
          <a href="#profile">Profile</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-contact" href="mailto:joel8jinnie@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Cinematography · Visual content · Kuching, MY</p>
          <h1>
            My
            <br />
            <em>Portfolio</em>
          </h1>
          <p className="hero-intro">
            I&apos;m a videographer and visual content creator, drawn to capturing
            moments for people.
          </p>
          <a className="round-link" href="#work">
            <span>Explore selected work</span>
            <b aria-hidden="true">↓</b>
          </a>
        </div>

        <div className="hero-image-wrap">
          <div className="film-label label-top">JOEL ANAK JINNIE · 2026</div>
          <img
            className="hero-image"
            src="/joel-anak-jinnie-portfolio/joel-portrait.jpg"
            alt="Joel Anak Jinnie operating a camera rig"
          />
          <div className="film-label label-bottom">
            <span>01 / ON LOCATION</span>
            <span>CAMERA / LIGHT / STORY</span>
          </div>
          <p className="vertical-note">CINEMATIC OBSERVATION</p>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <i />
          <span>04</span>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          FILM · LIVE · BRANDS · PEOPLE · PLACE · FILM · LIVE · BRANDS · PEOPLE
          · PLACE ·
        </div>
      </div>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected practice</p>
          <h2>My<br /><em>Experiences</em></h2>
        </div>

        <div className="work-grid">
          <article className="work-card work-card-tall">
            <img
              className="work-card-image"
              src="/joel-anak-jinnie-portfolio/live-feeds-thumb.png"
              alt="Joel operating a broadcast camera at a live shoot"
            />
            <div className="card-index">01 / LIVE</div>
            <div className="card-copy">
              <p>Rainforest World Music Festival</p>
              <h3>Live<br /><em>feeds.</em></h3>
              <span>2024 — 2025</span>
            </div>
          </article>
          <article className="work-card work-card-wide">
            <img
              className="work-card-image"
              src="/joel-anak-jinnie-portfolio/own-light-thumb.png"
              alt="A broadcast crew setting up a camera outside a house"
            />
            <div className="card-index">02 / BROADCAST</div>
            <div className="card-copy">
              <p>TVS · FINAS productions</p>
              <h3>Stories that hold<br />their <em>own light.</em></h3>
              <span>Camera operator · 1st &amp; 2nd AC</span>
            </div>
          </article>
          <article className="work-card work-card-dark">
            <img
              className="work-card-image"
              src="/joel-anak-jinnie-portfolio/creative-vision-thumb.png"
              alt="Joel setting up a cinema camera"
            />
            <div className="card-index">03 / BRAND</div>
            <div className="card-copy">
              <p>Sarawak Tourism Board · PETROS · SALCRA</p>
              <h3>Creative vision<br />for <em>the big one.</em></h3>
              <span>Campaigns · Corporate · Tourism</span>
            </div>
          </article>
        </div>
      </section>

      <section className="profile-section" id="profile">
        <div className="profile-sticky">
          <p className="eyebrow">The person behind the lens</p>
          <h2>Fast on the floor.<br />Calm in the cut.</h2>
        </div>
        <div className="profile-content">
          <p className="profile-lead">
            From run-and-gun event coverage to narrative production, I make
            the technical disappear so the human story can arrive intact.
          </p>
          <p>
            I have worked across multi-camera live events, commercial product
            photography, corporate documentaries and short-form social content.
            I approach every project end-to-end — from visual preparation and
            camera builds through to the final, polished edit.
          </p>
          <div className="milestones">
            <div><b>2024 — now</b><span>Lightcube Studio<br />Videographer / Production crew</span></div>
            <div><b>2023 — 2024</b><span>Radiatech Global<br />Videographer cum Photographer</span></div>
            <div><b>2019 — 2023</b><span>UNIMAS<br />BA Cinematography with Honours</span></div>
          </div>
        </div>
      </section>

      <section className="screening-section" id="screening">
        <div className="screening-intro">
          <p className="eyebrow">The full archive</p>
          <h2>Press play.<br /><em>Stay awhile.</em></h2>
          <p>
            Browse the moving work, frame archive, and latest visual notes
            from the studio.
          </p>
        </div>

        <div className="screening-grid">
          <article className="drive-panel drive-panel-dark">
            <div className="embed-heading">
              <div>
                <span>01 / Motion archive</span>
                <h3>Reels &amp;<br /><em>screen work.</em></h3>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1hGFetkcUpyUl33-VieUwVQd4ZoSFuPuH"
                target="_blank"
                rel="noreferrer"
              >
                Open in Drive ↗
              </a>
            </div>
            <iframe
              className="drive-embed drive-embed-list"
              title="Joel Anak Jinnie's motion archive"
              src="https://drive.google.com/embeddedfolderview?id=1hGFetkcUpyUl33-VieUwVQd4ZoSFuPuH#list"
              loading="lazy"
            />
          </article>

          <article className="drive-panel">
            <div className="embed-heading">
              <div>
                <span>02 / Frame archive</span>
                <h3>Stills &amp;<br /><em>photography.</em></h3>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1Cru8n7sa4mfslkhoUlf-rSN-H7faG6VA"
                target="_blank"
                rel="noreferrer"
              >
                Open in Drive ↗
              </a>
            </div>
            <iframe
              className="drive-embed"
              title="Joel Anak Jinnie's photography archive"
              src="https://drive.google.com/embeddedfolderview?id=1Cru8n7sa4mfslkhoUlf-rSN-H7faG6VA#grid"
              loading="lazy"
            />
          </article>
        </div>

        <a
          className="instagram-panel"
          href="https://www.instagram.com/the_unxpsd/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="instagram-kicker">03 / Social reel</span>
          <div>
            <p>Follow the latest frames</p>
            <h3>@the_<em>unxpsd</em></h3>
          </div>
          <span className="instagram-arrow" aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="craft-section">
        <p className="eyebrow">Craft and kit</p>
        <div className="craft-grid">
          <article>
            <span className="craft-number">01</span>
            <h3>What I bring</h3>
            <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </article>
          <article>
            <span className="craft-number">02</span>
            <h3>Post-production</h3>
            <ul>{software.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </article>
          <article>
            <span className="craft-number">03</span>
            <h3>Camera systems</h3>
            <ul>{equipment.map((camera) => <li key={camera}>{camera}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Available for the next frame</p>
        <h2>Have a story<br />worth <em>seeing?</em></h2>
        <a className="email-link" href="mailto:joel8jinnie@gmail.com">
          joel8jinnie@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <a className="phone-link" href="tel:+601129911204">+60 11-2991 1204</a>
      </section>

      <footer>
        <span>© 2026 JOEL ANAK JINNIE</span>
        <span>BAHASA MELAYU · ENGLISH · IBAN</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
