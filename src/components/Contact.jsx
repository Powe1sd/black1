import React from "react";

const Contact = () => {
  return (
    <section className="container py-5 text-center">
      <h2 className="display-4 mb-4 text-danger">Contacto</h2>

      <p className="lead   text-dark  ">
        ¡Estamos aquí para ayudarte! Contáctanos a través de los siguientes
        medios:
      </p>

      <div className="row g-4">
        {/* Teléfono */}
        <div className="col-md-4">
          <div className="card bg-dark border border-danger text-white shadow-lg p-3">
            <i className="bi bi-telephone fs-1 text-danger"></i>
            <h5 className="mt-3">Teléfono</h5>
            <p className="text-white">+57 305 207 6713</p>
          </div>
        </div>

        {/* Correo Electrónico */}
        <div className="col-md-4">
          <div className="card bg-dark border border-danger text-white shadow-lg p-3">
            <i className="bi bi-envelope fs-1 text-danger"></i>
            <h5 className="mt-3">Correo Electrónico</h5>
            <p className="text-white">brayan324554@gmail.com</p>
          </div>
        </div>

        {/* Ubicación */}
        <div className="col-md-4">
          <div className="card bg-dark border border-danger text-white shadow-lg p-3">
            <i className="bi bi-geo-alt fs-1 text-danger"></i>
            <h5 className="mt-3">Ubicación</h5>
            <p className="text-white">Armenia Quindio país Colombia</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <a
          href="mailto:contacto@futuratech.com"
          className="btn btn-danger mx-2"
        >
          Enviar Email
        </a>
        <a href="tel:+573001234567" className="btn btn-danger mx-2">
          Llamar Ahora
        </a>
      </div>
    </section>
  );
};

export default Contact;
