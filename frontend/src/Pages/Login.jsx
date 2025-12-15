import { useMemo, useState } from "react";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(true);

  const year = useMemo(() => new Date().getFullYear(), []);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: connect to backend later
    alert("Prisijungimas (demo) ✅");
  }

  return (
    <div className="auth-page">
      <div className="auth-shell">
        {/* Left promo */}
        <aside className="auth-aside">
          <div className="brand-pill">
            <span className="brand-dot" />
            <span>Jaja IT</span>
            <span className="brand-sub">• Jūsų vietiniai IT specialistai</span>
          </div>

          <h1 className="auth-heading">
            Prisijunkite prie <span className="accent">kliento zonos</span>
          </h1>

          <p className="auth-lead">
            Sekite užklausas, matykite paslaugų istoriją ir gaukite prioritetinę
            pagalbą.
          </p>

          <div className="auth-stats">
            <div className="stat">
              <div className="stat-num">24/7</div>
              <div className="stat-label">Greita reakcija</div>
            </div>
            <div className="stat">
              <div className="stat-num">Mažeikiai</div>
              <div className="stat-label">Atvykstame į vietą</div>
            </div>
            <div className="stat">
              <div className="stat-num">5+</div>
              <div className="stat-label">Paslaugų sritys</div>
            </div>
          </div>

          <div className="auth-footnote">© {year} Jaja IT, MB</div>
        </aside>

        {/* Right card */}
        <main className="auth-main">
          <div className="auth-card">
            <div className="auth-card-top">
              <h2>Prisijungti</h2>
              <p>Įveskite prisijungimo duomenis.</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
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
                <span>Slaptažodis</span>
                <div className="pass-wrap">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="ghost-btn"
                    onClick={() => setShowPass((v) => !v)}
                    aria-label="Rodyti/slėpti slaptažodį"
                  >
                    {showPass ? "Slėpti" : "Rodyti"}
                  </button>
                </div>
              </label>

              <div className="row">
                <label className="check">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span>Prisiminti mane</span>
                </label>

                <a className="link" href="/register">
                  Neturite paskyros?
                </a>
              </div>

              <button className="primary-btn" type="submit">
                Prisijungti
              </button>

              <div className="divider">
                <span>arba</span>
              </div>

              <button
                type="button"
                className="secondary-btn"
                onClick={() => alert("Atkurti slaptažodį (demo)")}
              >
                Pamiršau slaptažodį
              </button>

              <p className="tiny">
                Prisijungdami sutinkate su privatumo politika ir naudojimo
                taisyklėmis.
              </p>
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
    --card:#0f172a;
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
    max-width: 48ch;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.6;
  }

  .auth-stats{
    margin-top: 22px;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  .stat{
    border: 1px solid var(--stroke);
    background: rgba(255,255,255,.05);
    border-radius: 16px;
    padding: 14px 14px;
  }
  .stat-num{
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 4px;
  }
  .stat-label{
    font-size: 12px;
    color: var(--muted2);
  }

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

  .row{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap: 12px;
    margin: 6px 0 16px;
  }
  .check{
    display:flex;
    gap: 10px;
    align-items:center;
    color: rgba(255,255,255,.75);
    font-size: 12px;
  }
  .check input{
    width: 16px; height: 16px;
    accent-color: var(--green);
  }
  .link{
    color: rgba(255,255,255,.85);
    font-size: 12px;
    text-decoration: none;
    border-bottom: 1px dashed rgba(255,255,255,.3);
  }
  .link:hover{ color:#fff; }

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

  .divider{
    display:flex;
    align-items:center;
    gap: 12px;
    margin: 16px 0 12px;
    color: rgba(255,255,255,.55);
    font-size: 12px;
  }
  .divider::before, .divider::after{
    content:"";
    height:1px;
    flex:1;
    background: rgba(255,255,255,.12);
  }

  .secondary-btn{
    width:100%;
    padding: 12px 14px;
    border-radius: 14px;
    border: 1px solid var(--stroke);
    background: rgba(255,255,255,.05);
    color:#fff;
    cursor:pointer;
  }
  .secondary-btn:hover{ background: rgba(255,255,255,.08); }

  .tiny{
    margin: 12px 0 0;
    color: rgba(255,255,255,.45);
    font-size: 11px;
    line-height: 1.5;
  }

  @media (max-width: 980px){
    .auth-shell{ grid-template-columns: 1fr; }
    .auth-heading{ font-size: 34px; }
    .auth-footnote{ position:static; margin-top: 16px; }
  }
`;
