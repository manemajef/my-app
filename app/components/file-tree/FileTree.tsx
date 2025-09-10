"use client";
import { useRoutes } from "@/components/context/route-context";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { RouteNode } from "@/lib/scan-routes";
import { AccordionItem } from "@radix-ui/react-accordion";
import Link from "next/link";

export default function Tree() {
  const routes = useRoutes();
  return (
    <Accordion type="multiple">
      {routes.map((r) => (
        <SubTree key={r.path} route={r} />
      ))}
    </Accordion>
  );
}

function SubTree({ route }: { route: RouteNode }): React.ReactNode {
  if (route.children.length <= 0) {
    return (
      <AccordionItem
        value={route.path}
        className="text-base mt-2 hover:[&>a]:underline"
      >
        <Link
          href={route.path}
          className="transition-transform text-foreground/70 ms-2 "
        >
          {route.segment}
        </Link>
      </AccordionItem>
    );
  }
  return (
    <AccordionItem value={route.path} className="">
      <AccordionTrigger className="mt-2 p-0  text-base">
        <Link href={route.path} className="text-foreground/70">
          {route.segment}{" "}
        </Link>
      </AccordionTrigger>

      <AccordionContent className="ps-4 pb-0 text-base">
        {route.children.map((c) => (
          <SubTree key={c.path} route={c} />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
