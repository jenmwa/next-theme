import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./ui/Header";
import { ThemeProvider } from "./lib/ThemeProvider";
import { Footer } from "./ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business in the front... Party in the back!",
  description: "Next.js playground with themes in cookie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:h-screen md:flex md:flex-col`}>
        <ThemeProvider>
          <Header></Header>
          <main className="flex-1 overflow-hidden ">{children}</main>
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
