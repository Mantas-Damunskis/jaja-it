export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <div className="service-title">{title}</div>
      {description && <p className="service-desc">{description}</p>}
    </div>
  );
}
