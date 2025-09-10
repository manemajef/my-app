import { useRoutes } from "@/components/context/route-context";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Tree from "./FileTree";

import FileTree from "@/components/file-tree";

export default function Page() {
  return (
    <div className="page">
      <h1 className="title">File Tree</h1>
      <div className="container mx-auto px-6 py-8">
        <FileTree />
      </div>
      <div>
        <h2 className="text-2xl">Using Accordion</h2>
        <div className="flex">
          <Tree />
        </div>
      </div>
    </div>
  );
}
