import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
export function NextPrevNav({ children }: { children?: React.ReactNode }) {
  return (
    <div className="p-4 max-w-3xl mx-auto flex justify-between">{children}</div>
  );
}

export function PrevButton({ href }: { href?: string }) {
  if (!href) {
    return <div></div>;
  }
  return (
    <Button asChild size="lg" variant="outline">
      <Link href={href} className="flex gap-4 items-center">
        <ChevronLeft />
        {href.split("/").pop()}
      </Link>
    </Button>
  );
}

export function NextButton({ href }: { href?: string }) {
  if (!href) return <div></div>;
  return (
    <Button asChild size="lg" variant="outline">
      <Link href={href} className="flex gap-4 items-center">
        {href.split("/").pop()}
        <ChevronRight />
      </Link>
    </Button>
  );
}
