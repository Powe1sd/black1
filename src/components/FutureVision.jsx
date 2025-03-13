import React from "react";

const FutureVision = () => {
  return (
    <section className="vision-section py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center display-4 mb-4 text-primary">
          Visión del Futuro
        </h2>
        <p className="text-center lead text-light">
          Imagina un mundo donde la tecnología y la humanidad evolucionan juntas
          para un futuro mejor.
        </p>

        <div className="row g-4 mt-4">
          {/* Tarjeta 1 */}
          <div className="col-md-4">
            <div className="card bg-transparent border-light text-center p-4">
              <i className="bi bi-lightbulb fs-1 text-warning"></i>
              <h5 className="mt-3 text-danger">Energía Renovable</h5>
              <p className="text-light">
                Fuentes de energía limpias e ilimitadas impulsando el planeta.
              </p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="col-md-4">
            <div className="card bg-transparent border-light text-center p-4">
              <i className="bi bi-hospital fs-1 text-info"></i>
              <h5 className="mt-3 text-danger">Medicina Avanzada</h5>
              <p className="text-light">
                Curación de enfermedades mediante nanotecnología y genética.
              </p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="col-md-4">
            <div className="card bg-transparent border-light text-center p-4">
              <i className="bi bi-wifi fs-1 text-success"></i>
              <h5 className="mt-3 text-danger">Conectividad Global</h5>
              <p className="text-light">
                Internet accesible en cada rincón del planeta con redes
                satelitales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
