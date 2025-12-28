import Header from './components/Header';
import Section from './components/Section';

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
const restaurantes = {
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
  Guías: [
    { name: "Guía Turístico Local", description: "Tours personalizados", contact: "543811234575", sponsor: "Bronce" }
  ]
};

function App() {
  return (
    <>
      <Header />
      <div id="root">
        <Section title="Alojamientos" items={alojamientos} />
        <Section title="Restaurantes y Bodegas" items={restaurantes} />
        <Section title="Servicios" items={servicios} />
      </div>
    </>
  );
}

export default App;
