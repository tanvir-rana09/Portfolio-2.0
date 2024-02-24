"use client";
import React from "react";
import ceo from '@/assets/tanvir6.jpeg'
import { AnimatedTooltip } from "./ui/animated-tooltip";



export function AnimatedTooltipPreview() {
  const people = [
    {
      id: 1,
      name: "Tanvir Rana",
      designation: "Web Designer",
      image:ceo,
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
