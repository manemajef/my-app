import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "./ui/collapsible";
import { DynamicIcon } from "lucide-react/dynamic";
import type { IconName } from "lucide-react/dynamic";

export function CollapseButton({
  icon = "chevron-right",
  iconPosition = "start",
  children,
}: {
  icon?: IconName;
  iconPosition?: "start" | "end" | "none";
  children: React.ReactNode;
}) {
  const Icon = (
    <div className="inline-flex w-4 items-center justify-center">
      <DynamicIcon name={icon} className="chev w-4 transition-transform" />
    </div>
  );

  return (
    <CollapsibleTrigger asChild>
      <button
        className={` box-border
          flex w-full  items-center gap-2  px-2 mt-2  transition
          [&[data-state=open]_.chev]:rotate-90 [&[data-state=open]_.chev]:opacity-25 border-b border-transparent ${
            iconPosition === "end" && "justify-between"
          } hover:border-b-border
        `}
      >
        {iconPosition === "start" && Icon}
        {children}
        {iconPosition === "end" && Icon}
      </button>
    </CollapsibleTrigger>
  );
}

export function Collapse({
  children,
  label,
  icon = "chevron-right",
  iconPosition = "start",
}: {
  children: React.ReactNode;
  label: string | React.ReactNode;
  icon?: IconName;
  iconPosition?: "start" | "end" | "none";
}) {
  return (
    <Collapsible className="w-full">
      <CollapseButton icon={icon} iconPosition={iconPosition}>
        {label}
      </CollapseButton>
      <CollapsibleContent
        className={`p-2 ${
          iconPosition === "start" && "ms-6"
        } text-foreground/80`}
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
