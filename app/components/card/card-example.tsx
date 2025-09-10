"use client";
import { usePathname } from "next/navigation";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
export default function CardExample() {
  return (
    <div>
      <div className="flex gap-4 justify-center">
        <Card className="w-fit">
          <CardHeader>
            <CardTitle>testing pathName</CardTitle>
            <CardDescription>
              <p>
                <code>{usePathname()}</code>
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-[10em] h-[10em] rounded-xl bg-foreground/30" />
          </CardContent>
        </Card>
      </div>
      <br />
      <div className="flex gap-4 ">
        <Card className="px-4 py-6 ">
          <CardTitle>this is the title</CardTitle>
          this is a very simple card, only component is{" "}
          {`<Card className = "px-4 py-6"/>`}. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Alias laudantium aliquid nesciunt
          similique mollitia eum
          <CardDescription>this is descirptiuon in footer</CardDescription>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>This is title</CardTitle>
            <CardDescription>a description</CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis
            officiis a temporibus, alias obcaecati sequi atque perspiciatis
            corrupti maxime quam eaque odio inventore doloribus quas consectetur
            facilis quia ab?
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
