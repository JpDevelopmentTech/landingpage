import React from "react";

// Datos de ejemplo para los testimonios
const testimonials = [
  {
    id: 1,
    name: "Ana Rivera",
    position: "Directora de Marketing",
    testimonial:
      "Gracias al equipo increíble, mi empresa ha visto un crecimiento significativo en los últimos meses. ¡Recomendado!",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Juan Pérez",
    position: "CEO",
    testimonial:
      "Este producto superó mis expectativas. El soporte es excelente y siempre dispuestos a ayudar.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Laura García",
    position: "Gerente de Proyectos",
    testimonial:
      "Un servicio excepcional, y la calidad del producto es consistente. ¡Sigan así!",
    image: "https://via.placeholder.com/150",
  },

  {
    id: 4,
    name: "Carlos Pérez",
    position: "Desarrollador",
    testimonial:
      "Me encanta trabajar con ustedes. Siempre entregan a tiempo y la calidad es excelente.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Carlos Pérez",
    position: "Desarrollador",
    testimonial:
      "Me encanta trabajar con ustedes. Siempre entregan a tiempo y la calidad es excelente.",
    image: "https://via.placeholder.com/150",
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 mb-36 bg-black">
      <div
        role="main"
        className="flex flex-col items-center justify-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-black  leading-9 text-center text-primary ">
          Testimonios
        </h2>
        <p className="text-xl leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          Conoce las experiencias de nuestros clientes satisfechos con nuestro
          trabajo.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-10 w-full overflow-x-auto snap-x">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-default-100/50 shadow-lg rounded-lg p-8 flex flex-col items-center justify-between md:min-w-[33%]
                snap-center
              "
            >
              <p className="text-center text-white text-xl">
                {testimonial.testimonial}
              </p>
              <p className="text-center text-primary text-lg mt-4">
                {testimonial.name}, {testimonial.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
