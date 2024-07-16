import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <body className={inter.className}>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
