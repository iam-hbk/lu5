"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Link, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Meteors } from "@/components/ui/meteors";
import { TabletteScroll } from "@/components/tablette-scroll-animation";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";

function Network() {
  const [show, setShow] = React.useState(false);
  //initialize useref
  const ref = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (show) {
      Reveal();
    }
  }, [show]);

  const Reveal = () => {
    setTimeout(() => {
      if (ref.current !== null) {
        console.log("bref");
        ref.current.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log("Ref is null");
      }
    }, 500);
  };
  return (
    <>
    <FollowerPointerCard>


      <Meteors number={50} />
      <div className="flex flex-col p-5 items-center min-h-screen bg-gradient-to-r from-primary to-blue-700 dark:to-secondary">
        <h2 className="scroll-m-20 mt-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          MaaS Network Architecture
        </h2>
        <p className="text-xl text-white w-[60%] p-8 text-center max-w-md min-w-[500px]">
          Understanding each component of the Network architecture and the
          reason why they are chosen and what role they play in the architecture
          🚀
        </p>
        <Alert className="max-w-screen-md m-2 mb-5">
          <ScrollTextIcon className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription className="flex flex-row gap-1 items-center justify-start">
            <span>You can scroll in the explanation </span>
            <span className="p-1 border rounded-md bg-primary/5 text-xs">
              Explanation Area
            </span>
          </AlertDescription>
        </Alert>

        <div className="flex items-start  flex-col justify-center">
          <Badge className="p-2 mb-1" variant="outline">
            <ScrollTextIcon className="h-4 w-4" />
            Explanation Area
          </Badge>
          <StickyScroll content={content} />
        </div>

        <button
          onClick={() => setShow(true)}
          className="m-5 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Reveal final architecture
        </button>

        {show && (
          <ContainerScroll
            titleComponent={
              <>
                <h1
                  ref={ref}
                  className="text-4xl font-semibold text-black dark:text-white"
                >
                  Final <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Network Architecture
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={`/network.jpg`}
              alt="hero"
              height={2000}
              width={2000}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={true}
            />
          </ContainerScroll>
        )}
      </div>
      </FollowerPointerCard>
    </>
  );
}

export default Network;
const content = [
  {
    title: "📱 Devices",
    description:
      "Devices such as tablets, smartphones, and laptops connect to the network through firewalls for initial security.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/devices.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "🔥 Firewalls",
    description:
      "Firewalls provide a first line of defense, blocking unauthorized access to the network and ensuring secure communication from devices.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/firewall.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "🌐 Edge Computing Nodes",
    description:
      "Edge computing nodes process data closer to the source, reducing latency and improving response times for critical applications.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/edge_computing.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "📡 Wireless Access Point",
    description:
      "Wireless access points provide connectivity to devices over Wi-Fi, allowing seamless access to the network.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/wireless_access_point.json"
          style={{ height: "200px", width: "200px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "📶 Cellular Tower",
    description:
      "Cellular towers enable mobile devices to connect to the network using 4G/5G technologies, ensuring wide-area coverage and mobility.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/cellular_tower.json"
          style={{ height: "200px", width: "200px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "🔀 Switch",
    description:
      "The network switch connects various devices and nodes within the network, managing data traffic efficiently.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/switch.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "☁️ Enterprise Cloud",
    description:
      "The enterprise cloud hosts critical services like web servers, DNS, and secure servers, providing scalable and reliable resources for the network.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/enterprise_cloud.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    ),
  },

  {
    title: "🔄 Business Continuity and Disaster Recovery",
    description:
      "Business continuity and disaster recovery plans ensure that the network remains operational and data is recoverable in case of any disruptions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/business_continuity.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "🗄️ Distributed Data Centers",
    description:
      "Distributed data centers enhance redundancy and reliability by hosting data and services across multiple locations.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/distributed_data_centers.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "📏 Network Protocols and Standards",
    description:
      "Standardized network protocols ensure interoperability and efficient communication between different components of the network.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/network_protocols.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    ),
  },
];
