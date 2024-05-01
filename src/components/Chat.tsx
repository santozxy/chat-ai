"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, handleInputChange, handleSubmit, input } = useChat({
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content: "Hello! How can I help you today?",
      },
    ],
  });
  return (
    <Card className="sm:w-3/4 bg-zinc-300">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] max-sm:h-screen w-full space-y-4 p-2">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slate-600 text-sm "
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>MJ</AvatarFallback>
                    <AvatarImage
                      src="https://github.com/santozxy.png"
                      alt="avatar"
                    />
                  </Avatar>
                )}
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>RS</AvatarFallback>
                    <AvatarImage
                      src="https://github.com/rocketseat.png"
                      alt="avatar"
                    />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "assistant" ? "AI" : "Human"}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form
          action="POST"
          onSubmit={handleSubmit}
          className="flex w-full gap-2"
        >
          <Input
            placeholder="How can i help you?"
            value={input}
            onChange={handleInputChange}
            className=" bg-slate-100"
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
