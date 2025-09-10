import FrameCollection from "./frame-collections";
export default function Page() {
  return (
    <div className="container mx-auto my-12 ">
      <h1 className="text-4xl font-medium px-6 tracking-tighter">
        A Collection of Frames
      </h1>
      <FrameCollection />
    </div>
  );
}
