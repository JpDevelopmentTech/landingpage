"use client";

import LoadingSpinner from "@/components/loading/loading";
import useGetArticle from "@/hooks/useGetArticle";
import Image from "next/image";


export default function Page({ params }: { params: { slug: string } }) {
  const article = useGetArticle({ id: params.slug })
  
  return (
    <div className="container mx-auto my-24 flex flex-col items-center justify-center">
      {article == null && (
        <LoadingSpinner text="Cargando articulo"></LoadingSpinner>
      )}
      <div className="flex flex-col items-center justify-center md:w-1/2 text-justify md:text-left px-6">
        <Image src={article?.image} width={1280} height={720} className="w-full rounded-lg" alt={'Articulo ' + article?.title}/>
        <h1 className="text-center text-4xl font-bold my-12">{article?.title}</h1>
        <div dangerouslySetInnerHTML={{__html: article?.content}}></div>
      </div>
    </div>
  );
}
