import React from "react"; // Importa React para poder crear el componente

import img1 from "../img/img1.jpg"; // Importa la primera imagen local
import img2 from "../img/img2.jpg"; // Importa la segunda imagen local
import img3 from "../img/img3.jpg"; // Importa la tercera imagen

const Gallery = () => {
  return (
    // Sección de la galería con fondo oscuro y texto en color claro
    <section className="gallery-section py-5 bg-dark text-light">
      <div className="container">
        {/* Título centrado de la galería */}
        <h2 className="text-center display-4 mb-4">Galería Futurista</h2>

        <div className="row g-4">
          {/* Primera imagen (importada localmente) */}
          <div className="col-md-4">
            <div className="card">
              <img
                src={img1}
                className="card-img-top img-fluid custom-img"
                alt="Imagen 1"
              />
            </div>
          </div>

          {/* Segunda imagen (importada localmente) */}
          <div className="col-md-4">
            <div className="card">
              <img
                src={img2}
                className="card-img-top img-fluid custom-img"
                alt="Imagen 2"
              />
            </div>
          </div>

          {/* Tercera imagen (importada localmente) */}
          <div className="col-md-4">
            <div className="card">
              <img
                src={img3}
                className="card-img-top img-fluid custom-img"
                alt="Imagen 3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
