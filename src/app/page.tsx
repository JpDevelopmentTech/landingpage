"use client";
import Blog from "@/components/blog";
import Clients from "@/components/clients/clients";
import Contact from "@/components/contact/contact";
import Services from "@/components/services";
export default function Home() {
  return (
    <div className="relative">
      <header className="container mx-auto flex justify-center items-center py-32">
        <div className="flex flex-col gap-3 my-12 md:w-2/3 animate__animated animate__bounceInLeft">
          <h1 className="font-black text-3xl md:text-6xl text-center">
            Desarrollo de <span className="text-primary">software</span> y{" "}
            <span className="text-primary"> marketing digital </span>
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
      <Clients />
      <Contact />
      {/* boton flotante abajo a la derecha para desplazarse hasta arriba */}
      <div className="fixed bottom-0 right-0 mb-4 mr-4">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="absolute bottom-3 right-3 bg-primary rounded-xl"
        >
          {/* icono en svg flecha hacia arriba */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="m7 14l5-5l5 5H7Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
