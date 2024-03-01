"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  useAnimate,
  useInView,
  animate,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { anim } from "../Animation";

interface proptype {
  title: string;
  link: string;
  thumbnail: StaticImport;
}[];

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: StaticImport;
  }[];
}) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(6, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="py-80 h-[300vh] sm:py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse md:gap-20 gap-10 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 md:gap-20 gap-10">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse md:gap-20 gap-10">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      ref={ref}
      className="md:px-12 max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-20 z-10">
      <motion.h1
        variants={anim('up', 0.1)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        id="projectsHeading" className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-secular uppercase">
        My all Projects
      </motion.h1>
      <motion.p
        variants={anim('up', 0.5)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        id="projectsbio1" className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
        Here you will find some of the personal and clients projects that I created with each project containing its own case study
      </motion.p>
      <motion.p
        variants={anim('up', 1)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: true, amount: 0.5 }}
        id="projectsbio2"
        className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200"
      >
        Our objective is to offer a high-quality service and a dependable source of income to our investors while simultaneously minimizing any potential risks and automating and simplifying the relationships.
      </motion.p>
    </motion.div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: StaticImport;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product lg:h-96 lg:w-[45rem] md:h-72 rounded-md md:w-[30rem] h-44 w-[20rem] relative flex-shrink-0"
    >
      <div

        className="block group-hover/product:shadow-2xl "
      >
        <div
          className=''
        >
          <Image
            quality={100}
            src={product.thumbnail}
            className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
            alt={product.title}
          />
        </div>
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-50 duration-300 bg-black pointer-events-none"></div>
      <h2 className="absolute -bottom-20 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover/product:opacity-100 group-hover/product:bottom-0 duration-500 text-white font-caveat text-3xl flex-col gap-2">
        {product.title}
        <Link href={product.link} className='px-6 py-2 rounded-md text-sm hover:bg-[#000000] duration-500 shadow-md bg-primary text-white font-sen'>Live Site</Link>
      </h2>
    </motion.div>
  );
};
