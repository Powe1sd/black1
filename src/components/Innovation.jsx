import React from "react";

const Innovation = () => {
  return (
    <section className="innovation-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-4 mb-4">Innovaciones Tecnológicas</h2>
        
        <div className="row g-4">
          {/* Innovación 1 */}
          <div className="col-md-4">
            <div className="card text-center p-4 shadow border-0">
              <i className="bi bi-robot fs-1 text-primary"></i>
              <h5 className="mt-3">Robots Autónomos</h5>
              <p>Asistentes inteligentes con capacidades de aprendizaje automático y toma de decisiones.</p>
            </div>
          </div>

          {/* Innovación 2 */}
          <div className="col-md-4">
            <div className="card text-center p-4 shadow border-0">
              <i className="bi bi-globe fs-1 text-success"></i>
              <h5 className="mt-3">Internet Cuántico</h5>
              <p>Conexiones ultra rápidas y seguras basadas en la mecánica cuántica.</p>
            </div>
          </div>

          {/* Innovación 3 */}
          <div className="col-md-4">
            <div className="card text-center p-4 shadow border-0">
              <i className="bi bi-hospital fs-1 text-danger"></i>
              <h5 className="mt-3">Medicina Nanotecnológica</h5>
              <p>Nanobots que detectan y reparan células dañadas desde el interior del cuerpo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
