import SelectClient from "./select-client";
import FuzzyPage from "./vibe-coded-page";

export default function Page() {
  return (
    <div className="page">
      <h1 className="title">UI pieces for clients app</h1>
      <br />
      <h2 className="text-2xl">Input for client</h2>
      <SelectClient />
      <br />
      <h2 className="text-2xl">Vibe coded one</h2>
      <FuzzyPage />
    </div>
  );
}
