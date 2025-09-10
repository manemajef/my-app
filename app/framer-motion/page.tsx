import { Button } from "@/components/ui/button";
import Link from "next/link";
import FolderList from "@/components/folder-list";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
export default function Page() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-5xl font-medium tracking-tight sm:text-7xl">
          Framer<i> Motion</i>
        </h1>
        <p className="mt-8 text-foreground/80">
          A <i>JS</i> library for animations. works with react, plain js, and
          more.
        </p>
        <div className="mt-10 flex justify-center items-center gap-4">
          <Button asChild size="lg">
            <Link href="/framer-motion/get-started">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="https://motion.dev/docs/react">Docomontaions</Link>
          </Button>
        </div>
        <div className="mx-auto mt-12 ">
          <Card className="max-w-xs mx-auto">
            <CardHeader>
              <CardTitle>Links</CardTitle>
            </CardHeader>
            <CardContent>
              <FolderList />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
