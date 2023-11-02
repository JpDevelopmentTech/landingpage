"use client";

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
      <div className="grid grid-cols-4 gap-6">
        {articles?.map((article: Article) => (
          <div
            className="bg-white shadow-md border border-gray-200 rounded-lg  mb-5 flex flex-col"
            key={article.id}
          >
            <Link href="#">
              <Image
                className="rounded-t-lg h-48 w-full object-cover"
                width={1080}
                height={1920}
                src={article.image}
                alt={article.title}
              />
            </Link>
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <a href="#">
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    {article.title}
                  </h5>
                </a>
                <p
                  className="font-normal text-black mb-3 w-full overflow-ellipsis overflow-hidden h-12 whitespace-nowrap"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                ></p>
              </div>

              <Link
                className="text-white bg-primary hover:bg-primary/80 transition-colors focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
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
