import Card from '../Card';
import './Section.css';

function Section({ title, items }) {
  return (
    <section>
      <h2>{title}</h2>
      {Object.keys(items).map(subcat => (
        <div key={subcat}>
          <h3>{subcat}</h3>
          <div className="section-cards">
            {/* Ordenar sponsors: Oro → Plata → Bronce */}
            {items[subcat]
              .sort((a, b) => {
                const order = { Oro: 0, Plata: 1, Bronce: 2 };
                return order[a.sponsor] - order[b.sponsor];
              })
              .map((item, idx) => (
                <Card key={idx} {...item} />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Section;
