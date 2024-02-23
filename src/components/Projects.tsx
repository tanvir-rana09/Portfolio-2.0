"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import img1 from '@/assets/Project (1).png';
import img2 from '@/assets/Project (2).png';
import img3 from '@/assets/Project (3).png';
import img4 from '@/assets/Project (4).png';
import img5 from '@/assets/Project (5).png';
import img6 from '@/assets/Project (6).png';
import img7 from '@/assets/Project (7).png';
import img8 from '@/assets/Project (8).png';
import img9 from '@/assets/Project (9).png';
import img10 from '@/assets/Project (10).png';

export const projects = [
  {
    title: "Watch E-commerce",
    link: "https://watch-website-ashy.vercel.app/",
    thumbnail:img1,
  },
  {
    title: "Movie Database",
    link: "https://movie-database-rose-nine.vercel.app/",
    thumbnail:img2,
  },
  {
    title: "Quran App",
    link: "https://quran-sable-five.vercel.app/",
    thumbnail:img5,
  },
  {
    title: "Basic Search Functionality",
    link: "https://saerch-functionality.vercel.app/",
    thumbnail:img4,
  },
  {
    title: "Watch",
    link: "https://watch-six-omega.vercel.app/",
    thumbnail:img3,
  },
  {
    title: "Admin Pannel",
    link: "https://admin-pannel-five.vercel.app/",
    thumbnail:img6,
  },

  {
    title: "Portfolio 0.0",
    link: "https://portfolio-seven-pearl-23.vercel.app/",
    thumbnail:img7,
  },
  {
    title: "Cloth Shop",
    link: "https://clothing-e-commerce-seven.vercel.app/",
    thumbnail:img8,
  },
  {
    title: "Portfolio 1.0",
    link: "https://project-8-copy.vercel.app/",
    thumbnail:img9,
  },
  {
    title: "Todo App",
    link: "https://todo-with-local-storage-alpha.vercel.app/",
    thumbnail:img10,
  },

];

export default function HeroParallaxDemo() {
  return <HeroParallax products={projects} />;
}