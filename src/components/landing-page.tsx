import React, { useEffect, useState } from "react";
import { Highlight } from "./ui/hero-highlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Meteors } from "./ui/meteors";
import Link from "next/link";

const words = [
  {
    text: "Explore our",
  },
  {
    text: "Network",
    className: "text-white dark:text-blue-500",
  },
  {
    text: "and",
  },
  {
    text: "Security",
    className: "text-white dark:text-blue-500",
  },
  {
    text: "Architecture!",
  },
];
export function LandingPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-[#4338ca] to-[#89CFF0] px-4 md:px-6">
      <Meteors number={30} />

      <div className="space-y-4 text-center">
        <h1 className="text-7xl font-bold text-white">
          Revolutionize your <Highlight>Mobility!</Highlight>
        </h1>

        <p className="text-lg text-gray-200 md:text-xl lg:text-2xl">
          Experience the future of transportation with our innovative mobility
          solutions.
        </p>
        <TypewriterEffectSmooth words={words} />

        <Link href="/explore">
          <div className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-medium text-[#4338ca] transition-colors duration-300 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <span className="mr-2 animate-bounce">Get Started</span>
            <ArrowRightIcon className="h-5 w-5" />
          </div>
        </Link>
      </div>
    </div>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
