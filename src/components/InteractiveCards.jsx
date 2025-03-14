import React from "react";
import { motion } from "framer-motion";
import { Bolt, Code, Globe } from "lucide-react";

const items = [
  {
    icon: <Bolt size={50} className="text-red-500" />,
    title: "Velocidad",
    description: "Optimización y rendimiento extremo en cada proyecto.",
  },
  {
    icon: <Code size={50} className="text-red-500" />,
    title: "Código Moderno",
    description: "Utilizamos las mejores prácticas de desarrollo web.",
  },
  {
    icon: <Globe size={50} className="text-red-500" />,
    title: "Escalabilidad",
    description: "Sistemas preparados para crecer contigo.",
  },
];

const InteractiveCards = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-red-500 mb-12">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="border border-red-500 p-8 rounded-lg bg-gray-900 shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold text-center text-red-400 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-center mt-2">
                {item.description}
              </p>

              {/* Efecto de resplandor */}
              <motion.div
                className="absolute inset-0 bg-red-500 opacity-10 blur-xl"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveCards;
