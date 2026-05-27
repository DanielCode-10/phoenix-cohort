import { useState, useEffect } from "react";

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => res.json())
      .then((data) => setPlanets(data));
  }, []);

  return (
    <section className="planets-section" id="planets">
      <h2>Our Solar System</h2>
      <div className="planets-grid">
        {planets.map((p) => (
          <div className="planet-card" key={p.planet}>
            <figure>
              <img src={p.image} alt={p.planet} />
              <figcaption>
                {p.planet}
                <span>{p.distanceFromSun} million km from the Sun</span>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Planets;