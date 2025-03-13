import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark border-bottom">
        <div className="container">
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">¿Por qué elegirnos?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Sobre nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">FAQ's</a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="d-flex gap-3">
            <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white"><i className="bi bi-tiktok"></i></a>
            <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="container my-4">{children}</main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
