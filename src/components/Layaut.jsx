import React, { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Si el usuario baja, oculta la navbar
        setIsVisible(false);
      } else {
        // Si el usuario sube, muestra la navbar
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar con efecto de desaparecer al bajar */}
      <nav
        className={`navbar navbar-expand-lg bg-dark border-bottom fixed-top transition ${
          isVisible ? "visible" : "hidden"
        }`}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo o nombre TECH en rojo */}
          <a className="navbar-brand fw-bold text-danger fs-3" href="#">
            TECH
          </a>

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
                <a className="nav-link text-white" href="#">
                  ¿Por qué elegirnos?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Sobre nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  FAQ's
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="d-flex gap-3">
            <a href="#" className="text-white">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-tiktok"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="container my-4">{children}</main>

      {/* Estilos para la transición */}
      <style jsx>{`
        .transition {
          transition: transform 0.3s ease-in-out;
        }
        .hidden {
          transform: translateY(-100%);
        }
        .visible {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Layout;
