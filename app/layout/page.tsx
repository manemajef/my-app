import {
  NextPrevNav,
  NextButton,
  PrevButton,
} from "@/components/prev-next-buttons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <div className="page">
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-7xl font-medium lg:text-6xl">
              Layouts
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="mt-8 max-w-2xl mx-auto">
              in this section, we will go through common layouts such as{" "}
              <i>Hero section</i>, <i>Features section</i>, and <i>CTA</i>. Well
              explore different principles, common patterns and spacing. We will
              also explore Basic animations.
            </p>
            <div className=" flex gap-4 justify-center mt-6">
              <Button size="lg" asChild>
                <Link href={"/layout/hero"}>Get Started</Link>
              </Button>
              <Button size="lg" asChild variant="outline">
                <Link href={"/"}>Go Home</Link>
              </Button>
            </div>
          </div>
          <div className="mt-24">
            <NextPrevNav>
              <PrevButton />
              <NextButton href={"/layout/hero"} />
            </NextPrevNav>
          </div>
        </div>
      </section>
    </div>
  );
}
