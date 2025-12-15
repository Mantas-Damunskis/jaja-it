import { useMemo, useState } from "react";

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [agree, setAgree] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!agree) {
      alert("Turite sutikti su privatumo politika ✅");
      return;
    }
    alert("Registracija (demo) ✅");
  }

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <aside className="auth-aside">
          <div className="brand-pill">
            <span className="brand-dot" />
            <span>Jaja IT</span>
            <span className="brand-sub">• Kliento zona</span>
          </div>

          <h1 className="auth-heading">
            Sukurkite <span className="accent">paskyrą</span>
          </h1>

          <p className="auth-lead">
            Užsiregistravę galėsite greičiau pateikti užklausas, matyti darbų
            statusą ir gauti pasiūlymus.
          </p>

          <ul className="bullets">
            <li>Greitesnis susisiekimas</li>
            <li>Užklausų istorija</li>
            <li>Prioritetinė pagalba</li>
          </ul>

          <div className="auth-footnote">© {year} Jaja IT, MB</div>
        </aside>

        <main className="auth-main">
          <div className="auth-card">
            <div className="auth-card-top">
              <h2>Registruotis</h2>
              <p>Užpildykite informaciją ir sukurkite paskyrą.</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="grid2">
                <label className="field">
                  <span>Vardas</span>
                  <input placeholder="pvz. Mantas" required />
                </label>

                <label className="field">
                  <span>Pavardė</span>
                  <input placeholder="pvz. Damunskis" required />
                </label>
              </div>

              <label className="field">
                <span>El. paštas</span>
                <input
                  type="email"
                  placeholder="pvz. vardas@imone.lt"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="field">
                <span>Telefonas</span>
                <input type="tel" placeholder="+370 ..." autoComplete="tel" />
              </label>

              <label className="field">
                <span>Slaptažodis</span>
                <div className="pass-wrap">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Sukurkite slaptažodį"
                    autoComplete="new-password"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    className="ghost-btn"
                    onClick={() => setShowPass((v) => !v)}
                  >
                    {showPass ? "Slėpti" : "Rodyti"}
                  </button>
                </div>
              </label>

              <label className="check big">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <span>
                  Sutinku su privatumo politika ir duomenų tvarkymu (BDAR).
                </span>
              </label>

              <button className="primary-btn" type="submit">
                Sukurti paskyrą
              </button>

              <div className="row center">
                <a className="link" href="/login">
                  Jau turite paskyrą? Prisijunkite
                </a>
              </div>
            </form>
          </div>
        </main>
      </div>

      <style>{styles}</style>
    </div>
  );
}

