"use client";

import { useChat } from "ai/react";
import { Input } from "./ui/input";
import { useEffect, useRef } from "react";
import { BotIcon, Loader, Send, StopCircleIcon, User2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom function
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto overflow-x-auto">
      {messages.map((m) => (
        <div key={m.id} className="flex flex-col gap-5 h-full justify-start">
          {m.role === "user" ? (
            <UserRole message={m.content} />
          ) : (
            <AIRole message={m.content} />
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />

      <form onSubmit={handleSubmit}>
        <div className="fixed bottom-0 w-80 max-w-sm flex flex-row gap-1">
          <Input
            disabled={isLoading}
            className=" p-2 mb-8 border  bg-white dark:bg-black rounded shadow-xl"
            value={input}
            placeholder="Wanna Ask Something ?"
            onChange={handleInputChange}
          />
          {isLoading ? (
            <Button
              variant={"outline"}
              className="bg-white dark:bg-black"
              onClick={() => {
                stop();
                toast.error("Request Cancelled!", {
                  position: "top-right",
                });
              }}
            >
              <StopCircleIcon size={"18px"} />
            </Button>
          ) : (
            <Button
              variant={"outline"}
              className="bg-white dark:bg-black"
              type="submit"
            >
              <Send size={"18px"} />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

const UserRole = ({ message }: { message: string }) => {
  return <p className="border rounded-md p-2 w-fit my-2 ">{message}</p>;
};

const AIRole = ({ message }: { message: string }) => {
  return (
    <p className="border rounded-md p-2 bg-blue-950 text-white">{message}</p>
  );
};
