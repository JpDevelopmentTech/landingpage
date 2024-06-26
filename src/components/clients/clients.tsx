import React from "react";
import clients from "../../data/clients.json";
import Image from "next/image";
import './clients.css'
export default function Clients() {
  return (
    <section className="mx-auto container">
      <div role="main" className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-6xl font-black leading-9 text-center text-primary">
          Clientes
        </h1>
        <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          Estos son los clientes que han confiado en nosotros para el desarrollo de sus proyectos. 
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-12 place-items-center">
        {clients.map((client, index) => (
          <a href={client.url}  key={index} className="flex items-center justify-center" target="_blank">
            <Image
              src={client.image}
              alt="jp development client"
              width={120}
              height={120}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
