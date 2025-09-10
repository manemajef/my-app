"use client";

import { useState } from "react";
import { FuzzySelect } from "./vibe-coded-fuzzy";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const initialOptions = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
  "Mango",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Watermelon",
];

export default function FuzzyPage() {
  const [selectedFruit, setSelectedFruit] = useState<string>("");
  const [fruits, setFruits] = useState<string[]>(initialOptions);

  const handleFruitChange = (value: string) => {
    setSelectedFruit(value);

    // Add new fruit to options if it doesn't exist
    if (!fruits.includes(value)) {
      setFruits((prev) => [...prev, value].sort());
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Fuzzy Select Component
          </h1>
          <p className="text-muted-foreground">
            Search through options with fuzzy matching and create new values on
            the fly
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Select a Fruit</CardTitle>
            <CardDescription>
              Type to search through existing fruits or create a new one. Try
              typing partial matches like "app" for Apple or "ber" for
              Elderberry.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FuzzySelect
              options={fruits}
              value={selectedFruit}
              onValueChange={handleFruitChange}
              placeholder="Choose a fruit..."
              emptyMessage="No fruits found. Type to create a new one!"
              allowCreate={true}
              createLabel="Add fruit"
              className="w-full"
            />

            {selectedFruit && (
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium">Selected fruit:</p>
                <p className="text-lg">{selectedFruit}</p>
              </div>
            )}

            <div className="space-y-2">
              <p className="text-sm font-medium">
                Available fruits ({fruits.length}):
              </p>
              <div className="flex flex-wrap gap-2">
                {fruits.map((fruit) => (
                  <span
                    key={fruit}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                  >
                    {fruit}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
