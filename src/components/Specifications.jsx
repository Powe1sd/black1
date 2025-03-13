import React from "react";

const Specifications = () => {
  return (
    <section className="specifications-section py-5">
      <div className="container">
        <h2 className="text-center display-4 mb-4">Especificaciones Futuristas</h2>
        
        <div className="row g-4">
          {/* Especificación 1 */}
          <div className="col-md-4">
            <div className="card text-center p-4 shadow">
              <i className="bi bi-cpu fs-1 text-primary"></i>
              <h5 className="mt-3">Procesador Cuántico</h5>
              <p>Unidades de procesamiento ultra-rápidas con inteligencia artificial integrada.</p>
            </div>
          </div>

          {/* Especificación 2 */}
          <div className="col-md-4">
            <div className="card text-center p-4 shadow">
              <i className="bi bi-battery-charging fs-1 text-success"></i>
              <h5 className="mt-3">Batería Infinita</h5>
              <p>Alimentada por energía solar y cinética para un uso ilimitado.</p>
            </div>
          </div>

          {/* Especificación 3 */}
          <div className="col-md-4">
            <div className="card text-center p-4 shadow">
              <i className="bi bi-shield-lock fs-1 text-danger"></i>
              <h5 className="mt-3">Seguridad Biométrica</h5>
              <p>Acceso con ADN y reconocimiento facial avanzado para máxima protección.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
