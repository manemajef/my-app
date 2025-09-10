import { Button } from "@/components/ui/button";
import Link from "next/link";

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
            <Link href="#">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#">Docomontaions</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
