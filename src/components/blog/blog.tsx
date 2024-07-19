import useGetArticles from "@/hooks/useGetArticles";
import { Article } from "@/models/article";
import React from "react";

const Blog = () => {
  const articles = useGetArticles();
  return (
    <div className="bg-black py-24 sm:py-32" id="blog">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Desde el blog</h2>
          <p className="mt-2 text-lg leading-8 text-white">
            Aquí encontrarás artículos sobre tecnología, programación, desarrollo de software y mucho más.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles?.map((post: any) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={
                  //fecha actual en formato Mar 10, 2020
                  new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                } className="text-white">
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-white">
                  <a href={post.slug}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.content}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={"https://media.licdn.com/dms/image/D4E03AQGKbLslQ2Z1OA/profile-displayphoto-shrink_400_400/0/1715214583241?e=1726704000&v=beta&t=38o3jlSWzJwG0WtvnPoXTheqbKqrkELxi6qVxAMQhLQ"} className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-white">
                    <a href="https://www.linkedin.com/in/jesuspinedagambin/">
                      <span className="absolute inset-0" />
                      Jesús Pineda
                    </a>
                  </p>
                  <p className="text-neutral-500">Ingeniero de Software</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
