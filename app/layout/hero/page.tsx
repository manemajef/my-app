import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CodeBlock,
  CodeBlockCopyButton,
} from "@/components/ai-elements/code-block";
import Link from "next/link";
const code = [
  {
    language: "html",
    filename: "hero.html",
    code: `
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance sm:test-7xl">
                Welcome to the first Hero
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-foreground/50 sm:test-xl/8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit aspernatur quae adipisci quia cupiditate enim
                perspiciatis!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button>Get Started</Button>
                <Button variant="outline">Learn more</Button>
              </div>
            </div>
          </div>
    `,
  },
];
export default function Page() {
  return (
    <div>
      <Tabs defaultValue="preview" className="">
        <div className="flex justify-center relative">
          <TabsList className="mx-auto max-w-fit mt-4 absolute left-auto">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance sm:test-7xl">
                Welcome to the first Hero
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-foreground/50 sm:test-xl/8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit aspernatur quae adipisci quia cupiditate enim
                perspiciatis!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild>
                  <Link href="#guidelines">Get Started</Link>
                </Button>
                <Button variant="outline">Learn more</Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code"></TabsContent>
      </Tabs>
      <section id="guidelines" className="my-24">
        <div className="prose">
          <h1>Guide lines</h1>
          <h2>The Container</h2>
          <pre className="flex justify-center">
            <code className="max-w-3xl">
              {`<div class = "mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"> </div>`}
            </code>
          </pre>
          <ul itemType="">
            <li>
              <code>mx-auto</code>
              {` `} : centers the content
            </li>
            <li>
              <code>max-w-2xl</code> : gives the centered content a max width of
              around <code>42em</code>
            </li>
            <li>
              <code>py-32 sm:py-48 lg:py-56</code> : makes the height
              interactive
            </li>
          </ul>
          <h2>The Title</h2>
          <pre>
            <code className="overflow-ellipsis">
              {`<h2 class = "text-5xl font-semibold tracking-tight text-tight sm:text-7xl> </h2>"`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
}
