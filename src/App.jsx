import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

// Alojamientos
const alojamientos = {
  Hoteles: [
    { name: "Hotel Sol", description: "Céntrico y cómodo", contact: "543811234567", sponsor: "Oro", logo: "hotel-sol.png" },
    { name: "Hotel Luna", description: "Con piscina y desayuno", contact: "543811234568", sponsor: "Plata" }
  ],
  Hostales: [
    { name: "Hostal La Plaza", description: "Económico y familiar", contact: "543811234569", sponsor: "Bronce" }
  ],
  Carpas: [
    { name: "Camping Verde", description: "Espacios al aire libre", contact: "543811234570", sponsor: "Bronce" }
  ]
};

// Restaurantes y Bodegas
const comercios = {
  Restaurantes: [
    { name: "La Parrilla", description: "Comida regional", contact: "543811234571", sponsor: "Plata" },
    { name: "Bistró del Valle", description: "Menú gourmet", contact: "543811234572", sponsor: "Bronce" }
  ],
  Bodegas: [
    { name: "Bodega El Trigal", description: "Visitas y degustación de vinos", contact: "543811234573", sponsor: "Oro", logo: "bodega-trigal.png" }
  ]
};

// Servicios
const servicios = {
  Remises: [
    { name: "Remises Cafayate", description: "Servicio rápido y seguro", contact: "543811234574", sponsor: "Plata" }
  ],
  Guias: [
    { name: "Guía Turístico Local", description: "Tours personalizados", contact: "543811234575", sponsor: "Bronce" }
  ]
};

// Función para asignar color según sponsor
const sponsorColor = (level) => {
  switch(level) {
    case "Bronce": return "#a0522d"; // marrón
    case "Plata": return "#4a90e2"; // azul
    case "Oro": return "#f2c94c";   // amarillo
    default: return "#ccc";          // gris si no tiene
  }
};

function App() {
  return (
    <>
      <Header />
      <div id="root">
        <Section title="Alojamientos" items={alojamientos} sponsorColor={sponsorColor} />
        <Section title="Comercios" items={comercios} sponsorColor={sponsorColor} />
        <Section title="Servicios" items={servicios} sponsorColor={sponsorColor} />
      </div>
      <Footer />
    </>
  );
}

export default App;

