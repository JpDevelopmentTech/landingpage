import React from "react";
import clients from "../../data/clients.json";
import Image from "next/image";
import './clients.css'
export default function Clients() {
  return (
    <section className="mx-auto container">
      <div role="main" className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
          Clientes
        </h1>
        <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          Explora ideas innovadoras, consejos y tendencias en nuestro blog.
          Descubre contenido fresco y valioso para inspirarte y mantenerte
          actualizado.
        </p>
      </div>
      <div className="grid grid-cols-6 gap-12 place-items-center">
        {clients.map((client: { image: string }, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={client.image}
              alt="jp development client"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
