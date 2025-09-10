"use client";
const fakeClients = [
  "Bob",
  "Jeff",
  "Kai",
  "Erts",
  "Bitch",
  "Ass",
  "Nggga",
  "Nicky Minaj",
  "Nicky Miraj",
  "Bob 2",
];
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

export default function SelectClient() {
  const [text, setText] = useState("");
  let clients = fakeClients.filter((c) => c.includes(text));
  if (clients.length > 5) {
    clients = clients.slice(0, 4);
  }
  const [chosen, setChosen] = useState(null);
  return (
    <div>
      <Command>
        <CommandInput
          placeholder="Choose a client"
          value={text}
          onValueChange={(v) => setText(v)}
        />
        <CommandList>
          <CommandEmpty>No result</CommandEmpty>
          <CommandItem className="">
            <button className="bg-red-500/20 py-1 px-4 rounded-full">
              add {text} as client and choose
            </button>
          </CommandItem>
          <CommandGroup>
            {clients.map((c) => (
              <CommandItem key={c} onClick={() => setChosen(c)}>
                {c}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
