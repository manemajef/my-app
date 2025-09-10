import Image from "next/image";
import FileTree from "@/components/file-tree";
import FolderButtons from "@/components/folder-buttons";
import FolderList from "@/components/folder-list";
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="title max-w-fit mx-auto">hello</h1>
      {/* <FileTree /> */}
      <FolderButtons />
      <FolderList />
    </div>
  );
}
