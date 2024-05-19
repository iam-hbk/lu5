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

function Security() {
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
            MaaS Security Architecture
          </h2>
          <p className="text-xl text-white w-[60%] p-8 text-center max-w-md min-w-[500px]">
            Understanding each component of the security architecture and the
            reason why they are chosen and what role they play in the
            architecture 🚀
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
                      Security Architecture
                    </span>
                  </h1>
                </>
              }
            >
              <Image
                src={`/Security_final.jpg`}
                alt="hero"
                height={700}
                width={400}
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

export default Security;

const content = [
  {
    title: "📱 Mobile Network and Encryption",
    description:
      "User data is encrypted before transmission, ensuring confidentiality and integrity over the mobile network. This initial encryption prevents unauthorized access and keeps the data secure from the start.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/Encryption.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "🌐 Network Load Balancer",
    description:
      "Data is routed through a network load balancer, which distributes traffic evenly across multiple servers. This not only improves performance but also enhances reliability by preventing any single server from becoming overloaded.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/network.json"
          style={{ height: "200px", width: "200px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "🛡️ VPN Gateway",
    description:
      "A VPN gateway provides an additional layer of security by encapsulating data within a virtual private network. This ensures that even if data is intercepted during transmission, it remains protected and unreadable.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/vpn.json"
          style={{ height: "200px", width: "200px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "🔥 Firewall and IDS/IPS",
    description:
      "Data then passes through a firewall and Intrusion Detection/Prevention Systems (IDS/IPS). The firewall blocks unauthorized access, while IDS/IPS monitor for and respond to suspicious activities, providing robust defense against cyber threats.",
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
    title: "🎯 Honeypot and Intrusion Isolation",
    description:
      "A honeypot lures potential attackers into a decoy system, gathering valuable intelligence on attack methods. Meanwhile, an intrusion isolation system quarantines any detected threats, preventing them from impacting the main network.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/honeypot.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "🗄️ Secure Backup Data Store",
    description:
      "All encrypted data is securely stored in a backup data store. This ensures that, in case of any data loss or corruption, the data can be easily restored, maintaining business continuity.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/backup.json"
          style={{ height: "200px", width: "2x00px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "🔒 Staff Access and Multi-Factor Authentication (MFA)",
    description:
      "Staff access is controlled through a network access control list and multi-factor authentication (MFA) tokens. This ensures that only authorized personnel can access sensitive systems and data, significantly reducing the risk of insider threats.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/2fa.json"
          style={{ height: "200px", width: "2x00px" }}
        ></Player>
      </div>
    ),
  },
  {
    title: "🕵️‍♂️ Continuous Monitoring and Auditing",
    description:
      "The network is continuously monitored for any unusual activities, and regular audits are conducted to ensure compliance with security policies. This ongoing vigilance helps maintain the integrity and security of the Mobility as a Service ecosystem, making it resilient against evolving threats.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Player
          autoplay
          loop
          src="/monitoring.json"
          style={{ height: "200px", width: "2x00px" }}
        ></Player>
      </div>
    ),
  },
];
