export default function Page() {
  const colors = ["accent", "muted", "secondary", "primary", "popover", "card"];
  return (
    <div className="section">
      <h1 className="title">Theme Variables</h1>
      <ul className="flex gap-4 flex-wrap">
        {colors.map((c, i) => (
          <div
            key={i}
            className={`light py-4   px-6 rounded-2xl my-6 bg-${c} text-${c}-foreground`}
          >
            {c}
          </div>
        ))}
      </ul>
    </div>
  );
}
