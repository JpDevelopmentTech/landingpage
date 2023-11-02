import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [message, setMessage] = useState("");

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pv3ijj7",
        "template_46y7uqi",
        e.currentTarget,
        "7tCFlg7bszyEfla2D"
      )
      .then((result) => {
        setMessage("Mensaje enviado correctamente");
        //recargar la pagina y devolver al inicio de ella
        setTimeout(() => {
          window.location.reload();
          window.scrollTo(0, 0);
        }, 2000);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div
      className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-12 px-4 w-96 sm:w-auto h-screen flex items-center justify-center flex-col"
      id="contact"
    >
      {message && (
        <div>
          <div className="fixed bottom-0 right-0 bg-primary text-white p-4 rounded-tl-md rounded-br-md">
            {message}
          </div>
        </div>
      )}
      <div role="main" className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
          Contactanos
        </h2>
        <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          Cuentanos de que manera podemos ayudarte a solucionar tus problemas
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <form className="w-2/3 py-12 flex flex-col gap-6" onSubmit={sendForm}>
          <input
            type="text"
            className="border-b bg-transparent text-white p-3 focus-visible:outline-none w-full"
            placeholder="Nombre"
            name="name"
          />
          <input
            type="text"
            className="border-b bg-transparent text-white p-3 focus-visible:outline-none w-full"
            placeholder="Telefono"
            name="phone"
          />
          <textarea
            name="message"
            id=""
            className="border-b bg-transparent text-white p-3 focus-visible:outline-none w-full"
            placeholder="Mensaje"
          ></textarea>
          <button
            type="submit"
            className="bg-primary p-3 rounded-md hover:transition-colors hover:bg-primary-200"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
