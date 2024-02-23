import type { Metadata } from "next";
import { Italiana, Sen, Quicksand, Caveat, Cinzel, Montserrat,Secular_One } from "next/font/google";
import "./globals.css";

const italiana = Italiana({ subsets: ["latin"], weight: '400', variable: '--font-italiana' });
const montserrat = Montserrat({ subsets: ["latin"], weight: '400', variable: '--font-montserrat' });
const quicksand = Quicksand({ subsets: ["latin"], weight: '400', variable: '--font-quicksand' });
const caveat = Caveat({ subsets: ["latin"], weight: '400', variable: '--font-caveat' });
const cinzel = Cinzel({ subsets: ["latin"], weight: '400', variable: '--font-cinzel' });
const sen = Sen({ subsets: ["latin"], weight: '400', variable: '--font-sen' });
const secular = Secular_One({ subsets: ["latin"], weight: '400', variable: '--font-secular' });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${italiana.variable} ${sen.variable} ${cinzel.variable} ${caveat.variable} ${quicksand.variable} ${montserrat.variable} ${secular.variable} font-quicksand`}>
        {children}
        {/* <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="none" stroke-opacity="1" stroke="#FF156D" stroke-width=".5" cx="100" cy="100" r="0"><animate attributeName="r" calcMode="spline" dur="2" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-width" calcMode="spline" dur="2" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" calcMode="spline" dur="2" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate></circle></svg> */}
      </body>
    </html>
  );
}
