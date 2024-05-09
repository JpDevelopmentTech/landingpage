"use client";
import Portfolio from "@/components/portfolio";
import Clients from "@/components/clients/clients";
import Contact from "@/components/contact/contact";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials/testimonials";
import Buttonup from "@/components/buttonUp/buttonup";
export default function Home() {



  return (
    <div className="relative px-10">
      <header className="container mx-auto flex justify-center items-center py-32" >
        <div className="flex flex-col gap-3 my-12 md:w-2/3 animate__animated animate__bounceInLeft relative">
          <h1 className="font-black text-5xl md:text-7xl text-center z-50">
            Desarrollo de <span className="text-primary">software</span>
          </h1>
          <p className="md:text-3xl text-center ">
            En nuestra empresa estamos enfocados en la ayuda y satisfaccion de
            todos nuestros clientes con soluciones adaptadas a cada una de sus
            necesidades
          </p>
          <div id="header" className="absolute ">

          </div>
        </div>
      </header>
      <Services />
      <Portfolio />
      <Testimonials />
      <Clients />
      <Contact />
      <Buttonup />
    </div>
  );
}
