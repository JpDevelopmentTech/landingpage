import { Article } from "@/models/article";
import { getArticles } from "@/services/blog";
import { useEffect, useState } from "react";

export default function useGetArticles() {
  const [articles, setArticles] = useState<any>()

  useEffect(() => {
    _getArticles()
  }, [])

  const _getArticles = async () => {
    const response = await getArticles()
    setArticles(response)
  }

  return articles

}
