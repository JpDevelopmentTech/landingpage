"use client";
import Portfolio from "@/components/portfolio";
import Clients from "@/components/clients/clients";
import Contact from "@/components/contact/contact";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials/testimonials";
import Buttonup from "@/components/buttonUp/buttonup";
import Blog from "@/components/blog/blog";
import Header from "@/components/header/header";
export default function Home() {
  return (
    <div className="relative px-10">
      <Header />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Clients />
      <Contact />
      <Buttonup />
    </div>
  );
}
