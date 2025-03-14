import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué servicios ofrecen?",
      answer:
        "Ofrecemos soluciones tecnológicas avanzadas, desarrollo web y consultoría digital.",
    },
    {
      question: "¿Cómo puedo contactarlos?",
      answer:
        "Puedes enviarnos un correo a brayanscoy@gmail.com o llamarnos al +305 207 6713.",
    },
    {
      question: "¿Tienen garantía en sus productos?",
      answer:
        "Sí, todos nuestros productos cuentan con una garantía de un  año.",
    },
  ];

  return (
    <section className="bg-black text-white py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-red-500 text-3xl font-bold mb-6">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-red-500 p-4 rounded-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index && (
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
