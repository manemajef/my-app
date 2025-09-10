"use client";
import { Badge } from "@/components/ui/badge";
export default function BadgeExample() {
  return (
    <div>
      <h1 className="title">Badge example</h1>
      <div className="flex gap-4 p-4 max-w-fit mx-auto m-2 border rounded-2xl">
        <Badge variant="default">default</Badge>
        <Badge variant="outline">outline</Badge>
        <Badge variant="destructive">destructive</Badge>
        <Badge variant="secondary">secondary</Badge>
      </div>
      <div className="dark flex gap-4 p-4 bg-background mx-auto rounded-2xl max-w-fit">
        <Badge variant="default">default</Badge>
        <Badge variant="outline">outline</Badge>
        <Badge variant="destructive">destructive</Badge>
        <Badge variant="secondary">secondary</Badge>
      </div>
    </div>
  );
}
