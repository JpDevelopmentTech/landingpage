"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

export default function NavBar() {
  //una funcion que dependiendo el id que se pase navegue hasta esa seccion
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });

  }
  return (
    <Navbar className="p-6">
      <NavbarBrand>
        <Image
          src={"/logojp.png "}
          alt="logo jp development"
          width={120}
          height={120}
        />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/">Inicio</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex cursor-pointer" onClick={e => handleScroll('services')}>
          Servicios
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#"  variant="flat" onClick={e => handleScroll('contact')} className="bg-primary-200">
            Contactar
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
