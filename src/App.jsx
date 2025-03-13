import React from "react";
import Layout from "./components/Layaut";

const App = () => {
  return (
    <Layout>
      <div className="container text-center mt-5">
        <h1 className="text-white">Bienvenido a Mi Sitio</h1>
        <p className="text-light">
          Explora nuestros servicios y descubre por qué somos tu mejor opción.
        </p>
        <button className="btn btn-primary mt-3">Ver más</button>
      </div>
    </Layout>
  );
};

export default App;
