"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Network({}: Props) {
  return (
    <div className="flex flex-col p-5 items-center min-h-screen">
      <h2 className="scroll-m-20 mt-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        MaaS Network Architecture
      </h2>
      <p className="text-xl text-muted-foreground w-[60%] p-8 text-center max-w-md min-w-[300px]">
        Build the components of the MaaS Network Architecture Diagram step by
        step, understanding the reason why they are chosen and what role they
        play in the architecture 🚀
      </p>
      <Alert className="max-w-screen-md m-2 mb-5">
        <ScrollTextIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription className="flex flex-row gap-1 items-center justify-start">
          <span>You can scroll in the explanation </span>
          <span className="p-1 border rounded-md bg-primary/5 text-xs">Explanation Area</span>
        </AlertDescription>
      </Alert>

      <div className="flex items-start  flex-col justify-center">
        <Badge className="p-2 mb-1" variant="outline">
          <ScrollTextIcon className="h-4 w-4" />
          Explanation Area
        </Badge>
        <StickyScroll content={content} />
      </div>

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
    </div>
  );
}

export default Network;

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/security.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
