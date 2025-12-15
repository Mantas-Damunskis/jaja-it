import { FaPrint, FaDesktop, FaTools, FaVideo } from "react-icons/fa";

// hero image
import heroImg from "../assets/images/home.png";

// modern service images
import printerImg from "../assets/images/printer.jpg";
import repairImg from "../assets/images/repair.jpg";
import pcImg from "../assets/images/pc.jpg";
import cctvImg from "../assets/images/cctv.jpg";
import codingImg from "../assets/images/coding.jpg";

export default function Home() {
  // OLD SERVICES (kept in code, but not rendered now)
  const services = [
    {
      id: 1,
      title: "SPAUDINTUVŲ KASETĖS",
      description: "Rinkinio parinkimas ir pristatymas jūsų biurui.",
      icon: <FaPrint />,
    },
    {
      id: 2,
      title: "KOMPIUTERINĖ ĮRANGA IR DALYS",
      description: "Kompiuterių, monitorių ir dalių tiekimas.",
      icon: <FaDesktop />,
    },
    {
      id: 3,
      title: "KOMPIUTERIŲ REMONTAS",
      description: "Diagnostika ir remontas biure arba dirbtuvėse.",
      icon: <FaTools />,
    },
    {
      id: 4,
      title: "STEBĖJIMO KAMERŲ ĮRENGIMAS",
      description: "Vaizdo stebėjimo sprendimai namams ir biurui.",
      icon: <FaVideo />,
    },
  ];

  // MODERN IMAGE BASED CARDS
  const modernServices = [
    {
      title: "Spausdintuvų kasetės",
      description: "Greitas kasečių parinkimas ir pristatymas.",
      image: printerImg,
      label: "Kasetės",
    },
    {
      title: "Kompiuterių remontas",
      description: "Diagnostika, taisymas ir dalių keitimas.",
      image: repairImg,
      label: "Remontas",
    },
    {
      title: "Kompiuterinė įranga",
      description: "Kompiuteriai, monitoriai ir visos dalys.",
      image: pcImg,
      label: "Įranga",
    },
    {
      title: "Kamerų įrengimas",
      description: "Profesionalūs vaizdo stebėjimo sprendimai.",
      image: cctvImg,
      label: "Apsauga",
    },
    {
      title: "Programavimo paslaugos",
      description: "Svetainės, sistemos ir individualūs sprendimai.",
      image: codingImg,
      label: "Programavimas",
    },
  ];

  // 5 FEATURE ITEMS
  const featureList = [
    {
      title: "Spausdintuvų kasečių parinkimas",
      desc: "Parenkame kasetes ir atliekame pristatymą bei konsultaciją.",
    },
    {
      title: "Kompiuterių diagnostika ir remontas",
      desc: "Šaliname gedimus, atnaujiname, keičiame dalis, spartiname darbą.",
    },
    {
      title: "Kompiuterinės įrangos komplektavimas",
      desc: "Tiekiame kompiuterius, monitorius, periferiją pagal poreikį.",
    },
    {
      title: "Tinklų konfiguravimas",
      desc: "Wi-Fi, maršrutizatoriai, ofiso/namų tinklai, saugus ryšys.",
    },
    {
      title: "Duomenų atkūrimas ir prevencija",
      desc: "Atkūrimas, kopijos, apsauga nuo praradimų ir virusų.",
    },
  ];

  return (
    <div className="page-container home-container">
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="heroShade" />
        <div className="heroInner">
          <div className="heroBadge">Jaja IT • Jūsų vietiniai IT specialistai</div>
          <h1 className="heroTitle">IT sprendimai jūsų verslui</h1>
          <p className="heroSub">
            Profesionalios IT priežiūros, remonto ir konsultacijų paslaugos jūsų biurui ar namams.
          </p>

          <div className="heroActions">
            <button className="btnPrimary">Gauti pasiūlymą</button>
            <button className="btnGhost">Susisiekti</button>
          </div>

          <div className="heroStats">
            <div className="stat">
              <div className="statNum">24/7</div>
              <div className="statLbl">Greita reakcija</div>
            </div>
            <div className="stat">
              <div className="statNum">5+</div>
              <div className="statLbl">Paslaugų sritys</div>
            </div>
            <div className="stat">
              <div className="statNum">Mažeikiai</div>
              <div className="statLbl">Atvykstame į vietą</div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL IT */}
      <section className="section">
        <div className="wrap specialGrid">
          <div className="specialLeft">
            <h2 className="h2">Kuo ypatinga Jaja IT priežiūra?</h2>
            <p className="p">
              Teikiame profesionalias IT priežiūros, remonto ir konsultacijų paslaugas, kad jūsų
              technika veiktų stabiliai ir patikimai. Fokusas – aiški komunikacija, greitas sprendimas
              ir prevencija.
            </p>

            <div className="specialCards">
              <div className="miniCard">
                <div className="miniTitle">Greitis</div>
                <div className="miniText">Reaguojame greitai, sprendžiame aiškiai.</div>
              </div>
              <div className="miniCard">
                <div className="miniTitle">Patikimumas</div>
                <div className="miniText">Sprendimai su paaiškinimu ir garantija.</div>
              </div>
              <div className="miniCard">
                <div className="miniTitle">Prevencija</div>
                <div className="miniText">Kad problemos nebegrįžtų.</div>
              </div>
            </div>
          </div>

          <div className="specialRight">
            <div className="tabs">
              <button className="tab active">IT priežiūros planai</button>
              <button className="tab">Įeinančios paslaugos</button>
              <button className="tab">Dažniausi klausimai</button>
            </div>

            <div className="panel">
              <div className="panelTitle">Trumpai apie planus</div>
              <div className="panelText">
                Galime pasiūlyti tiek vienkartinius darbus, tiek nuolatinę priežiūrą verslui:
                įrangos, tinklo, saugumo ir programinės įrangos sprendimai.
              </div>
              <button className="btnPrimary small">Peržiūrėti planus</button>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="wrap teamGrid">
          <div className="teamImage">
            <img src={heroImg} alt="Jaja IT komanda" />
          </div>
          <div className="teamText">
            <h2 className="h2">Jaja IT specialistų komanda</h2>
            <p className="p">
              Patyrę IT priežiūros specialistai padeda įmonėms efektyviai valdyti verslo technologijas
              – nuo diagnostikos iki saugumo ir modernių sprendimų diegimo.
            </p>
            <div className="checkRow">
              <span className="check">✓</span>
              <span>Atvykstame į vietą arba padedame nuotoliu</span>
            </div>
            <div className="checkRow">
              <span className="check">✓</span>
              <span>Aiškūs sprendimai ir konsultacija paprasta kalba</span>
            </div>
            <div className="checkRow">
              <span className="check">✓</span>
              <span>Verslui ir namams</span>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN CARDS (3 + 2) */}
      <section className="section">
        <div className="wrap">
          <div className="centerHead">
            <h2 className="h2">Mūsų paslaugos</h2>
            <p className="p subtle">Pasirinkite kryptį – pateiksime pasiūlymą ir padėsime įgyvendinti.</p>
          </div>

          <div className="cardsGrid">
            {modernServices.map((s, i) => (
              <div className={`svcCard ${i === 4 ? "spanCenter" : ""}`} key={i}>
                <div className="svcTop" style={{ backgroundImage: `url(${s.image})` }}>
                  <div className="svcTopShade" />
                </div>
                <div className="svcBody">
                  <div className="svcTitle">{s.title}</div>
                  <div className="svcDesc">{s.description}</div>
                  <div className="svcBottom">
                    <span className="pill">{s.label}</span>
                    <button className="btnLink">Plačiau →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES (5) */}
      <section className="section soft">
        <div className="wrap">
          <div className="centerHead">
            <h2 className="h2">IT priežiūrą sudaro</h2>
            <div className="underline" />
          </div>

          <div className="featuresGrid">
            {featureList.map((f, i) => (
              <div className="featCard" key={i}>
                <div className="featIcon">✓</div>
                <div>
                  <div className="featTitle">{f.title}</div>
                  <div className="featDesc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (FULL WIDTH) */}
      <footer className="footer">
        <div className="footerInner">
          <div className="footerCol">
            <div className="footerTitle">Naudinga</div>
            <div className="footerLine" />
            <ul className="footerList">
              <li>Mūsų istorija</li>
              <li>Pateikti užklausą</li>
              <li>Rekvizitai</li>
              <li>Naujienos</li>
              <li>Privatumo politika</li>
            </ul>
          </div>

          <div className="footerCol">
            <div className="footerTitle">Sekite mus</div>
            <div className="footerLine" />
            <div className="rowItem"><span className="ico">in</span> LinkedIn</div>
            <div className="rowItem"><span className="ico">f</span> Facebook</div>

            <div style={{ height: 18 }} />

            <div className="footerTitle">Kontaktai</div>
            <div className="footerLine" />
            <div className="rowItem">📞 +370 521 37 307</div>
            <div className="rowItem">✉ info@jaja.lt</div>
            <div className="rowItem">🏢 Jaja IT, MB</div>
          </div>

          <div className="footerCol">
            <div className="footerTitle">Sužinokite IT naujienas pirmi!</div>
            <div className="footerSub">Prenumeruokite mūsų naujienlaiškį</div>

            <input className="input" placeholder="Vardas" />
            <input className="input" placeholder="El. paštas" />

            <label className="checkBox">
              <input type="checkbox" />
              <span>Sutinku su privatumo politika</span>
            </label>

            <button className="footerBtn">Užsisakyti</button>
          </div>
        </div>

        <div className="footerBottom">
          © {new Date().getFullYear()} Jaja IT • Visos teisės saugomos
        </div>
      </footer>

      {/* ALL STYLES (INLINE, so nothing else to edit) */}
      <style>{`
        :root{
          --green:#2faa43;
          --green2:#1f8f35;
          --text:#121212;
          --muted:#5a5f67;
          --bg:#ffffff;
          --soft:#f6f7f9;
          --card:#ffffff;
          --shadow: 0 10px 30px rgba(0,0,0,.12);
          --shadow2: 0 14px 40px rgba(0,0,0,.16);
          --radius:18px;
        }

        .wrap{
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section{ padding: 70px 0; }
        .section.soft{ background: var(--soft); }

        .h2{
          font-size: clamp(24px, 2.2vw, 34px);
          line-height: 1.15;
          margin: 0 0 12px;
          color: var(--text);
          font-weight: 800;
          letter-spacing: -.02em;
        }

        .p{
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 16px;
        }

        .p.subtle{ opacity: .9; }

        .centerHead{
          text-align: center;
          margin-bottom: 28px;
        }

        .underline{
          width: 84px;
          height: 4px;
          margin: 14px auto 0;
          border-radius: 20px;
          background: linear-gradient(90deg, var(--green), rgba(47,170,67,.2));
        }

        /* HERO */
        .hero{
          position: relative;
          min-height: 560px;
          background-size: cover;
          background-position: center;
          border-radius: 0 0 28px 28px;
          overflow: hidden;
        }
        .heroShade{
          position:absolute; inset:0;
          background:
            radial-gradient(1200px 600px at 10% 40%, rgba(0,0,0,.65), transparent 60%),
            linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,.25), rgba(0,0,0,.35));
        }
        .heroInner{
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 90px 24px 70px;
          color: #fff;
        }
        .heroBadge{
          display: inline-flex;
          gap: 10px;
          align-items: center;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.22);
          font-weight: 600;
          font-size: 13px;
          backdrop-filter: blur(8px);
          margin-bottom: 16px;
        }
        .heroTitle{
          font-size: clamp(34px, 4vw, 56px);
          margin: 0 0 12px;
          letter-spacing: -.03em;
          font-weight: 900;
          text-shadow: 0 8px 30px rgba(0,0,0,.35);
        }
        .heroSub{
          max-width: 680px;
          font-size: 17px;
          line-height: 1.6;
          opacity: .95;
          margin: 0 0 22px;
          text-shadow: 0 8px 24px rgba(0,0,0,.28);
        }
        .heroActions{
          display:flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }
        .btnPrimary{
          background: linear-gradient(180deg, var(--green), var(--green2));
          color: #fff;
          border: none;
          padding: 12px 18px;
          border-radius: 12px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 10px 22px rgba(47,170,67,.35);
        }
        .btnPrimary.small{ padding: 10px 14px; border-radius: 10px; font-weight: 800; }
        .btnPrimary:hover{ transform: translateY(-1px); }

        .btnGhost{
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.25);
          color: #fff;
          padding: 12px 18px;
          border-radius: 12px;
          font-weight: 800;
          cursor: pointer;
          backdrop-filter: blur(8px);
        }

        .heroStats{
          display:flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 10px;
        }
        .stat{
          min-width: 160px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255,255,255,.10);
          border: 1px solid rgba(255,255,255,.20);
          backdrop-filter: blur(8px);
        }
        .statNum{ font-weight: 900; font-size: 18px; }
        .statLbl{ opacity: .9; font-size: 13px; margin-top: 2px; }

        /* SPECIAL GRID */
        .specialGrid{
          display:grid;
          grid-template-columns: 1.35fr .9fr;
          gap: 26px;
          align-items: start;
        }
        .specialCards{
          margin-top: 18px;
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .miniCard{
          background: var(--card);
          border: 1px solid rgba(0,0,0,.06);
          border-radius: 14px;
          padding: 14px;
          box-shadow: 0 10px 22px rgba(0,0,0,.06);
        }
        .miniTitle{
          font-weight: 900;
          margin-bottom: 6px;
          color: var(--text);
        }
        .miniText{
          color: var(--muted);
          font-size: 13px;
          line-height: 1.5;
        }

        .tabs{
          display:grid;
          gap: 10px;
        }
        .tab{
          text-align:left;
          width: 100%;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,.08);
          background: #fff;
          cursor: pointer;
          font-weight: 800;
          color: var(--text);
          box-shadow: 0 10px 22px rgba(0,0,0,.06);
        }
        .tab.active{
          border-color: rgba(47,170,67,.35);
          background: linear-gradient(180deg, rgba(47,170,67,.14), rgba(47,170,67,.06));
        }

        .panel{
          margin-top: 12px;
          padding: 18px;
          border-radius: 16px;
          background: #fff;
          border: 1px solid rgba(0,0,0,.08);
          box-shadow: 0 10px 22px rgba(0,0,0,.06);
        }
        .panelTitle{ font-weight: 900; margin-bottom: 8px; }
        .panelText{ color: var(--muted); line-height: 1.6; margin-bottom: 14px; }

        /* TEAM */
        .teamGrid{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: center;
        }
        .teamImage img{
          width: 100%;
          height: 340px;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: var(--shadow);
        }
        .checkRow{
          display:flex;
          gap: 10px;
          align-items: flex-start;
          margin-top: 10px;
          color: var(--muted);
        }
        .check{
          color: var(--green);
          font-weight: 900;
        }

        /* SERVICES CARDS */
        .cardsGrid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .svcCard{
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,.08);
          box-shadow: var(--shadow);
          transition: transform .2s, box-shadow .2s;
        }
        .svcCard:hover{
          transform: translateY(-6px);
          box-shadow: var(--shadow2);
        }
        .svcTop{
          height: 150px;
          background-size: cover;
          background-position: center;
          position: relative;
          border-bottom-left-radius: 40% 28%;
          border-bottom-right-radius: 40% 28%;
        }
        .svcTopShade{
          position:absolute; inset:0;
          background: linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.18));
        }
        .svcBody{
          padding: 16px 16px 14px;
        }
        .svcTitle{
          font-weight: 900;
          color: var(--text);
          margin-bottom: 6px;
          font-size: 17px;
        }
        .svcDesc{
          color: var(--muted);
          font-size: 14px;
          line-height: 1.55;
          min-height: 44px;
        }
        .svcBottom{
          display:flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 12px;
        }
        .pill{
          background: linear-gradient(180deg, var(--green), var(--green2));
          color: #fff;
          font-weight: 900;
          font-size: 12px;
          padding: 7px 12px;
          border-radius: 999px;
          box-shadow: 0 10px 18px rgba(47,170,67,.25);
        }
        .btnLink{
          background: transparent;
          border: none;
          color: var(--green2);
          font-weight: 900;
          cursor: pointer;
        }

        /* this makes the 5th card sit on the 2nd row centered nicely */
        .spanCenter{
          grid-column: 2 / 3;
        }

        /* FEATURES */
        .featuresGrid{
          display:grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 26px;
        }
        .featCard{
          background:#fff;
          border-radius: 18px;
          border: 1px solid rgba(0,0,0,.08);
          box-shadow: 0 10px 22px rgba(0,0,0,.06);
          padding: 18px;
          display:flex;
          gap: 12px;
          align-items: flex-start;
        }
        .featIcon{
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: 900;
          color: #fff;
          background: linear-gradient(180deg, var(--green), var(--green2));
          box-shadow: 0 10px 18px rgba(47,170,67,.25);
          flex: 0 0 auto;
        }
        .featTitle{
          font-weight: 900;
          margin-bottom: 6px;
          color: var(--text);
        }
        .featDesc{
          color: var(--muted);
          line-height: 1.55;
          font-size: 14px;
        }

        /* FOOTER (FULL WIDTH) */
        .footer{
          width: 100%;
          background: #f4f4f4;
          padding: 60px 0 18px;
          margin-top: 70px;
        }
        .footerInner{
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
        }
        .footerTitle{
          font-weight: 900;
          font-size: 20px;
          color: #111;
        }
        .footerSub{
          margin-top: 8px;
          color: var(--muted);
        }
        .footerLine{
          height: 1px;
          width: 100%;
          background: rgba(0,0,0,.15);
          margin: 12px 0 16px;
        }
        .footerList{
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
          color: #222;
        }
        .footerList li{
          cursor: pointer;
          color: #222;
        }
        .rowItem{
          display:flex;
          align-items:center;
          gap: 10px;
          margin: 10px 0;
          color: #222;
        }
        .ico{
          width: 26px;
          height: 26px;
          border-radius: 8px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: 900;
          color: #fff;
          background: #0a66c2;
        }
        .rowItem:nth-child(4) .ico{ background: #1877f2; }

        .input{
          width: 100%;
          margin-top: 10px;
          padding: 12px 12px;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,.18);
          outline: none;
          font-size: 15px;
          background: #fff;
        }
        .checkBox{
          display:flex;
          gap: 10px;
          align-items:center;
          margin-top: 12px;
          color: var(--muted);
          font-size: 14px;
        }
        .footerBtn{
          margin-top: 14px;
          width: 100%;
          padding: 14px 0;
          border-radius: 10px;
          background: #000;
          color: #fff;
          font-weight: 900;
          border: none;
          cursor: pointer;
        }
        .footerBtn:hover{ background: #222; }

        .footerBottom{
          max-width: 1200px;
          margin: 28px auto 0;
          padding: 14px 24px 0;
          color: rgba(0,0,0,.55);
          border-top: 1px solid rgba(0,0,0,.12);
          font-size: 13px;
        }

        /* RESPONSIVE */
        @media (max-width: 980px){
          .specialGrid{ grid-template-columns: 1fr; }
          .specialCards{ grid-template-columns: 1fr; }
          .teamGrid{ grid-template-columns: 1fr; }
          .teamImage img{ height: 280px; }
          .cardsGrid{ grid-template-columns: repeat(2, 1fr); }
          .spanCenter{ grid-column: auto; }
          .featuresGrid{ grid-template-columns: 1fr; }
          .footerInner{ grid-template-columns: 1fr; }
        }
        @media (max-width: 560px){
          .cardsGrid{ grid-template-columns: 1fr; }
          .hero{ min-height: 560px; border-radius: 0 0 22px 22px; }
        }
      `}</style>
    </div>
  );
}
