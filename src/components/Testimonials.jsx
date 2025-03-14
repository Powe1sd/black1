import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Carlos Méndez",
      text: "Esta tecnología ha cambiado por completo mi vida. ¡Es increíble lo que podemos hacer ahora!",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Ana González",
      text: "No pensé que veríamos avances tan rápido. La inteligencia artificial es sorprendente.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Luis Fernández",
      text: "El futuro ya está aquí. Me encanta la energía autosustentable y su impacto en el medio ambiente.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <section className="container py-5 text-center">
      <h2 className="display-4 mb-4">Testimonios</h2>
      <div className="row g-4">
        {reviews.map((review, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-lg p-3">
              <img
                src={review.image}
                alt={review.name}
                className="rounded-circle mx-auto d-block"
                width="80"
              />
              <h5 className="mt-3">{review.name}</h5>
              <p className="text-muted">"{review.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
