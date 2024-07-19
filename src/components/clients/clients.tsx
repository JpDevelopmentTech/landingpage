import React from "react";
import clients from "../../data/clients.json";
import "./clients.css";
import Image from "next/image";
export default function Clients() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-primary">
          Empresas que confían en nosotros
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {clients.map((client, index) => (
            <a href={client.url} key={index}>
              <Image
                alt={client.alt || ''}
                src={client.image}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
