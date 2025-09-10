import FolderButtons from "@/components/folder-buttons";
import FolderList from "@/components/folder-list";
export default function Page() {
  return (
    <div className="page">
      <div className="mt-12 max-w-2xl mx-auto">
        <h1 className="text-4xl font-medium sm:text-6xl">Components</h1>
        {/* <FolderButtons /> */}
        <FolderList />
      </div>
    </div>
  );
}
