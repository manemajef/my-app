"use client";
import { createContext, useContext } from "react";
import type { RouteNode } from "@/lib/scan-routes";

const RoutesContext = createContext<RouteNode[] | null>(null);
export function RoutesProvider({
  routes,
  children,
}: {
  routes: RouteNode[];
  children: React.ReactNode;
}) {
  return (
    <RoutesContext.Provider value={routes}>{children}</RoutesContext.Provider>
  );
}

export function useRoutes() {
  const ctx = useContext(RoutesContext);
  if (!ctx) throw new Error("useRoutes must be used within a RoutesProvider");
  return ctx;
}
