import { Button, Card, CardBody } from "@nextui-org/react";
import React from "react";

export default function Services() {
  return (
    <div id="services">
      <div className="container mx-auto">
        <div
          role="main"
          className="flex flex-col items-center justify-center mb-12"
        >
          <h2 className="text-6xl font-black  leading-9 text-center text-primary ">
            Servicios
          </h2>
          <p className="text-xl leading-normal text-center text-gray-60 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            Explora ideas innovadoras, consejos y tendencias en nuestro blog.
            Descubre contenido fresco y valioso para inspirarte y mantenerte
            actualizado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] animate__animated animate__jackInTheBox"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 14 14"
                  >
                    <g
                      fill="none"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="11" height="4" x="2.5" y=".5" rx="1" />
                      <path d="M8 9.5v-1a2 2 0 0 0-2-2H2.5a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1h1m4 11v-3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3" />
                    </g>
                  </svg>
                </div>

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <h3 className="font-semibold text-foreground/90">
                        Software a la medida
                      </h3>
                      <p className="text-small text-foreground/80">
                        Diseño, desarrollo y mantenimiento de soluciones
                        digitales web para optimizar operaciones y aumentar las
                        ventas de nuestros clientes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] animate__animated animate__jackInTheBox"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#ffffff"
                      d="M196 96c0 29.47-24.21 54.05-56 59.06v.94a12 12 0 0 1-24 0v-12a12 12 0 0 1 12-12c24.26 0 44-16.15 44-36s-19.74-36-44-36s-44 16.15-44 36a12 12 0 0 1-24 0c0-33.08 30.5-60 68-60s68 26.92 68 60m-68 92a20 20 0 1 0 20 20a20 20 0 0 0-20-20"
                    />
                  </svg>
                </div>

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <h3 className="font-semibold text-foreground/90">
                        Consultoria de software
                      </h3>
                      <p className="text-small text-foreground/80">
                        Asesoría y acompañamiento en la toma de decisiones
                        tecnológicas para garantizar el éxito de los proyectos
                        de nuestros clientes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] animate__animated animate__jackInTheBox"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 14 14"
                  >
                    <g
                      fill="none"
                      stroke="#ffffff"
                      stroke-linecap="round"
                    >
                      <rect width="6.5" height="6.5" x="5.5" y="3" rx="1" />
                      <path d="M4 12h7.61a1 1 0 0 1 .7.29l1.19 1.21M.5.5h1a1 1 0 0 1 1 1V10M4 11.75A2.11 2.11 0 0 1 4 12a1.74 1.74 0 1 1 0-.25ZM8.5 7h1" />
                    </g>
                  </svg>
                </div>

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <h3 className="font-semibold text-foreground/90">
                        Ecommerce
                      </h3>
                      <p className="text-small text-foreground/80">
                        Diseño, desarrollo y mantenimiento de tiendas virtuales
                        para vender productos y servicios en línea de manera
                        segura y eficiente
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="p-12 flex justify-center items-center">
          <Button
            size="lg"
            className="bg-primary font-semibold"
            onClick={() => {
              // deslizar de una manera suave a la seccion de contacto
              const contact = document.getElementById("contact");
              contact?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Empezemos a crear
          </Button>
        </div>
      </div>
    </div>
  );
}