const styles = `
  :root{
    --green:#2faa43;
    --green2:#39c255;
    --bg:#0b1220;
    --muted:rgba(255,255,255,.7);
    --muted2:rgba(255,255,255,.55);
    --stroke:rgba(255,255,255,.12);
    --shadow: 0 18px 50px rgba(0,0,0,.45);
  }

  .auth-page{
    min-height: calc(100vh - 72px);
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 36px 18px;
    background:
      radial-gradient(1100px 500px at 25% 20%, rgba(47,170,67,.28), transparent 55%),
      radial-gradient(900px 520px at 75% 60%, rgba(57,194,85,.18), transparent 55%),
      linear-gradient(180deg, #070b14, #0b1220);
  }

  .auth-shell{
    width:min(1100px, 100%);
    display:grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 22px;
  }

  .auth-aside{
    color:#fff;
    padding: 34px 28px;
    border-radius: 22px;
    background:
      linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03)),
      radial-gradient(900px 420px at 10% 10%, rgba(47,170,67,.22), transparent 60%),
      radial-gradient(700px 380px at 90% 90%, rgba(57,194,85,.16), transparent 60%);
    border: 1px solid var(--stroke);
    box-shadow: var(--shadow);
    position:relative;
    overflow:hidden;
  }

  .brand-pill{
    display:inline-flex;
    gap:10px;
    align-items:center;
    padding:10px 12px;
    border-radius: 999px;
    border: 1px solid var(--stroke);
    background: rgba(255,255,255,.06);
    color: rgba(255,255,255,.9);
    font-weight: 600;
    font-size: 13px;
  }
  .brand-dot{
    width:10px;height:10px;border-radius:50%;
    background: linear-gradient(180deg, var(--green), var(--green2));
    box-shadow: 0 0 0 4px rgba(47,170,67,.18);
  }
  .brand-sub{ color: var(--muted2); font-weight: 500; }

  .auth-heading{
    margin: 18px 0 10px;
    font-size: 44px;
    line-height: 1.05;
    letter-spacing: -0.02em;
  }
  .accent{
    background: linear-gradient(90deg, #7cff9b, #2faa43);
    -webkit-background-clip:text;
    background-clip:text;
    color: transparent;
  }
  .auth-lead{
    margin: 0;
    max-width: 52ch;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.6;
  }

  .bullets{
    margin: 18px 0 0;
    padding-left: 18px;
    color: rgba(255,255,255,.8);
    line-height: 1.9;
    font-size: 13px;
  }
  .bullets li{ color: rgba(255,255,255,.75); }

  .auth-footnote{
    position:absolute;
    bottom: 14px;
    left: 20px;
    color: rgba(255,255,255,.45);
    font-size: 12px;
  }

  .auth-main{ display:flex; }
  .auth-card{
    width:100%;
    border-radius: 22px;
    background:
      linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.03)),
      rgba(15,23,42,.65);
    border: 1px solid var(--stroke);
    box-shadow: var(--shadow);
    overflow:hidden;
  }
  .auth-card-top{
    padding: 24px 22px 14px;
    border-bottom: 1px solid var(--stroke);
  }
  .auth-card-top h2{
    margin:0;
    color:#fff;
    font-size: 22px;
    letter-spacing: -0.01em;
  }
  .auth-card-top p{
    margin:8px 0 0;
    color: var(--muted2);
    font-size: 13px;
  }

  .auth-form{ padding: 18px 22px 22px; }
  .grid2{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .field{ display:block; margin-bottom: 14px; }
  .field span{
    display:block;
    color: rgba(255,255,255,.75);
    font-size: 12px;
    margin-bottom: 8px;
  }
  .field input{
    width:100%;
    padding: 12px 12px;
    border-radius: 14px;
    border: 1px solid var(--stroke);
    background: rgba(255,255,255,.06);
    color:#fff;
    outline:none;
    transition: border .2s, box-shadow .2s, background .2s;
  }
  .field input:focus{
    border-color: rgba(47,170,67,.55);
    box-shadow: 0 0 0 4px rgba(47,170,67,.16);
    background: rgba(255,255,255,.08);
  }

  .pass-wrap{
    display:flex;
    align-items:center;
    gap:10px;
  }
  .ghost-btn{
    white-space:nowrap;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid var(--stroke);
    background: rgba(255,255,255,.05);
    color: rgba(255,255,255,.8);
    cursor:pointer;
  }
  .ghost-btn:hover{ background: rgba(255,255,255,.08); }

  .check{
    display:flex;
    gap: 10px;
    align-items:flex-start;
    color: rgba(255,255,255,.75);
    font-size: 12px;
    margin: 10px 0 16px;
  }
  .check.big span{ line-height: 1.4; }
  .check input{
    margin-top: 3px;
    width: 16px; height: 16px;
    accent-color: var(--green);
  }

  .primary-btn{
    width:100%;
    padding: 12px 14px;
    border-radius: 14px;
    border: 0;
    background: linear-gradient(180deg, var(--green2), var(--green));
    color:#07110a;
    font-weight: 800;
    cursor:pointer;
    transition: transform .2s, box-shadow .2s;
    box-shadow: 0 12px 26px rgba(47,170,67,.22);
  }
  .primary-btn:hover{
    transform: translateY(-1px);
    box-shadow: 0 18px 34px rgba(47,170,67,.28);
  }

  .row{ margin-top: 14px; }
  .row.center{ text-align:center; }
  .link{
    color: rgba(255,255,255,.85);
    font-size: 12px;
    text-decoration: none;
    border-bottom: 1px dashed rgba(255,255,255,.3);
  }
  .link:hover{ color:#fff; }

  @media (max-width: 980px){
    .auth-shell{ grid-template-columns: 1fr; }
    .auth-heading{ font-size: 34px; }
    .auth-footnote{ position:static; margin-top: 16px; }
    .grid2{ grid-template-columns: 1fr; }
  }
`;
