import Image from "next/image";
import FileTree from "@/components/file-tree";
import Link from "next/link";
import FolderButtons from "@/components/folder-buttons";
import FolderList from "@/components/folder-list";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="px-4 mx-auto max-w-2xl py-24 sm:py-32 lg:py-48">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-7xl">
          My App
        </h1>
        <p className="mt-8 text-lg font-medium text-preety text-foreground/50 sm:text-xl/8">
          This is where I expirience with frontend stuff, using{" "}
          <Badge variant="outline">NextJs</Badge>,{" "}
          <Badge variant="outline">Shadcn</Badge>,{" "}
          <Badge variant="outline">Motions</Badge> and more to come. Use the
          Sidebar for quick navigation.
        </p>
        <div className="my-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="/navigate">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="https://github.com/manemajef/my-app">Source Code</Link>
          </Button>
        </div>
      </div>

      {/* <FileTree /> */}

      {/* <section id="folders" className="mt-48 pt-6">
        <h1 className="title text-center">Folders</h1>
        <FolderButtons />
      </section> */}
    </div>
  );
}
