import React from "react";

// Datos de ejemplo para los testimonios

const Testimonials = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8" id="testimonials">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,#38B6FF,black)] opacity-20" />
   
    <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <figure className="mt-10">
        <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
          <p>
          Gracias al equipo increíble, mi empresa ha visto un crecimiento significativo en los últimos meses. ¡Recomendado!
          </p>
        </blockquote>
        <figcaption className="mt-10">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="mx-auto h-10 w-10 rounded-full"
          />
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="font-semibold text-white">Ana Rivera</div>
            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
              <circle r={1} cx={1} cy={1} />
            </svg>
            <div className="text-white">Directora de Marketing</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
  );
};

export default Testimonials;
