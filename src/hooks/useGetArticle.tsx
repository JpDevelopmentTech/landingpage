import { getArticle} from "@/services/blog";
import { useEffect, useState } from "react";

export default function useGetArticle({ id }: { id: string}) {
  const [article, setArticle] = useState<any>();

  useEffect(() => {
    async function fetchArticle() {
      const response = await getArticle(id);
      setArticle(response);
    }

    fetchArticle();
  }, [id]);

  return article;
}