import Image from "next/image";
import React from "react";

export default function Blog() {
  return (
    <div id="blog">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-12 px-4 w-96 sm:w-auto">
        <div role="main" className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
            Especializados en el trabajo
          </h2>
          <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            Somos una empresa especializada en el desarrollo de software a la medida, con más de 5 años de experiencia en el mercado, contamos con un equipo de profesionales altamente capacitados para brindarle la mejor solución a su necesidad.
          </p>
        </div>
        <div className="lg:flex items-stretch md:mt-12 mt-8">
          <div className="lg:w-1/2">
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              <div className="sm:w-1/2 relative">
                <Image
                  src="/assets/images/portfolio/portfolio2.png"
                  width={1280}
                  height={720}
                  className="w-full "
                  alt="jpdevelopment"
                />
              </div>
              <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                
                <Image
                  src="/assets/images/portfolio/portfolio3.png"
                  width={1280}
                  height={720}
                  className="w-full"
                  alt="jpdevelopment"
                />
              </div>
            </div>
            <div className="relative">
             
              <Image
                src="/assets/images/portfolio/portfolio1.png"
                alt="jpdevelopment"
                className="w-full mt-8 md:mt-6 hidden sm:block"
                width={1280}
                height={720}
              />
              <Image
                className="w-full mt-4 sm:hidden"
                src="/assets/images/portfolio/portfolio1.png"
                width={1280}
                height={720}
                alt="jpdevelopment"
              />
            </div>
          </div>
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <div className="relative">
              <Image
                src="/assets/images/portfolio/portfolio4.png"
                alt="jpdevelopment"
                width={1280}
                height={720}
                className="w-full sm:block hidden"
              />
              <Image
                className="w-full sm:hidden"
                width={1280}
                height={720}
                src="/assets/images/portfolio/portfolio4.png"
                alt="jpdevelopment"
              />
            </div>
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              <div className="relative w-full">
                <Image
                  src="/assets/images/portfolio/portfolio5.png"
                  width={1280}
                  height={720}
                  className="w-full"
                  alt="jpdevelopment"
                />
              </div>
              <div className="relative w-full sm:mt-0 mt-4">
                <Image
                  src="/assets/images/portfolio/portfolio6.png"
                  width={1280}
                  height={720}
                  className="w-full"
                  alt="jpdevelopment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
