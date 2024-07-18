import useGetArticles from "@/hooks/useGetArticles";
import { Article } from "@/models/article";
import { getArticles } from "@/services/blog";
import Image from "next/image";
import React from "react";

const Blog = () => {
  const articles = useGetArticles();
  return (
    <div className="container mx-auto my-36">
      <div role="main" className="flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-black leading-9 text-center text-primary w-full">
          Blog
        </h2>
        <p className="text-lg leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          Aquí encontrarás artículos sobre tecnología, desarrollo de software,
          diseño web y mucho más.
        </p>
      </div>
      <div className="flex flex-wrap mt-10">
        {articles?.map((article: Article) => (
          <div className="p-4 md:w-1/3" key={article.id}>
            <div className="h-full rounded-xl shadow-cla-blue bg-default-100/50 overflow-hidden">
              <Image
                width={1920}
                height={1080}
                className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={article.image}
                alt="blog"
              />
              <div className="p-6 ">
                <h3 className="title-font text-lg font-medium text-primary mb-3">
                  {article.title}
                </h3>
                <p className="leading-relaxed mb-3">{article.title}</p>
                <div className="flex items-center flex-wrap ">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                    Ver mas
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
