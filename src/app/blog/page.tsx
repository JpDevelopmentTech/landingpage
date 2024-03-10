"use client";

import LoadingSpinner from "@/components/loading/loading";
import useGetArticles from "@/hooks/useGetArticles";
import { Article } from "@/models/article";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  const articles = useGetArticles();

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-3xl my-12">Blog</h1>
      {articles == null && <LoadingSpinner text="Cargando articulos"></LoadingSpinner>}
      <div className="grid md:grid-cols-4 gap-6">
        {articles?.map((article: Article) => (
          <div
            className="shadow-md  rounded-lg  mb-5 flex flex-col"
            key={article.id}
          >
            <Link href="#">
              <Image
                className="rounded-xl h-48 w-full object-cover"
                width={1080}
                height={1920}
                src={article.image}
                alt={article.title}
              />
            </Link>
            <div className="py-3 flex flex-col justify-between h-full">
              <div>
                <a href="#">
                  <h5 className="text-white  text-lg tracking-tight mb-2">
                    {article.title}
                  </h5>
                </a>
              </div>

              <Link
                className="text-white bg-primary-200 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href={"/blog/article/" + article.slug}
              >
                Ver mas
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
