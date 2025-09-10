"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbEllipsis,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Fragment } from "react";
import { useEffect, useState } from "react";
export default function Breadcrumbs() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  useEffect(() => setMounted(true), []);
  if (!mounted) return;

  if (pathname === "/") return;
  const parts = pathname.split("/").slice(1, -1);
  const crumbs = [];
  let href = "";
  for (const part of parts) {
    href += "/" + part;
    crumbs.push({ name: part, href });
  }
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Home className="size-3" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        {crumbs.map((c, i) => (
          <Fragment key={i}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={c.href}>{c.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Fragment>
        ))}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{pathname.split("/").pop()}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
