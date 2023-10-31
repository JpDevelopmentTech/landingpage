"use client";
import NavBar from "@/components/navbar";
import useGetArticle from "@/hooks/useGetArticle";
import Image from "next/image";


export default function Page({ params }: { params: { slug: string } }) {
  const { article } = useGetArticle({ slug: params.slug });
  
  return (
    <div className="p-12">
      <div className="container mx-auto">
        <Image src={'/assets/images/image1.jpg'} width={600} height={400} className="w-2/3 " alt={'Articulo ' + article?.title}/>
        <h1 className="text-center text-4xl font-bold ">{article?.title}</h1>
      </div>
    </div>
  );
}
