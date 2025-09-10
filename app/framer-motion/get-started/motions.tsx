"use client";
import * as motion from "motion/react-client";
import { useState } from "react";
const box = "size-24 bg-sky-500 mx-auto p-4 rounded-2xl";
export function RotateExample() {
  return (
    <div className="p-4">
      <motion.div
        className={`${box} flex justify-center items-center`}
        // animate={{ rotate: 360 }}
        transition={{ duration: 1, ease: "linear" }}
        whileHover={{ rotate: 360 }}
      >
        div
      </motion.div>
    </div>
  );
}

export function RotateHover() {
  return (
    <div className="p-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={box}
      >
        button
      </motion.button>
    </div>
  );
}

export function ScrollAnimate() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-pink-400 p-6 rounded-2xl"
    >
      I fade in when i enter viewport
    </motion.div>
  );
}

export function LayoutAnimate() {
  const [open, setOpen] = useState(false);
  return (
    <motion.div layout className="p-4 bg-pink-400 rounded-lg w-64">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-start font-semibold"
      >
        Toggle Dropdown
      </button>
      {open && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mt-2 bg-background p-3 rounded shadow"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          veritatis, exercitationem quisquam non temporibus atque perspiciatis
          vel quibusdam minima minus harum blanditiis delectus dolor consectetur
          laboriosam? Nostrum iste dicta voluptatem?
        </motion.div>
      )}
    </motion.div>
  );
}
