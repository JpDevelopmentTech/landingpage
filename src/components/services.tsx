import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Software a la medida",
    description:
      "Diseño, desarrollo y mantenimiento de soluciones digitales web para optimizar operaciones y aumentar las ventas de nuestros clientes",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Consultoria de software",
    description:
      "Asesoría y acompañamiento en la toma de decisiones tecnológicas para garantizar el éxito de los proyectos de nuestros clientes",
    icon: LockClosedIcon,
  },
  {
    name: "Ecommerce",
    description:
      "Diseño, desarrollo y mantenimiento de tiendas virtuales para vender productos y servicios en línea de manera segura y eficiente",
    icon: ArrowPathIcon,
  },
];
export default function Services() {
  return (
    <div className="bg-black py-24 sm:py-32 " id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-white">
            Desarrollo agil
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Nuestros servicios
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            Nuestros servicios estan enfocados en la satisfaccion de nuestros
            clientes, con soluciones adaptadas a cada una de sus necesidades
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
