"use client";
import React from "react";
import { ThreeDCardDemo } from "@/components/explore_cards";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useTheme } from "next-themes";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
type Props = {};

const Page = (props: Props) => {
  const { theme } = useTheme();
  return (
    <FollowerPointerCard>
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
          architecture_description="Network architecture is the blueprint of a network, detailing how all its components interact. It starts with defining needs, choosing a topology, and selecting core elements like routers and switches. The design includes an access layer for user devices, a distribution layer for managing traffic, and a core layer for high-speed data flow. It also covers data center networking and wireless connectivity. Lastly, it incorporates robust security measures to protect the entire system."
        />
        <ThreeDCardDemo
          link="/security-architecture"
          architecture_image_path="/security.jpg"
          architecture_name="Security"
          architecture_title="Security Architecture"
          architecture_description="Security architecture is the strategic design of a system's defenses, detailing how all security measures and components work together. It begins with identifying potential threats and vulnerabilities, and defining security requirements. The design includes selecting and implementing technologies like firewalls, intrusion detection systems, and encryption protocols. It also involves setting up access controls, authentication mechanisms, and monitoring tools to detect and respond to threats."
        />
      </WavyBackground>
    </FollowerPointerCard>
  );
};

export default Page;
