import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CollapseButton, Collapse } from "@/components/collapse";

import { ChevronRight } from "lucide-react";
export default function Page() {
  return (
    <div className="page">
      <h1 className="title">Collapse</h1>
      <h2 className="text-xl">Collapse with a chevron at start</h2>

      <div className="flex gap-4">
        <Collapsible className="w-full">
          <CollapseButton iconPosition="start">using import</CollapseButton>
          <CollapsibleContent className="ms-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minima
            blanditiis dolore soluta error! Cumque earum, ea velit debitis ipsum
            blanditiis similique explicabo nemo maiores, ullam, quaerat delectus
            error veniam.
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="w-full">
          <CollapseButton iconPosition="end">using import</CollapseButton>
          <CollapsibleContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minima
            blanditiis dolore soluta error! Cumque earum, ea velit debitis ipsum
            blanditiis similique explicabo nemo maiores, ullam, quaerat delectus
            error veniam.
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div className="flex gap-4 mt-4">
        <Collapse label="with label">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa
          magnam omnis velit, nisi temporibus sint quidem amet nemo repellat
          nostrum quae incidunt porro sapiente deserunt assumenda beatae nobis
          error?
        </Collapse>
        <Collapse label="with end side" iconPosition="end">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          libero fugit rem atque, esse quibusdam eaque nisi, et impedit minus,
          eligendi assumenda debitis doloremque qui nihil. A, maxime. Est, et.
        </Collapse>
      </div>
      <br />
      <h1 className="title">Using Accordion</h1>

      <div className="flex gap-4 mt-4">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="1">
            <AccordionTrigger>Using Accordion!</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias
              facilis magnam?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="1">
            <AccordionTrigger>Using Accordion!</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias
              facilis magnam?
              <Accordion type="multiple" className="ms-4">
                <AccordionItem value="1">
                  <AccordionTrigger>a nested one!</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, rem. Aliquam asperiores cumque rem perspiciatis
                    veritatis velit iure nostrum error minima, in quia? Delectus
                    reprehenderit aut maiores ratione tempore mollitia!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
