import './HomePage.css'

const stats = [
  { value: ['23 DOF'], label: 'Height' },
  { value: ['35kg'], label: 'Weight' },
  { value: ['2h field', 'runtime'], label: 'Endurance' },
]

export default function HomePage() {
  return (
    <div className="page">
      {/* ── hero ── */}
      <section id="home" className="hero">
        <div className="hero__mark" aria-hidden="true">
          <span>HARVEST</span>
          <span>G1</span>
        </div>
        <img className="hero__robot" src="/seg-hero-robot.png" alt="HARVEST G1 field robot" />
        <div className="hero__copy">
          <p>Intelligent robot</p>
          <h1>RWA Field Data Robot</h1>
        </div>
        <div className="stats">
          {stats.map((item) => (
            <article key={item.label}>
              <strong>
                {item.value.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </strong>
              <small>{item.label}</small>
            </article>
          ))}
        </div>
      </section>

      {/* ── perception band ── */}
      <section id="design" className="perception">
        <i className="frame frame--tl" />
        <i className="frame frame--tr" />
        <i className="frame frame--bl" />
        <i className="frame frame--br" />
        <i className="tick tick--top" />
        <i className="tick tick--bottom" />

        <svg className="leaders" viewBox="0 0 722 156" preserveAspectRatio="none" aria-hidden="true">
          <path d="M156 49 H206" />
          <path d="M156 106 H206" />
          <path d="M589 42 L606 54" />
        </svg>

        <p className="callout callout--left">
          Advanced perception and
          <br />
          motors in interfacial centers
          <br />
          maslicision state
        </p>
        <img className="lens" src="/left1.png" alt="" />

        <div className="perception__copy">
          <p className="kicker">Fullfillable equipment</p>
          <h2>Advanced Perception and Dynamic Interaction</h2>
          <p>
            The program integrates hardware force rensors and motor electric current to meet
            <br />
            the end force requirements, achieving better sensitivity and reliability
            <br />
            Foot waterproof and dustproof, easy to replace after wear and tear
          </p>
        </div>

        <p className="callout callout--right">
          Data exploded
          <br />
          sensor module
        </p>
        <img className="module" src="/right.png" alt="" />
      </section>

      {/* ── specs panel ── */}
      <section id="specs" className="specs">
        <p className="specs__mark" aria-hidden="true">
          HARVEST-G1
        </p>
        <img className="specs__robot" src="/seg-specs-robot.png" alt="HARVEST G1 full body" />

        <svg className="specs__lines" viewBox="0 0 696 168" preserveAspectRatio="none" aria-hidden="true">
          <path d="M266 37 H297 L306 56" />
          <path d="M442 13 H417 L409 23" />
          <path d="M484 150 H461 L447 138" />
        </svg>

        <p className="note note--brand">
          HARVEST
          <small>Extiation grade cross roller bearings.</small>
        </p>
        <p className="note note--persom">
          Persom sensors sensors
          <br />
          and son motor
          <br />
          electric sensors
        </p>
        <p className="note note--integrated">
          Integrated force sensors
          <br />
          at each sensors and motor
          <br />
          electric sensors
        </p>
        <p className="note note--industrial">
          Industrial grade cross
          <br />
          roller bearings
        </p>
        <p className="note note--coolant">
          Coolant precader
          <br />
          with tool modules
        </p>
      </section>

      {/* ── bento ── */}
      <section id="tech" className="bento">
        <article className="card card--gold card--npu">
          <p className="card__gold-label">Neural Processing Unit</p>
          <h3>Field Data AI</h3>
          <img src="/seg-npu-head.png" alt="" />
        </article>

        <article className="card card--cream card--power">
          <p className="card__label">Electrica machinery</p>
          <h3>
            Stable Environmental
            <br />
            Adaptation
          </h3>
          <p className="card__label">Smart Cell</p>
          <strong>12500mAh</strong>
          <p className="card__label">Smart Cell</p>
          <p className="card__label">quick charge</p>
        </article>

        <div className="stack">
          <article className="card card--cream card--precise">
            <p className="card__label">Precise Manipulation</p>
            <div className="split">
              <div>
                <strong>2-4 hours</strong>
                <p className="card__label">e.g. vnencial contenders</p>
              </div>
              <div>
                <strong>2 hours</strong>
                <p className="card__label">variable force</p>
              </div>
            </div>
          </article>
          <article className="card card--cream card--loco">
            <h4>
              Adaptive
              <br />
              Locomotion
            </h4>
            <img src="/right.png" alt="" />
          </article>
        </div>

        <article className="card card--gold card--sw">
          <p className="card__gold-label">SW speaker</p>
          <img src="/seg-sw-body.png" alt="" />
        </article>
      </section>

      {/* ── growth ── */}
      <section id="contact" className="growth">
        <h2>RWA Humanoids Growth Projection</h2>
        <div className="growth__grid">
          <article>
            <span>2030</span>
            <p>
              revenue around <em>$7-15B</em>,
              <br />
              led by factories and warehouse
            </p>
          </article>
          <article>
            <span>2035</span>
            <p>
              Goldman's updated case is about
              <br />
              6.5 million units and ~<br />
              <em>$138B</em> in market size.
            </p>
          </article>
          <article>
            <span>2050</span>
            <p>
              Morgan Stanley's long-run picture is
              <br />
              ~1 billion humanoids in use and
              <br />
              about <em>$5T</em> in yearly revenue if
              <br />
              they become common work and
              <br />
              home machines
            </p>
          </article>
        </div>
        <img className="growth__hand" src="/seg-hand.png" alt="" />
      </section>
    </div>
  )
}
