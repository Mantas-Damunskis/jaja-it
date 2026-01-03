import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const load = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${API_URL}/api/admin/contacts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.error || "Nepavyko gauti žinučių");
        }

        setContacts(data.contacts || []);
      } catch (e) {
        setError(e.message || "Klaida");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [API_URL, navigate, token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleDelete = async (id) => {
    if (!confirm("Ištrinti šią žinutę?")) return;

    try {
      setDeletingId(id);

      const res = await fetch(`${API_URL}/api/admin/contacts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Nepavyko ištrinti");

      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch (e) {
      alert(e.message || "Klaida");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="page-container">
      <div className="admin-wrap">
        <div className="admin-topbar">
          <div>
            <h1 className="admin-title">Admin • Užklausos</h1>
            <p className="admin-sub">
              Čia matosi visos kontaktų formos užklausos (iš DB).
            </p>
          </div>

          <div className="admin-actions">
            <Link className="admin-btn ghost" to="/">
              Į pagrindinį
            </Link>
            <button className="admin-btn" onClick={handleLogout}>
              Atsijungti
            </button>
          </div>
        </div>

        {loading && <div className="admin-card">Kraunama...</div>}

        {!loading && error && (
          <div className="admin-card error">
            Klaida: {error}
            <div style={{ marginTop: 10, opacity: 0.9 }}>
              Patikrink: ar prisijungei? ar backend’e veikia /api/admin/contacts?
            </div>
          </div>
        )}

        {!loading && !error && contacts.length === 0 && (
          <div className="admin-card">Kol kas nėra žinučių.</div>
        )}

        {!loading && !error && contacts.length > 0 && (
          <div className="admin-grid">
            {contacts.map((c) => (
              <div className="admin-msg" key={c.id}>
                <div className="admin-msg-head">
                  <div>
                    <div className="admin-name">{c.name}</div>
                    <div className="admin-meta">
                      <span>{c.email}</span>
                      {c.phone ? <span> • {c.phone}</span> : null}
                    </div>
                  </div>

                  <button
                    className="admin-del"
                    onClick={() => handleDelete(c.id)}
                    disabled={deletingId === c.id}
                    title="Ištrinti"
                  >
                    {deletingId === c.id ? "..." : "✕"}
                  </button>
                </div>

                <div className="admin-body">{c.message}</div>

                <div className="admin-foot">
                  <span>
                    {c.created_at
                      ? new Date(c.created_at).toLocaleString()
                      : ""}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* styles only for this page */}
      <style>{`
        .admin-wrap{ max-width:1100px; margin:0 auto; padding:28px 16px 60px;}
        .admin-topbar{ display:flex; align-items:flex-end; justify-content:space-between; gap:18px; margin-bottom:18px;}
        .admin-title{ margin:0; font-size:28px; font-weight:800; }
        .admin-sub{ margin:6px 0 0; opacity:0.75; }
        .admin-actions{ display:flex; gap:10px; align-items:center;}
        .admin-btn{ border:0; padding:10px 14px; border-radius:12px; background:#2faa43; color:#fff; font-weight:700; cursor:pointer;}
        .admin-btn.ghost{ background:transparent; border:1px solid rgba(0,0,0,0.14); color:#111; text-decoration:none;}
        .admin-card{ background:#fff; border:1px solid rgba(0,0,0,0.08); border-radius:16px; padding:18px; box-shadow:0 10px 30px rgba(0,0,0,0.06);}
        .admin-card.error{ border-color: rgba(255,0,0,0.25); }
        .admin-grid{ display:grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap:14px; margin-top:14px;}
        @media (max-width: 900px){ .admin-grid{ grid-template-columns: 1fr; } .admin-topbar{ flex-direction:column; align-items:flex-start; } }
        .admin-msg{ background:#fff; border:1px solid rgba(0,0,0,0.08); border-radius:16px; padding:16px; box-shadow:0 10px 30px rgba(0,0,0,0.06);}
        .admin-msg-head{ display:flex; justify-content:space-between; gap:12px; align-items:flex-start;}
        .admin-name{ font-weight:800; font-size:16px; }
        .admin-meta{ margin-top:4px; font-size:13px; opacity:0.75;}
        .admin-body{ margin-top:12px; white-space:pre-wrap; line-height:1.45; }
        .admin-foot{ margin-top:12px; font-size:12px; opacity:0.65;}
        .admin-del{ width:34px; height:34px; border-radius:10px; border:1px solid rgba(0,0,0,0.12); background:#fff; cursor:pointer; font-weight:900;}
        .admin-del:disabled{ opacity:0.6; cursor:not-allowed;}
      `}</style>
    </div>
  );
}
