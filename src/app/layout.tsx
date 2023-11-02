import NavBar from "@/components/navbar";
import "./globals.css";
import 'animate.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { Providers } from "./provider";
const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Jp Development | Desarrollo de Software",
  description:
    "Empresa de desarrollo de software y marketing digital para empresas y personas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
