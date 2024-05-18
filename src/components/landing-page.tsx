import React from "react";
import { Highlight } from "./ui/hero-highlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Meteors } from "./ui/meteors";
import Link from "next/link";
import { Button } from "./ui/button";

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
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-primary to-blue-700 dark:to-secondary px-4 md:px-6">
      <Meteors number={30} />

      <div className="space-y-4 text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Revolutionize your <Highlight>Mobility!</Highlight>
        </h1>

        <p className="text-sm text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
          Experience the future of transportation with our innovative mobility
          solutions.
        </p>
        <div className="flex flex-col items-center justify-center text-3xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <TypewriterEffectSmooth words={words} />
        </div>

        <Link href="/explore">
          <Button variant={"outline"} className="flex border-none flex-row dark:bg-primary">
            <span className="mr-1 animate-bounce">Get</span>
            <span className="mr-1 animate-bounce delay-75">Started</span>
            <ArrowRightIcon className="h-4 w-4 animate-bounce delay-150 sm:h-5 sm:w-5" />
          </Button>
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
