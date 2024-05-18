import { Button } from "@/components/ui/button";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import React from "react";

type Props = {};

function Network({}: Props) {
  return (
    <div className="p-5">
      <div className="flex flex-col p-5 items-center min-h-screen">
        <h2 className="scroll-m-20 mt-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          MaaS Network Architecture
        </h2>
        <p className="text-xl text-muted-foreground w-[60%] p-8 text-center max-w-md min-w-[300px]">
          Build the components of the MaaS Network Architecture Diagram step by
          step, understanding the reason why they are chosen and what role they
          play in the architecture 🚀
        </p>
        <MacbookScroll
          title={
            <span>
              This Macbook is built with Tailwindcss. <br /> No kidding.
            </span>
          }
          badge={
            <Link href="https://peerlist.io/manuarora">Heritier Kaumbu</Link>
          }
          src={`/network.jpg`}
          showGradient={true}
        />
        <div>
          <Button className="bg-primary">Learn More ℹ</Button>
          <Button className="bg-secondary">Next Step →</Button>
        </div>
      </div>
    </div>
  );
}

export default Network;
