import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de tener react-router-dom instalado

const ExploreMore = () => {
  return (
    <section className="explore-section py-5 bg-dark text-light text-center">
      <div className="container">
        <h2 className="display-4 text-danger">Explora el Futuro</h2>
        <p className="lead text-light">
          Descubre más sobre la tecnología que cambiará el mundo en los próximos años.
        </p>
        <Link to="/exploration" className="btn btn-primary btn-lg mt-3">
          Ir a la Exploración 🚀
        </Link>
      </div>
    </section>
  );
};

export default ExploreMore;
