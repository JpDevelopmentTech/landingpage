import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export const getArticle = async (slug: string) => {
  const articlesRef = collection(db, "articles");
  const q = query(articlesRef, where("slug", "==", slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size === 1) {
    // Solo debería haber un documento que coincida con el slug
    const doc = querySnapshot.docs[0];
    return doc.data();
  } else if (querySnapshot.size === 0) {
    console.log("No se encontraron documentos con el slug especificado.");
    return null; // O devuelve un valor por defecto, si es necesario
  } else {
    console.log(
      "Múltiples documentos tienen el mismo slug. Esto no debería suceder si los slugs son únicos."
    );
    return null; // O maneja esta situación de acuerdo a tus necesidades
  }
};

export const getArticles = async () => {
    const articlesRef = collection(db, "articles");
    const querySnapshot = await getDocs(articlesRef);
    const articles = querySnapshot.docs.map((doc) => doc.data());
    return articles;
}

