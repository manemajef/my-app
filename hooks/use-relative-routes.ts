"use client";
import type { RouteNode } from "@/lib/scan-routes";
import { useRoutes } from "@/components/context/route-context";
import { usePathname } from "next/navigation";

function dfs(target: string, routes: RouteNode[]): RouteNode[] {
  for (const route of routes) {
    if (route.path === target) return route.children;
    if (route.children.length > 0) {
      const res = dfs(target, route.children);
      if (res.length > 0) return res;
    }
  }
  return [];
}

export function useRelativeRoutes(): RouteNode[] {
  const pathname = usePathname();
  const routes = useRoutes();
  if (pathname === "/") return routes;

  return dfs(pathname, routes);
}
