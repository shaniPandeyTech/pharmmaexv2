import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TwoRowNavBar from "../components/TwoRowNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
import Poster from "@/components/Poster";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "pharmaex",
  description: "pharmaex company website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
      </head>
      <body className={``}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 offset-1">
              <TwoRowNavBar />
            </div>
            {children}
            <Poster />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
