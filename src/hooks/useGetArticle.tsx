import { Article } from "@/models/article";
import { useEffect, useState } from "react";
import articles from '@/data/articles.json'

export default function useGetArticle({ slug }: { slug: string }) {

  const [article, setarticle] = useState<Article>();

  useEffect(() => {
    const articleFind = articles.find(article => article.slug === slug) 
    setarticle(articleFind);
  }, [slug])



  return {article};
}
