"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";
import React from "react";

type Props = {};

function Network({}: Props) {
  return (
    <TracingBeam className="p-5">
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
        <div className="flex flex-row gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Learn More</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Step 1</AlertDialogTitle>
                <AlertDialogDescription>
                  At this point, we are going to learn about the first step in
                  the MaaS Network Architecture Diagram. It entails the design
                  of a computer network. It is a framework for the specification
                  of a network's physical components and their functional
                  organization and configuration, its operational principles and
                  procedures, as well as data formats used in its operation.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Okay</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button variant={"outline"}>Next Step →</Button>
        </div>
      </div>
    </TracingBeam>
  );
}

export default Network;
