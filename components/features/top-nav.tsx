import ThemeToggle from "../theme-toggle";
import Breadcrumbs from "./breadcrumbs";
import { Home } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";

export default function TopNav({ trigger }: { trigger: React.ReactNode }) {
  return (
    <div className="sticky top-0 bg-background border-b z-50">
      <div className="mx-auto flex max-w-7xl justify-between pt-2 pb-1 px-4 items-center">
        <div className="flex gap-4 items-center">
          <Button variant="ghost" asChild size="icon">
            {trigger}
          </Button>
          <Separator orientation="vertical" />
          <Breadcrumbs />
        </div>
        {/* <div className="w-fit mx-auto "> */}

        {/* </div> */}
        <div className="flex gap-2">
          <Button asChild size="icon" variant="ghost">
            <Link href="/">
              <Home />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
