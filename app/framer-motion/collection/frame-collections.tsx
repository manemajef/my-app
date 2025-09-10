"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
const Box = ({
  children,
  color = "pink",
}: {
  children?: React.ReactNode;
  color?: string;
}) => (
  <div className="flex justify-center items-center">
    <div className={cn("min-w-64 min-h-64 rounded-2xl", `bg-${color}-400`)}>
      {children}
    </div>
  </div>
);
const MBox = motion.create(Box);

function AnimateInit() {
  const [showArticle, setShowArticle] = useState(false);
  return (
    <div className="">
      <Button size="lg" onClick={() => setShowArticle(!showArticle)}>
        {showArticle ? "hide article" : "show article"}
      </Button>
      {showArticle && (
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className=""
          >
            <Box />
          </motion.div>
        </div>
      )}
    </div>
  );
}
function AnimateBlur() {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <Button variant="link" onClick={() => setShow(!show)}>
        toggle show
      </Button>
      <motion.div
        initial={false}
        animate={{
          filter: show ? "none" : "blur(10px)",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Box />
      </motion.div>
    </div>
  );
}
function Transform() {
  const MotionButton = motion.create(Button);
  return (
    <MotionButton
      variant="secondary"
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
      hey
    </MotionButton>
  );
}
function Enter() {
  const [enter, setEnter] = useState(false);
  return (
    <div>
      <h3 className="text-2xl font-medium mb-2">Enter Animations</h3>
      <Button variant="link" onClick={() => setEnter(!enter)}>
        refrwsh
      </Button>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        eat ass with style
      </motion.div>
    </div>
  );
}
function Collapse() {
  const [open, setOpen] = useState(false);
  return (
    <div data-state={open}>
      <button onClick={() => setOpen(!open)} className="flex items-center">
        <ChevronRight
          className={cn("transition-transform size-4", open && "rotate-90")}
        />
        Toggle
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: "1" }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <Box />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
function Carusale({
  slides,
  className,
}: {
  slides: React.ReactNode[];
  className?: string;
}) {
  const [idx, setIdx] = useState(0);

  const next = () => {
    setIdx((i) => (i + 1) % slides.length);
  };
  const prev = () => {
    setIdx((i) => (i - 1 + slides.length) % slides.length);
  };
  return (
    <div className="relative w-80 overflow-hidden mx-auto">
      <AnimatePresence>
        <motion.div
          key={idx}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {slides[idx]}
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 flex justify-between">
        <Button size="sm" variant="outline" onClick={prev}>
          {" "}
          <ChevronLeft />
        </Button>
        <Button size="sm" variant="outline" onClick={next}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
export default function FrameCollection() {
  const colors = ["pink", "blue", "green", "red", "cyan"];
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 space-y-4">
      <AnimateInit />
      <AnimateBlur />
      <Transform />
      <Collapse />
      <Carusale
        slides={colors.map((c) => (
          <Box color="pink" key={c} />
        ))}
      />
    </div>
  );
}
