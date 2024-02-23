"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: 'StaticImport';
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
  return (
    <div className="md:px-12 max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-secular">
        My Projects
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
        Here you will find some of the personal and clients projects that I created with each project containing its own case study
      </p>
      <p
      className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200"
      >
      Our objective is to offer a high-quality service and a dependable source of income to our investors while simultaneously minimizing any potential risks and automating and simplifying the relationships.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
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
      className="group/product md:h-96 rounded-md md:w-[40rem] h-44 w-[20rem] relative flex-shrink-0"
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
      <h2 className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover/product:opacity-100 text-white font-caveat text-3xl flex-col gap-2">
        {product.title}
        <Link href={product.link} className='px-6 py-2 rounded-md text-sm hover:bg-[#000000] duration-500 shadow-md bg-primary text-white font-sen'>Live Site</Link>
      </h2>
    </motion.div>
  );
};