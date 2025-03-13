import React from "react";

const About = () => {
  return (
    <section className="about-section text-light py-5">
      <div className="container text-center">
        <h2 className="display-4 fw-bold">El Futuro Nos Espera</h2>
        <p className="lead">
          Exploramos la innovación, la inteligencia artificial y el poder de la
          tecnología para transformar el mundo. Bienvenidos a la era digital.
        </p>
        <div className="about-grid mt-4">
          <div className="about-item">
            <i className="bi bi-cpu-fill"></i>
            <h3>Inteligencia Artificial</h3>
            <p>
              La IA está revolucionando la forma en que interactuamos con la
              tecnología.
            </p>
          </div>
          <div className="about-item">
            <i className="bi bi-globe"></i>
            <h3>Conectividad Global</h3>
            <p>El mundo se une a través de redes más rápidas y eficientes.</p>
          </div>
          <div className="about-item">
            <i className="bi bi-rocket-takeoff-fill"></i>
            <h3>Exploración Espacial</h3>
            <p>
              El ser humano está más cerca que nunca de conquistar otros
              planetas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
