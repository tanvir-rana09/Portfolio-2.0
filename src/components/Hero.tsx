'use client'
import { anim } from "./Animation";
import { Spotlight } from "./ui/Spotlight";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";

export default function Hero() {

  return (
    <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden cursor-pointer">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div
          
          className="p-4 max-w-7xl mx-auto relative z-10  w-full mt-44 md:pt-0">
          <motion.h1
          variants={anim('up',0.2)}
          initial='hidden' 
          whileInView={"show"}
          viewport={{once:true,amount:0.5}}
          id="heading" className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-secular uppercase opacity-0">
            Hi There, I am <br /> Tanvir Rana
          </motion.h1>
          <motion.p 
          variants={anim('down',0.8)}
          initial='hidden' 
          whileInView={"show"}
          viewport={{once:true,amount:0.5}}
          id="bio" className="mt-4 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto opacity-0">
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.I&apos;m passionate about crafting experiences that are engaging, accessible, and user-centric.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
