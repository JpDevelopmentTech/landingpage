"use client";
import Blog from "@/components/blog";
import Clients from "@/components/clients/clients";
import Contact from "@/components/contact/contact";
import Services from "@/components/services";
import { Button, Card, CardBody, Progress } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const testimonios = [
    {
      id: 1,
      nombre: "Nombre del Cliente 1",
      testimonio: "Testimonio del Cliente 1.",
    },
    {
      id: 2,
      nombre: "Nombre del Cliente 2",
      testimonio: "Testimonio del Cliente 2.",
    },
    // Agrega más testimonios según sea necesario
  ];

  return (
    <div>
      <header className="container mx-auto flex justify-center items-center py-32">
          <div className="flex flex-col gap-3 my-12 w-2/3">
            <h1 className="font-black text-6xl text-center" >
              Desarrollo de <span className="text-primary">software</span> y <span className="text-primary"> marketing digital </span>
            </h1>
            <p className="text-xl text-center">
              En nuestra empresa estamos enfocados en la ayuda y satisfaccion de
              todos nuestros clientes con soluciones adaptadas a cada una de sus
              necesidades
            </p>
          </div>
      </header>
      <Services />
      <Blog />
      <Clients/>
      <Contact/>
    </div>
  );
}
