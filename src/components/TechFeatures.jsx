import React from "react";

const TechFeatures = () => {
  return (
    <section className="tech-section py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center display-4 mb-4">
          Características Futuristas
        </h2>

        <div className="row g-4">
          {/* Característica 1 */}
          <div className="col-md-4">
            <div className="card bg-transparent border-danger text-center p-4">
              <i className="bi bi-cpu fs-1 text-info"></i>
              <h5 className="mt-3 text-danger">Procesadores Cuánticos</h5>
              <p className="text-white">
                Computación ultrarrápida con inteligencia artificial avanzada.
              </p>
            </div>
          </div>

          {/* Característica 2 */}
          <div className="col-md-4">
            <div className="card bg-transparent border-danger text-center p-4">
              <i className="bi bi-eye fs-1 text-warning"></i>
              <h5 className="mt-3 text-danger">Realidad Aumentada</h5>
              <p className="text-light">
                Experiencias inmersivas en la vida cotidiana y el
                entretenimiento.
              </p>
            </div>
          </div>

          {/* Característica 3 */}
          <div className="col-md-4">
            <div className="card bg-transparent border-danger text-center p-4">
              <i className="bi bi-battery-charging fs-1 text-success"></i>
              <h5 className="mt-3 text-danger">Energía Infinita</h5>
              <p className="text-light">
                Tecnología de baterías autosustentables y carga instantánea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFeatures;
