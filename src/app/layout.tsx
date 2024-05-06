import type { Metadata } from "next";
import { Italiana, Sen, Quicksand, Caveat, Cinzel, Montserrat,Secular_One,Plaster } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footter";

const italiana = Italiana({ subsets: ["latin"], weight: '400', variable: '--font-italiana' });
const montserrat = Montserrat({ subsets: ["latin"], weight: '400', variable: '--font-montserrat' });
const quicksand = Quicksand({ subsets: ["latin"], weight: '400', variable: '--font-quicksand' });
const caveat = Caveat({ subsets: ["latin"], weight: '400', variable: '--font-caveat' });
const cinzel = Cinzel({ subsets: ["latin"], weight: '400', variable: '--font-cinzel' });
const sen = Sen({ subsets: ["latin"], weight: '400', variable: '--font-sen' });
const plaster = Plaster({ subsets: ["latin"], weight: '400', variable: '--font-plaster' });
const secular = Secular_One({ subsets: ["latin"], weight: '400', variable: '--font-secular' });

export const metadata: Metadata = {
  title: "Tanvir Rana",
  description: "Tanvir Rana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${italiana.variable} ${sen.variable} ${cinzel.variable} ${caveat.variable} ${quicksand.variable} ${montserrat.variable} ${secular.variable} ${plaster.variable} font-quicksand`}>
       <div><Navbar/></div>
       <div> {children}</div>
       <div><Footer/></div>
      </body>
    </html>
  );
}
