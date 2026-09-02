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
  "Sony FX30",
  "Blackmagic Pyxis 6K",
  "Blackmagic Pocket Cinema Camera 6K",
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
            Stories
            <br />
            <em>in motion.</em>
          </h1>
          <p className="hero-intro">
            Joel Anak Jinnie is a cinematographer and visual content creator
            drawn to the unrepeatable energy of a live moment.
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
            src="/joel-portrait.jpg"
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
          <h2>Made for the moment,<br />built to stay with you.</h2>
        </div>

        <div className="work-grid">
          <article className="work-card work-card-tall">
            <div className="card-index">01 / LIVE</div>
            <div className="card-copy">
              <p>Rainforest World Music Festival</p>
              <h3>Live energy,<br /><em>in frame.</em></h3>
              <span>2024 — 2025</span>
            </div>
          </article>
          <article className="work-card work-card-wide">
            <div className="card-index">02 / BROADCAST</div>
            <div className="card-copy">
              <p>TVS · FINAS productions</p>
              <h3>Stories that hold<br />their <em>own light.</em></h3>
              <span>Camera operator · 1st &amp; 2nd AC</span>
            </div>
          </article>
          <article className="work-card work-card-dark">
            <div className="card-index">03 / BRAND</div>
            <div className="card-copy">
              <p>Sarawak Tourism Board · PETROS · SALCRA</p>
              <h3>Built for<br /><em>the brief.</em></h3>
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
            From run-and-gun event coverage to narrative production, Joel
            makes the technical disappear so the human story can arrive intact.
          </p>
          <p>
            He has worked across multi-camera live events, commercial product
            photography, corporate documentaries and short-form social content.
            Every project is approached end-to-end — from visual preparation
            and camera builds through to the final, polished edit.
          </p>
          <div className="milestones">
            <div><b>2024 — now</b><span>Lightcube Studio<br />Videographer / Production crew</span></div>
            <div><b>2023 — 2024</b><span>Radiatech Global<br />Videographer cum Photographer</span></div>
            <div><b>2019 — 2023</b><span>UNIMAS<br />BA Cinematography with Honours</span></div>
          </div>
        </div>
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
