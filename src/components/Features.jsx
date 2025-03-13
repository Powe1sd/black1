import React from "react";

const Features = () => {
  return (
    <section className="features container text-center">
      <h2 className="text-glow">Características Futuristas</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="feature-card">
            <i className="bi bi-cpu"></i>
            <h3>IA Avanzada</h3>
            <p>Explora el poder de la inteligencia artificial.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-card">
            <i className="bi bi-gear-wide-connected"></i>
            <h3>Automatización</h3>
            <p>Optimiza tu vida con procesos automáticos.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-card">
            <i className="bi bi-globe"></i>
            <h3>Realidad Virtual</h3>
            <p>Sumérgete en experiencias 3D sin límites.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
