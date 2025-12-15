import { useMemo, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

export default function Kontaktai() {
  const contact = useMemo(
    () => ({
      company: 'UAB "Jaja IT"',
      phone: "+370 521 37 307",
      email: "info@jaja.lt",
      address: "Draugystės g. 26, Mažeikiai, 89166 Mažeikių r. sav.",
      hours: [
        { d: "I–V", t: "08:00–17:00" },
        { d: "VI", t: "Nedirbame" },
        { d: "VII", t: "Nedirbame" },
      ],
      socials: [
        { name: "Facebook", href: "#" },
        { name: "LinkedIn", href: "#" },
      ],
      mapEmbed: `https://www.google.com/maps?q=Draugystės+g.+26,+Mažeikiai,+Lithuania&output=embed
`,
    }),
    []
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Kompiuterių remontas",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState("idle"); // idle | ok

  function update(key, value) {
    setForm((p) => ({ ...p, [key]: value }));
  }

 async function onSubmit(e) {
  e.preventDefault();

  // Front-end validation
  if (!form.name.trim()) return alert("Įveskite vardą.");
  if (!form.email.trim() || !form.email.includes("@")) return alert("Įveskite teisingą el. paštą.");
  if (!form.message.trim()) return alert("Parašykite žinutę.");
  if (!form.consent) return alert("Turite sutikti su privatumo politika.");

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        topic: form.topic,
        message: form.message,
      }),
    });

    if (!res.ok) {
      throw new Error("Nepavyko išsiųsti užklausos");
    }

    setStatus("ok");

    // optional: clear form after success
    setForm({
      name: "",
      email: "",
      phone: "",
      topic: "Kompiuterių remontas",
      message: "",
      consent: false,
    });

    setTimeout(() => setStatus("idle"), 3000);

  } catch (err) {
    alert("Klaida siunčiant užklausą. Bandykite dar kartą.");
    console.error(err);
  }
}


  return (
    <div className="k-page">
      {/* HERO */}
      <section className="k-hero">
        <div className="k-hero-inner">
          <div className="k-left">
            <div className="k-pill">Kontaktai • Jaja IT</div>
            <h1>Susisiekime greitai</h1>
            <p>
              Parašykite užklausą – atsakysime kuo greičiau. Taip pat galite skambinti arba
              atvykti pagal susitarimą.
            </p>

            <div className="k-actions">
              <a className="btn primary" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                Skambinti <FaArrowRight />
              </a>
              <a className="btn ghost" href={`mailto:${contact.email}`}>Rašyti el. paštu</a>
            </div>

            {/* Info cards */}
            <div className="k-cards">
              <div className="k-card">
                <div className="k-ic"><FaPhoneAlt /></div>
                <div>
                  <div className="k-label">Telefonas</div>
                  <div className="k-value">{contact.phone}</div>
                </div>
              </div>

              <div className="k-card">
                <div className="k-ic"><FaEnvelope /></div>
                <div>
                  <div className="k-label">El. paštas</div>
                  <div className="k-value">{contact.email}</div>
                </div>
              </div>

              <div className="k-card">
                <div className="k-ic"><FaMapMarkerAlt /></div>
                <div>
                  <div className="k-label">Adresas</div>
                  <div className="k-value">{contact.address}</div>
                </div>
              </div>

              <div className="k-card">
                <div className="k-ic"><FaClock /></div>
                <div>
                  <div className="k-label">Darbo laikas</div>
                  <div className="k-hours">
                    {contact.hours.map((h, i) => (
                      <div key={i} className="k-hour-row">
                        <span>{h.d}</span>
                        <span>{h.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* socials */}
            <div className="k-socials">
              <span>Social:</span>
              {contact.socials.map((s) => (
                <a key={s.name} href={s.href} className="k-social">
                  {s.name} <FaArrowRight />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: FORM (glass) */}
          <div className="k-right">
            <div className="k-glass">
              <div className="k-glass-head">
                <h2>Pateikti užklausą</h2>
                <p>Užpildykite formą – mes su jumis susisieksime.</p>
              </div>

              <form className="k-form" onSubmit={onSubmit}>
                <div className="k-row">
                  <div className="k-field">
                    <label>Vardas</label>
                    <input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </div>

                  <div className="k-field">
                    <label>El. paštas</label>
                    <input
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="k-row">
                  <div className="k-field">
                    <label>Telefonas (nebūtina)</label>
                    <input
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>

                  <div className="k-field">
                    <label>Tema</label>
                    <select
                      value={form.topic}
                      onChange={(e) => update("topic", e.target.value)}
                    >
                      <option>Kompiuterių remontas</option>
                      <option>Spausdintuvų kasetės</option>
                      <option>Tinklai / Wi-Fi</option>
                      <option>Kamerų įrengimas</option>
                      <option>Programavimas</option>
                      <option>Kita</option>
                    </select>
                  </div>
                </div>

                <div className="k-field">
                  <label>Žinutė</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Trumpai aprašykite problemą ar poreikį..."
                  />
                </div>

                <label className="k-consent">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                  />
                  Sutinku su privatumo politika
                </label>

                <button className="btn primary full" type="submit">
                  Siųsti <FaArrowRight />
                </button>

                {status === "ok" && (
                  <div className="k-success">
                    <FaCheckCircle /> Užklausa paruošta! (vėliau prijungsim prie API)
                  </div>
                )}

                
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="k-map">
        <div className="k-map-inner">
          <div className="k-map-head">
            <h2>Kur mus rasti</h2>
            <p>Raudonai pažymeta.</p>
          </div>

          <div className="k-map-frame">
            <iframe
              title="Jaja IT map"
              src={contact.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <style>{`
        /* ===== Base ===== */
        .k-page { padding: 0 0 80px; }
        .btn { display:inline-flex; align-items:center; gap:10px; padding: 10px 14px; border-radius: 12px; text-decoration:none; font-weight: 900; border: 1px solid transparent; }
        .btn.primary { background:#2faa43; color:#fff; box-shadow: 0 10px 30px rgba(47,170,67,0.22); }
        .btn.primary:hover { transform: translateY(-1px); }
        .btn.ghost { background:#fff; border-color:#e6e6e6; color:#111; }
        .btn.full { width: 100%; justify-content:center; }

        /* ===== HERO ===== */
        .k-hero {
          padding: 44px 0 34px;
          background:
            radial-gradient(900px 420px at 14% 12%, rgba(47,170,67,0.22), transparent 60%),
            radial-gradient(700px 420px at 85% 18%, rgba(47,170,67,0.14), transparent 60%),
            linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0));
        }
        .k-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 22px;
          align-items: start;
        }
        .k-pill {
          display:inline-flex;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(47,170,67,0.12);
          color: #1f6f2b;
          font-weight: 900;
          font-size: 12px;
          border: 1px solid rgba(47,170,67,0.18);
        }
        .k-left h1 { margin: 14px 0 10px; font-size: 44px; line-height: 1.05; }
        .k-left p { margin: 0 0 16px; color:#3f3f3f; line-height: 1.7; max-width: 720px; }
        .k-actions { display:flex; gap: 12px; flex-wrap:wrap; margin-bottom: 18px; }

        /* info cards */
        .k-cards {
          display:grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 16px;
        }
        .k-card {
          display:flex; align-items:flex-start; gap: 12px;
          border-radius: 18px;
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          box-shadow: 0 16px 44px rgba(0,0,0,0.08);
          padding: 14px;
        }
        .k-ic {
          width: 44px; height: 44px;
          border-radius: 14px;
          display:flex; align-items:center; justify-content:center;
          background: rgba(47,170,67,0.12);
          color:#2faa43;
          box-shadow: inset 0 0 0 1px rgba(47,170,67,0.18);
          font-size: 18px;
          flex: 0 0 auto;
        }
        .k-label { font-size: 12px; font-weight: 900; opacity: .7; }
        .k-value { font-size: 14px; font-weight: 800; color:#111; margin-top: 2px; }
        .k-hours { margin-top: 6px; display:flex; flex-direction:column; gap:6px; }
        .k-hour-row { display:flex; justify-content:space-between; gap: 10px; font-size: 13px; color:#333; }

        /* socials */
        .k-socials { margin-top: 14px; display:flex; gap: 12px; align-items:center; flex-wrap: wrap; }
        .k-socials span { font-weight: 900; opacity: .7; }
        .k-social { color:#2faa43; text-decoration:none; font-weight: 900; display:inline-flex; align-items:center; gap: 8px; }
        .k-social:hover { text-decoration: underline; }

        /* right glass form */
        .k-glass {
          background: rgba(255,255,255,0.66);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 18px 45px rgba(0,0,0,0.10);
          backdrop-filter: blur(14px);
        }
        .k-glass-head h2 { margin: 0 0 6px; font-size: 22px; }
        .k-glass-head p { margin: 0 0 12px; color:#444; line-height: 1.6; }
        .k-form { display:flex; flex-direction:column; gap: 12px; }
        .k-row { display:grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .k-field label { display:block; font-weight: 900; font-size: 12px; opacity: .75; margin: 0 0 6px; }
        .k-field input, .k-field select, .k-field textarea {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.10);
          padding: 10px 12px;
          outline: none;
          font-size: 14px;
          background: rgba(255,255,255,0.90);
        }
        .k-field textarea { resize: vertical; }
        .k-consent { display:flex; align-items:center; gap: 10px; font-size: 13px; font-weight: 800; opacity: .85; }
        .k-success { display:flex; align-items:center; gap: 10px; padding: 10px 12px; border-radius: 12px; background: rgba(47,170,67,0.12); color:#1f6f2b; font-weight: 900; border: 1px solid rgba(47,170,67,0.18); }
        .k-fine { font-size: 12px; opacity: .65; line-height: 1.4; }

        /* Map section */
        .k-map { padding: 44px 0 0; }
        .k-map-inner { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .k-map-head h2 { margin: 0 0 6px; font-size: 26px; }
        .k-map-head p { margin: 0 0 14px; color:#444; line-height: 1.6; }
        .k-map-frame {
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.10);
          background: #fff;
        }
        .k-map-frame iframe { width: 100%; height: 420px; border: 0; display:block; }

        /* responsive */
        @media (max-width: 1050px) {
          .k-hero-inner { grid-template-columns: 1fr; }
          .k-row { grid-template-columns: 1fr; }
          .k-cards { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .k-left h1 { font-size: 34px; }
        }
      `}</style>
    </div>
  );
}
