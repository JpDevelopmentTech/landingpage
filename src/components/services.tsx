import { Button, Card, CardBody } from "@nextui-org/react";
import React from "react";
import services from "../data/services.json";

export default function Services() {


  return (
    <div id="services">
      <div className="container mx-auto">
        <div
          role="main"
          className="flex flex-col items-center justify-center mb-12"
        >
          <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
            Servicios
          </h1>
          <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            Explora ideas innovadoras, consejos y tendencias en nuestro blog.
            Descubre contenido fresco y valioso para inspirarte y mantenerte
            actualizado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
              shadow="sm"
            >
              <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                  <div className="relative col-span-6 md:col-span-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path
                          d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
                          opacity=".5"
                        />
                        <path
                          strokeLinecap="round"
                          d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305c0 .703-.64 1.237-1.923 2.305L7 15"
                        />
                      </g>
                    </svg>
                  </div>

                  <div className="flex flex-col col-span-6 md:col-span-8">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-0">
                        <h3 className="font-semibold text-foreground/90">
                          {service.name}
                        </h3>
                        <p className="text-small text-foreground/80">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="p-12 flex justify-center items-center">
          <Button size="lg" className="bg-primary-200" onClick={
            () => {
              // deslizar de una manera suave a la seccion de contacto
              const contact = document.getElementById('contact')
              contact?.scrollIntoView({behavior: 'smooth'})
              
            }
          }>
            Empezemos a crear
          </Button>
          
          
        </div>
      </div>
    </div>
  );
}
