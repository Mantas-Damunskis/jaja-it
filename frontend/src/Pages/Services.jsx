import { useMemo, useState } from "react";
import {
  FaPrint,
  FaTools,
  FaDesktop,
  FaVideo,
  FaCode,
  FaWifi,
  FaDatabase,
  FaShieldAlt,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

export default function Paslaugos() {
  const categories = useMemo(
    () => [
      { key: "all", label: "Visos" },
      { key: "spausdinimas", label: "Spausdinimas" },
      { key: "kompiuteriai", label: "Kompiuteriai" },
      { key: "tinklai", label: "Tinklai" },
      { key: "saugumas", label: "Saugumas" },
      { key: "programavimas", label: "Programavimas" },
      { key: "duomenys", label: "Duomenys" },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        id: "kasetes",
        title: "Spausdintuvų kasetės",
        category: "spausdinimas",
        icon: <FaPrint />,
        badge: "Greitai",
        short: "Parinkimas, analogai/originalai, konsultacija ir pristatymas.",
        bullets: ["Parinkimas pagal modelį", "Analogai / originalai", "Pristatymas (pagal susitarimą)"],
        price: "Nuo 10 €",
      },
      {
        id: "remontas",
        title: "Kompiuterių remontas",
        category: "kompiuteriai",
        icon: <FaTools />,
        badge: "Populiaru",
        short: "Diagnostika, gedimų šalinimas, dalių keitimas, profilaktika.",
        bullets: ["Diagnostika", "SSD/RAM atnaujinimai", "Valymas / termopasta"],
        price: "Nuo 20 €",
      },
      {
        id: "iranga",
        title: "Kompiuterinė įranga ir dalys",
        category: "kompiuteriai",
        icon: <FaDesktop />,
        badge: "Verslui",
        short: "Komplektavimas, parinkimas ir paruošimas darbui.",
        bullets: ["PC komplektavimas", "Monitoriai / periferija", "Windows + programos"],
        price: "Pagal poreikį",
      },
      {
        id: "tinklai",
        title: "Tinklų diegimas ir priežiūra",
        category: "tinklai",
        icon: <FaWifi />,
        badge: "Stabilu",
        short: "Wi-Fi, maršrutizatoriai, biuro tinklai, gedimų sprendimas.",
        bullets: ["Wi-Fi stiprinimas", "Routerių konfigūracija", "Tinklo diagnostika"],
        price: "Nuo 25 €",
      },
      {
        id: "kameros",
        title: "Vaizdo stebėjimo kamerų įrengimas",
        category: "saugumas",
        icon: <FaVideo />,
        badge: "Apsauga",
        short: "Montavimas, įrašymo įrenginiai ir nuotolinė prieiga.",
        bullets: ["Parinkimas", "Montavimas", "Prieiga telefone/PC"],
        price: "Nuo 80 €",
      },
      {
        id: "saugumas",
        title: "IT saugumo bazė",
        category: "saugumas",
        icon: <FaShieldAlt />,
        badge: "Rekomenduojama",
        short: "Antivirusas, kopijos, slaptažodžiai, bazinės rekomendacijos.",
        bullets: ["Trumpas auditukas", "Kopijų planas", "Pagrindinės taisyklės"],
        price: "Nuo 30 €",
      },
      {
        id: "duomenys",
        title: "Duomenų atkūrimas",
        category: "duomenys",
        icon: <FaDatabase />,
        badge: "Svarbu",
        short: "Įvertinimas ir sprendimai (USB/SSD/HDD) bei prevencija.",
        bullets: ["Įvertinimas", "Perkėlimas", "Kopijų rekomendacijos"],
        price: "Nuo 35 €",
      },
      {
        id: "programavimas",
        title: "Programavimo paslaugos",
        category: "programavimas",
        icon: <FaCode />,
        badge: "Custom",
        short: "Svetainės, vidinės sistemos, automatizavimas, integracijos.",
        bullets: ["Landing / įmonės svetainė", "Formos + el. paštas", "API integracijos"],
        price: "Pagal projektą",
      },
    ],
    []
  );

  const [active, setActive] = useState("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const byCat = active === "all" ? services : services.filter((s) => s.category === active);
    const byQ =
      q.trim().length === 0
        ? byCat
        : byCat.filter((s) => (s.title + " " + s.short).toLowerCase().includes(q.toLowerCase()));
    return byQ;
  }, [services, active, q]);

  return (
    <div className="svc-page">
      {/* HERO */}
      <section className="svc-hero">
        <div className="svc-hero-inner">
          <div className="svc-hero-left">
            <div className="svc-pill">Jaja IT • Paslaugos</div>
            <h1>Modernūs IT sprendimai nuo A iki Z</h1>
            <p>
              Nuo kompiuterių remonto ir kasečių iki tinklų, kamerų ir programavimo.
              Aiškus procesas, greitas atsakas ir realūs sprendimai.
            </p>

            <div className="svc-hero-actions">
              <a className="btn primary" href="/kontaktai">
                Pateikti užklausą <FaArrowRight />
              </a>
              <a className="btn ghost" href="tel:+37052137307">Skambinti</a>
            </div>

            {/* SEARCH */}
            <div className="svc-search">
              <FaSearch className="svc-search-ic" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Ieškoti paslaugos… pvz. „remontas“, „Wi-Fi“, „kamera“"
              />
            </div>

            {/* FILTERS */}
            <div className="svc-filters">
              {categories.map((c) => (
                <button
                  key={c.key}
                  className={`chip ${active === c.key ? "active" : ""}`}
                  onClick={() => setActive(c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT GLASS CARD */}
          <div className="svc-hero-right">
            <div className="glass-card">
              <h3>Greita užklausa</h3>
              <p>Parašykite trumpai, atsakysime greitai.</p>

              <div className="glass-form">
                <input placeholder="Vardas" />
                <input placeholder="El. paštas" />
                <input placeholder="Telefonas (nebūtina)" />
                <textarea placeholder="Kuo galime padėti?" rows={4} />
                <a className="btn primary full" href="/kontaktai">
                  Siųsti užklausą <FaArrowRight />
                </a>
                <div className="fineprint">
                  * Ši forma yra dizaino demo. Vėliau prijungsim prie API + DB (exam-ready).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="svc-section">
        <div className="svc-section-head">
          <h2>Paslaugų katalogas</h2>
          <p>Pasirinkite kategoriją arba paiešką. Spauskite „Užklausa“ ir judam.</p>
        </div>

        <div className="svc-grid">
          {filtered.map((s) => (
            <article key={s.id} className="svc-card">
              <div className="svc-card-top">
                <div className="svc-ic">{s.icon}</div>
                <span className="badge">{s.badge}</span>
              </div>

              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.short}</p>

              <ul className="svc-list">
                {s.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>

              <div className="svc-card-bottom">
                <span className="svc-price">{s.price}</span>
                <a className="svc-cta" href="/kontaktai">
                  Užklausa <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="svc-section alt">
        <div className="svc-section-head">
          <h2>Kaip viskas vyksta</h2>
          <p>Aiškūs žingsniai – klientui paprasta, mums efektyvu.</p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Užklausa</h3>
            <p>Parašote arba paskambinate. Trumpai aprašote situaciją.</p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Įvertinimas</h3>
            <p>Įvertiname kainą/terminą ir pasiūlome optimalų sprendimą.</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Atlikimas</h3>
            <p>Atliekame darbus, testuojame, paaiškiname rezultatą.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-section">
        <div className="svc-section-head">
          <h2>Dažniausi klausimai</h2>
          <p>Trumpai ir aiškiai.</p>
        </div>

        <div className="faq">
          <details>
            <summary>Kiek kainuoja diagnostika?</summary>
            <p>Dažniausiai nuo 20 €, priklauso nuo įrenginio ir problemos sudėtingumo.</p>
          </details>
          <details>
            <summary>Ar atvykstate į biurą?</summary>
            <p>Taip, pagal susitarimą – ypač tinklų, kamerų ar įmonių priežiūros atvejais.</p>
          </details>
          <details>
            <summary>Ar darote programavimo darbus?</summary>
            <p>Taip: įmonių svetainės, formos, integracijos, vidinės sistemos.</p>
          </details>
        </div>
      </section>

      <style>{`
        /* ===== Base ===== */
        .svc-page { padding: 0 0 90px; }
        .svc-section { max-width: 1200px; margin: 0 auto; padding: 48px 20px; }
        .svc-section.alt { max-width: none; background: linear-gradient(180deg, rgba(47,170,67,0.08), rgba(0,0,0,0)); }
        .svc-section-head { display:flex; align-items:flex-end; justify-content:space-between; gap:16px; margin-bottom: 18px; }
        .svc-section-head h2 { margin:0; font-size: 28px; }
        .svc-section-head p { margin:0; color:#444; max-width: 520px; line-height: 1.6; }

        /* ===== HERO (modern) ===== */
        .svc-hero {
          position: relative;
          padding: 42px 0 34px;
          overflow: hidden;
          background:
            radial-gradient(900px 400px at 15% 10%, rgba(47,170,67,0.22), transparent 60%),
            radial-gradient(700px 400px at 85% 20%, rgba(47,170,67,0.16), transparent 60%),
            linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0));
        }
        .svc-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1.2fr 0.9fr;
          gap: 22px;
          align-items: start;
        }
        .svc-pill {
          display:inline-flex;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(47,170,67,0.12);
          color: #1f6f2b;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: .3px;
          border: 1px solid rgba(47,170,67,0.18);
        }
        .svc-hero h1 { margin: 14px 0 10px; font-size: 44px; line-height: 1.05; }
        .svc-hero p { margin: 0 0 16px; color:#3f3f3f; line-height: 1.7; max-width: 720px; }

        .svc-hero-actions { display:flex; gap: 12px; flex-wrap:wrap; margin-bottom: 16px; }
        .btn { display:inline-flex; align-items:center; gap:10px; padding: 10px 14px; border-radius: 12px; text-decoration:none; font-weight: 800; border: 1px solid transparent; }
        .btn.primary { background:#2faa43; color:#fff; box-shadow: 0 10px 30px rgba(47,170,67,0.22); }
        .btn.primary:hover { transform: translateY(-1px); }
        .btn.ghost { background:#fff; border-color:#e6e6e6; color:#111; }
        .btn.full { width: 100%; justify-content:center; }

        /* search */
        .svc-search {
          display:flex; align-items:center; gap: 10px;
          background:#fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 14px;
          padding: 10px 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }
        .svc-search-ic { opacity: .6; }
        .svc-search input {
          border: none; outline: none; width: 100%;
          font-size: 14px;
          background: transparent;
        }

        /* filters */
        .svc-filters { display:flex; gap: 10px; flex-wrap:wrap; margin-top: 14px; }
        .chip {
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          padding: 8px 12px;
          border-radius: 999px;
          cursor: pointer;
          font-weight: 700;
          font-size: 13px;
          transition: 160ms;
        }
        .chip:hover { transform: translateY(-1px); }
        .chip.active {
          background:#2faa43;
          border-color:#2faa43;
          color:#fff;
          box-shadow: 0 12px 28px rgba(47,170,67,0.22);
        }

        /* glass card */
        .glass-card {
          background: rgba(255,255,255,0.65);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 18px 45px rgba(0,0,0,0.10);
          backdrop-filter: blur(14px);
        }
        .glass-card h3 { margin: 0 0 6px; font-size: 18px; }
        .glass-card p { margin: 0 0 12px; color:#444; }
        .glass-form { display:flex; flex-direction:column; gap: 10px; }
        .glass-form input, .glass-form textarea {
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.10);
          padding: 10px 12px;
          outline: none;
          font-size: 14px;
          background: rgba(255,255,255,0.85);
        }
        .fineprint { font-size: 12px; opacity: .65; line-height: 1.4; }

        /* ===== Service Cards (modern) ===== */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 18px;
        }
        .svc-card {
          position: relative;
          border-radius: 18px;
          padding: 16px;
          border: 1px solid rgba(0,0,0,0.08);
          background:
            radial-gradient(420px 220px at 20% 0%, rgba(47,170,67,0.14), transparent 55%),
            #fff;
          box-shadow: 0 14px 40px rgba(0,0,0,0.08);
          transition: 180ms;
          overflow: hidden;
        }
        .svc-card:hover { transform: translateY(-4px); box-shadow: 0 22px 55px rgba(0,0,0,0.12); }
        .svc-card-top { display:flex; align-items:center; justify-content:space-between; margin-bottom: 10px; }
        .svc-ic {
          width: 44px; height: 44px;
          border-radius: 14px;
          display:flex; align-items:center; justify-content:center;
          background: rgba(47,170,67,0.12);
          color:#2faa43;
          box-shadow: inset 0 0 0 1px rgba(47,170,67,0.18);
          font-size: 18px;
        }
        .badge {
          font-size: 12px;
          font-weight: 800;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.06);
          color:#222;
        }
        .svc-title { margin: 0; font-size: 18px; }
        .svc-desc { margin: 8px 0 10px; color:#444; line-height: 1.55; }
        .svc-list { margin: 0; padding-left: 18px; color:#333; line-height: 1.55; }
        .svc-card-bottom {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(0,0,0,0.06);
          display:flex; align-items:center; justify-content:space-between;
        }
        .svc-price { font-weight: 900; }
        .svc-cta { display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-weight: 900; color:#2faa43; }
        .svc-cta:hover { text-decoration: underline; }

        /* ===== Steps ===== */
        .steps {
          max-width: 1200px;
          margin: 18px auto 0;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .step {
          border-radius: 18px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 14px 40px rgba(0,0,0,0.06);
          padding: 16px;
        }
        .step-num {
          width: 42px; height: 42px;
          border-radius: 14px;
          display:flex; align-items:center; justify-content:center;
          background:#2faa43;
          color:#fff;
          font-weight: 900;
          box-shadow: 0 12px 25px rgba(47,170,67,0.22);
          margin-bottom: 10px;
        }
        .step h3 { margin: 0 0 6px; }
        .step p { margin: 0; color:#444; line-height: 1.6; }

        /* ===== FAQ ===== */
        .faq { max-width: 1200px; margin: 18px auto 0; padding: 0 20px; }
        .faq details {
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.08);
          background: #fff;
          padding: 12px 14px;
          box-shadow: 0 12px 34px rgba(0,0,0,0.06);
          margin-top: 10px;
        }
        .faq summary { cursor:pointer; font-weight: 900; }
        .faq p { margin: 10px 0 0; color:#444; line-height: 1.6; }

        /* ===== Responsive ===== */
        @media (max-width: 1050px) {
          .svc-hero-inner { grid-template-columns: 1fr; }
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
          .steps { grid-template-columns: 1fr; }
          .svc-section-head { flex-direction: column; align-items:flex-start; }
        }
        @media (max-width: 640px) {
          .svc-hero h1 { font-size: 34px; }
          .svc-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
