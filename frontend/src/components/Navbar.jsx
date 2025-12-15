import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO SECTION */}
        <div className="navbar-left">
          <img src={logo} alt="Jaja IT Logo" className="navbar-logo" />
          <div className="navbar-text">
            <div className="logo-text-main">Jaja IT</div>
            <div className="logo-text-sub">Jūsų vietiniai IT specialistai</div>
          </div>
        </div>

        {/* MAIN LINKS */}
        <nav className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "is-active" : "")}>
            Pradžia
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "is-active" : "")}>
            Paslaugos
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "is-active" : "")}>
            Kontaktai
          </NavLink>
        </nav>

        {/* AUTH BUTTONS */}
        <div className="navbar-auth">
          <Link to="/login" className="nav-btn">
            Prisijungti
          </Link>
          <Link to="/register" className="nav-btn filled">
            Registruotis
          </Link>
        </div>
      </div>

      <div className="navbar-accent" />

      {/* NAVBAR STYLES ONLY (kept here so it won't mess with Home.jsx) */}
      <style>{`
        .navbar{
          width:100%;
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,.06);
          position: sticky;
          top:0;
          z-index: 100;
        }

        .navbar-container{
          max-width: 1300px;
          margin: 0 auto;
          padding: 12px 40px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 18px;
        }

        .navbar-left{
          display:flex;
          align-items:center;
          gap: 12px;
          min-width: 240px;
        }

        .navbar-logo{
          height: 44px;
          width:auto;
        }

        .navbar-text{
          display:flex;
          flex-direction:column;
          line-height: 1.1;
        }

        .logo-text-main{
          font-weight: 800;
          letter-spacing: .2px;
          font-size: 1.1rem;
          color: #101010;
        }

        .logo-text-sub{
          font-size: .82rem;
          color: rgba(0,0,0,.60);
          margin-top: 2px;
        }

        .navbar-links{
          display:flex;
          align-items:center;
          gap: 26px;
          font-size: .95rem;
        }

        .navbar-links a{
          position: relative;
          color: rgba(0,0,0,.72);
          text-decoration: none;
          padding: 8px 2px;
          transition: .2s ease;
        }

        .navbar-links a:hover{
          color: #2faa43;
        }

        .navbar-links a.is-active{
          color: #121212;
          font-weight: 700;
        }

        .navbar-links a.is-active::after{
          content:"";
          position:absolute;
          left:0;
          right:0;
          bottom:-6px;
          height: 3px;
          border-radius: 999px;
          background: #2faa43;
        }

        .navbar-auth{
          display:flex;
          gap: 10px;
          align-items:center;
          min-width: 220px;
          justify-content: flex-end;
        }

        .nav-btn{
          padding: 9px 16px;
          border: 1px solid rgba(47,170,67,.55);
          border-radius: 999px;
          background: rgba(255,255,255,.9);
          color: #2faa43;
          font-size: .86rem;
          font-weight: 700;
          text-decoration: none;
          transition: .2s ease;
          box-shadow: 0 6px 18px rgba(0,0,0,.05);
        }

        .nav-btn:hover{
          transform: translateY(-1px);
          box-shadow: 0 12px 26px rgba(0,0,0,.08);
          background: rgba(240,255,243,.9);
        }

        .nav-btn.filled{
          background: #2faa43;
          color: white;
          border-color: #2faa43;
        }

        .nav-btn.filled:hover{
          background: #249a3a;
        }

        .navbar-accent{
          width:100%;
          height: 4px;
          background: linear-gradient(90deg, #2faa43, #5be07a, #2faa43);
        }

        @media (max-width: 900px){
          .navbar-container{
            padding: 12px 18px;
          }
          .navbar-links{
            display:none;
          }
        }
      `}</style>
    </header>
  );
}
