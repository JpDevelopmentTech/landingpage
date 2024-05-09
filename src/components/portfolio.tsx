import Image from "next/image";
import React from "react";

export default function PortFolio() {
  return (
    <div id="blog">
      <div className="">
        <div role="main" className="flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-black leading-9 text-center text-primary w-full">
            Especializados en el trabajo
          </h2>
          <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            Somos una empresa especializada en el desarrollo de software a la
            medida, con más de 5 años de experiencia en el mercado, contamos con
            un equipo de profesionales altamente capacitados para brindarle la
            mejor solución a su necesidad.
          </p>
        </div>
        <div className="container mx-auto my-24 flex flex-col gap-10">
          <div className="flex flex-col  md:flex-row items-center gap-10 justify-center w-full">
            <div className="flex items-center ">
              <Image
                src="/assets/images/portfolio/portfolio7.png"
                width={1080}
                height={1920}
                alt="App desarrollada por JpDevelopment"
                className="w-64 z-20"
              ></Image>
              <Image
                src="/assets/images/portfolio/portfolio7p.png"
                width={1920}
                height={1080}
                alt="App desarrollada por JpDevelopment"
                className="w-[200px] md:w-[600px] -ml-36 z-10"
              ></Image>
            </div>
            <div className=" z-10 md:ml-10">
              <h3 className="text-2xl font-bold text-primary">VelbetApp</h3>
              <h4 className="text-lg font-bold">Desarrollo a la medida</h4>
              <p className="text-xl mt-3 max-w-2xl">
                Una aplicacion realizada para la solicitud de cualquier tipo de
                servicios, administracion de coopropiedades, y estados de cuenta para clientes,todo totalmente Serverless
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <span
                  className="
                bg-primary px-10 py-2 text-white rounded-full text-sm
                "
                >
                  Firebase
                </span>
                <span
                  className="
                bg-primary px-10 py-2 text-white rounded-full text-sm
                "
                >
                  NodeJS
                </span>
                <span
                  className="
                bg-primary px-10 py-2 text-white rounded-full text-sm
                "
                >
                  ReactJS
                </span>
                <span
                  className="
                bg-primary px-10 py-2 text-white rounded-full text-sm
                "
                >
                  Amazon web services
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 justify-center w-full">
            
            <div className=" z-10 md:ml-10">
              <h3 className="text-2xl font-bold text-primary md:text-right">Tu Candela Miami</h3>
              <h4 className="text-lg font-bold md:text-right">Sitio web</h4>
              <p className="text-xl mt-3 md:text-right max-w-2xl">
                Una pagina web para la reservacion de mesas de una discoteca en miami e informacion de eventos
              </p>
              <div className="mt-3 flex flex-wrap gap-3 md:justify-end">
                <span
                  className="
                bg-primary px-10 py-2 text-white rounded-full text-sm
                "
                >
                  Wordpress
                </span>
              </div>
            </div>
            <div className="flex items-center ">
              <Image
                src="/assets/images/portfolio/portfolio1.png"
                width={1080}
                height={1920}
                alt="App desarrollada por JpDevelopment"
                className="w-64 z-20"
              ></Image>
              <Image
                src="/assets/images/portfolio/portfolio1p.png"
                width={1920}
                height={1080}
                alt="App desarrollada por JpDevelopment"
                className="w-[200px] md:w-[600px] -ml-36 z-10"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10 justify-center w-full">
            <div className="flex items-center ">
              <Image
                src="/assets/images/portfolio/portfolio7.png"
                width={1080}
                height={1920}
                alt="App desarrollada por JpDevelopment"
                className="w-64 z-20"
              ></Image>
              <Image
                src="/assets/images/portfolio/portfolio2p.png"
                width={1920}
                height={1080}
                alt="App desarrollada por JpDevelopment"
                className="w-[200px] md:w-[600px] -ml-36 z-10"
              ></Image>
            </div>
            <div className=" z-10 md:ml-10">
              <h3 className="text-2xl font-bold text-primary">Discol Movilidad</h3>
              <h4 className="text-lg font-bold">Desarrollo a la medida</h4>
              <p className="text-xl mt-3 max-w-2xl">
                Una plataforma empresarial para la gestion de cobros de cartera, gestion de clientes y reportes de ventas
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <span
                  className="
                bg-primary px-10 py-2 text-white rounded-full text-sm
                "
                >
                  ReactJs
                </span>
                <span
                  className="
                bg-primary px-10 py-2 text-white rounded-full text-sm
                "
                >
                  Flutter
                </span>
                <span
                  className="
                bg-primary px-10 py-2 text-white rounded-full text-sm
                "
                >
                  NodeJS
                </span>
                <span
                  className="
                bg-primary px-10 py-2 text-white rounded-full text-sm
                "
                >
                  Amazon web services
                </span>
                <span
                  className="
                bg-primary px-10 py-2 text-white rounded-full text-sm
                "
                >
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
