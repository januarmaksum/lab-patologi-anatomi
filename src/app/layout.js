"use client"

import Head from "next/head";
import { PrimeReactProvider } from "primereact/api";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import Tailwind from "primereact/passthrough/tailwind";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "primeicons/primeicons.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <html lang="id">
      <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <Head>
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
        </Head>
        <body className={inter.className}>
          <ToastContainer />
          {!isLoginPage && <Navbar />}
          {children}
          {!isLoginPage && <Footer />}
        </body>
      </PrimeReactProvider>
    </html>
  );
}
