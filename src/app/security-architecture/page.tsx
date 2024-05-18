

import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

function Security() {
  return (
    <FollowerPointerCard>
      <div className="flex flex-col p-5 items-center min-h-screen">
        <h2 className="scroll-m-20 mt-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          MaaS Security Architecture
        </h2>
        <p className="text-xl text-muted-foreground w-[60%] p-8 text-center max-w-md min-w-[500px]">
          Build the components of the MaaS Network Architecture Diagram step by
          step, understanding the reason why they are chosen and what role they
          play in the architecture 🚀
        </p>
        <StickyScroll content={content} />
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
    </FollowerPointerCard>
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
        <Image
          src="/encryption.gif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "🌐 Network Load Balancer",
    description:
      "Data is routed through a network load balancer, which distributes traffic evenly across multiple servers. This not only improves performance but also enhances reliability by preventing any single server from becoming overloaded.",
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
    title: "🛡️ VPN Gateway",
    description:
      "A VPN gateway provides an additional layer of security by encapsulating data within a virtual private network. This ensures that even if data is intercepted during transmission, it remains protected and unreadable.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "🔥 Firewall and IDS/IPS",
    description:
      "Data then passes through a firewall and Intrusion Detection/Prevention Systems (IDS/IPS). The firewall blocks unauthorized access, while IDS/IPS monitor for and respond to suspicious activities, providing robust defense against cyber threats.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "🎯 Honeypot and Intrusion Isolation",
    description:
      "A honeypot lures potential attackers into a decoy system, gathering valuable intelligence on attack methods. Meanwhile, an intrusion isolation system quarantines any detected threats, preventing them from impacting the main network.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "🗄️ Secure Backup Data Store",
    description:
      "All encrypted data is securely stored in a backup data store. This ensures that, in case of any data loss or corruption, the data can be easily restored, maintaining business continuity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "🔒 Staff Access and Multi-Factor Authentication (MFA)",
    description:
      "Staff access is controlled through a network access control list and multi-factor authentication (MFA) tokens. This ensures that only authorized personnel can access sensitive systems and data, significantly reducing the risk of insider threats.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "🕵️‍♂️ Continuous Monitoring and Auditing",
    description:
      "The network is continuously monitored for any unusual activities, and regular audits are conducted to ensure compliance with security policies. This ongoing vigilance helps maintain the integrity and security of the Mobility as a Service ecosystem, making it resilient against evolving threats.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
