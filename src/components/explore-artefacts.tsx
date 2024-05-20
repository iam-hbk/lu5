import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Target } from "lucide-react";

export function ExploreArtefacts({
  ArchitectureName,
}: {
  ArchitectureName: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Explore Artefacts</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[80vw] w-[95vw] p-4 flex items-center justify-center">
        <DialogHeader>
          <DialogTitle>{ArchitectureName} Artefacts</DialogTitle>
          <NetworkCarrousel />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

const NetworkCarrousel = () => {
  return (
    <Carousel className="w-full ">
      <CarouselContent>
        <CarouselItem>
          <div className="flex flex-col">
            <h3 className="text-xl">Data Flow Diagram at the Network Level</h3>
            <div>
              <Alert className="max-w-screen-md m-2 mb-5">
                <AlertTitle>
                  <Badge>
                    Purpose <Target className="h-4 w-4" />
                  </Badge>
                </AlertTitle>
                <AlertDescription className="flex flex-row gap-1 items-center justify-start">
                  To visually represent the structure and layout of the network,
                  showing how different nodes (devices, servers, etc.) are
                  connected and communicate with each other.
                </AlertDescription>
              </Alert>
            </div>
            <Image
              src={"/Data Flow.svg"}
              alt="Data Flow Diagram"
              width={400}
              height={400}
              className="min-h-[300px] min-width-[300px] max-h-[600px] max-width-[600px] h-auto w-auto"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col">
            <h3 className="text-xl">Infrastructure Architecture</h3>
            <div>
              <Alert className="max-w-screen-md m-2 mb-5">
                <AlertTitle>
                  <Badge>
                    Purpose <Target className="h-4 w-4" />
                  </Badge>
                </AlertTitle>
                <AlertDescription className="flex flex-row gap-1 items-center justify-start">
                  To provide detailed designs of the physical and virtual
                  infrastructure supporting the MaaS platform, ensuring that all
                  necessary components are accounted for and properly
                  configured.
                </AlertDescription>
              </Alert>
            </div>
            <Image
              src={"/Infrastructure Architecture.svg"}
              alt="Infrastructure Architecture Diagram"
              width={400}
              height={400}
              className="min-h-[300px] min-width-[300px] max-h-[600px] max-width-[600px] h-auto w-auto"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col">
            <h3 className="text-xl">Communication Flowchart</h3>
            <div>
              <Alert className="max-w-screen-md m-2 mb-5">
                <AlertTitle>
                  <Badge>
                    Purpose <Target className="h-4 w-4" />
                  </Badge>
                </AlertTitle>
                <AlertDescription className="flex flex-row gap-1 items-center justify-start">
                  To illustrate the data flow and communication protocols
                  between different components of the MaaS platform, ensuring
                  that data moves efficiently and securely across the network.
                </AlertDescription>
              </Alert>
            </div>
            <Image
              src={"/Communication Flowchart.svg"}
              alt="Communication Flowchart Diagram"
              width={400}
              height={400}
              className=" min-width-[300px] max-h-[600px] max-width-[600px] w-auto"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
