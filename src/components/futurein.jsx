import React from "react";

const FutureInnovations = () => {
  return (
    <section className="innovations-section py-5 bg-light text-dark">
      <div className="container">
        <h2 className="text-center display-4 mb-4">Innovaciones del Futuro</h2>

        <div className="row g-4">
          {/* Innovación 1 */}
          <div className="col-md-4">
            <div className="card text-center p-4 shadow">
              <i className="bi bi-robot fs-1 text-primary"></i>
              <h5 className="mt-3">Robots Autónomos</h5>
              <p>Inteligencia artificial avanzada para asistencia en la vida diaria.</p>
            </div>
          </div>

          {/* Innovación 2 */}
          <div className="col-md-4">
            <div className="card text-center p-4 shadow">
              <i className="bi bi-globe fs-1 text-success"></i>
              <h5 className="mt-3">Ciudades Inteligentes</h5>
              <p>Infraestructuras automatizadas y sostenibles para mejorar la vida urbana.</p>
            </div>
          </div>

          {/* Innovación 3 */}
          <div className="col-md-4">
            <div className="card text-center p-4 shadow">
              <i className="bi bi-rocket fs-1 text-danger"></i>
              <h5 className="mt-3">Exploración Espacial</h5>
              <p>Viajes interplanetarios y colonización de nuevos mundos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureInnovations;
