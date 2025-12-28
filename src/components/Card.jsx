import './Card.css';

function Card({ name, description, contact, sponsor, logo }) {
  return (
    <div className={`card ${sponsor.toLowerCase()}`}>
      {logo && <img src={logo} alt={name} className="card-logo" />}
      <h3>{name} {sponsor === "Plata" || sponsor === "Oro" ? "✔️" : ""}</h3>
      {description && <p>{description}</p>}
      <a href={`https://wa.me/${contact}`} target="_blank" rel="noopener noreferrer">
        Contactar
      </a>
    </div>
  );
}

export default Card;
