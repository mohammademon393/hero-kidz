import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});
export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
});

export const metadata = {
  title: "Hero Kidzz",
  description: "আপনার শিশুর আনন্দের ঠিকানা",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-screen flex flex-col antialiased">
        <header className="w-11/12 max-w-7xl mx-auto py-2 text-left">
          <Navbar />
        </header>

        <main className="w-11/12 max-w-7xl mx-auto py-2 flex-1">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
