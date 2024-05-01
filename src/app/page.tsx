import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex items-center min-h-screen bg-slate-500 justify-center">
      <Card className="w-[450px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>
        <CardContent className=" space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm ">
            <Avatar>
              <AvatarFallback>MJ</AvatarFallback>
              <AvatarImage src="https://github.com/santozxy.png" alt="avatar" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Human:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              consectetur dolorem deserunt iusto quis porro explicabo nostrum
              voluptas! Doloribus molestiae nihil sequi eaque, aliquam ea est
              quae vel repellendus inventore?
            </p>
          </div>
          <div className="flex gap-3 text-slate-600 text-sm ">
            <Avatar>
              <AvatarFallback>RS</AvatarFallback>
              <AvatarImage
                src="https://github.com/rocketseat.png"
                alt="avatar"
              />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">AI:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              consectetur dolorem deserunt iusto quis porro explicabo nostrum
              voluptas! Doloribus molestiae nihil sequi eaque, aliquam ea est
              quae vel repellendus inventore?
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can i help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
