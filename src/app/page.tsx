"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(1715904000000));

  return (
    <main>
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-5 ">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          IS Architecture Due Date
        </h1>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    </main>
  );
}
