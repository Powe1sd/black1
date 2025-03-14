import React from "react";

const ExternalLink = () => {
  return (
    <section className="external-link-section py-5 bg-light text-dark text-center">
      <div className="container">
        <h2 className="display-4 mb-4">Explora Más</h2>
        <p className="lead">
          Descubre más información sobre tecnología futurista en el siguiente
          enlace:
        </p>
        <a
          href="https://elements.envato.com/es/c/3d" // Cambia la URL a la que desees
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg mt-3"
        >
          Abre el sitio web
        </a>
      </div>
    </section>
  );
};

export default ExternalLink;
