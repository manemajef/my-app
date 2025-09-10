"use client";
import { useRelativeRoutes } from "@/hooks/use-relative-routes";
import { useRoutes } from "./context/route-context";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "./ui/card";
import { useEffect, useState } from "react";

export default function FolderList() {
  const routes = useRelativeRoutes();
  if (routes.length <= 0) return;
  return (
    <div className="mx-auto max-w-2xl">
      <ul>
        {routes.map((r, i) => (
          <li key={i}>
            <Button variant="link" asChild className="**:text-lg">
              <Link href={r.path} className="">
                {r.segment}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export function FolderButtons() {
  const routes = useRelativeRoutes();
  if (routes.length <= 0) return;
  return (
    <div className="py-12 mx-auto max-w-2xl flex gap-4 flex-wrap justify-center">
      {routes.map((r, i) => (
        <Button key={i} asChild size="lg" variant="outline">
          <Link href={r.path}>{r.segment}</Link>
        </Button>
      ))}
    </div>
  );
}

export function AbsFolderBtns() {
  const routes = useRoutes();
  return (
    <div className="py-12 mx-auto max-w-2xl flex gap-4 flex-wrap justify-center">
      {routes.map((r, i) => (
        <Button key={i} asChild size="lg" variant="outline">
          <Link href={r.path}>{r.segment}</Link>
        </Button>
      ))}
    </div>
  );
}
