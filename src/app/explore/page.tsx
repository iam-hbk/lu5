"use client";
import React from "react";
import { ThreeDCardDemo } from "@/components/explore_cards";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useTheme } from "next-themes";
type Props = {};

const Page = (props: Props) => {
  const { theme } = useTheme();
  return (
    <WavyBackground
      backgroundFill={theme === "dark" ? "#1A202C" : "#F7FAFC"}
      blur={5}
      waveWidth={100}
      className="flex md:flex-row flex-col h-screen w-screen items-center justify-center md:gap-10"
    >
      <ThreeDCardDemo
        link="/network-architecture"
        architecture_image_path="/network.jpg"
        architecture_name="Network"
        architecture_title="Network Architecture"
        architecture_description="Network Architecture is the design of a computer network. It is a framework for the specification of a network's physical components and their functional organization and configuration, its operational principles and procedures, as well as data formats used in its operation."
      />
      <ThreeDCardDemo
        link="/security-architecture"
        architecture_image_path="/security.jpg"
        architecture_name="Security"
        architecture_title="Security Architecture"
        architecture_description="Security Architecture is the design of a secure network. It is a framework for the specification of a network's security components and their functional organization and configuration, its operational principles and procedures, as well as data formats used in its operation."
      />
    </WavyBackground>
  );
};

export default Page;
