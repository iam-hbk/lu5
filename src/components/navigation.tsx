"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import ChatBot from "@/components/chatbot";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ModeToggle } from "./theme-toggle";
import React from "react";
import { Button } from "./ui/button";
import { BotMessageSquareIcon } from "lucide-react";

type Props = {};

const Menu = (props: Props) => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="m-2">
      <NavigationMenuList>
        {pathname === "/" ? null : (
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                ← Go back to the Home Page
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Sheet>
            <SheetTrigger className=" gap-3 dark:bg-primary h-9 px-4 py-2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Talk to the MaaS Bot <BotMessageSquareIcon />
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="overflow-y-scroll"
            >
              <SheetHeader>
                <SheetTitle>
                  Ask Anything about the MaaS Enterprise Architecture
                </SheetTitle>
                <SheetDescription>
                  The MaaS Bot is here to help you with any questions you have
                  about the MaaS Enterprise Architecture. It is trained to
                  answer questions about the architecture, its components, and
                  the case study UJ Bcom Information Systems Architecture
                  Students have been exploring.
                </SheetDescription>
              </SheetHeader>
              <ChatBot />
            </SheetContent>
          </Sheet>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
