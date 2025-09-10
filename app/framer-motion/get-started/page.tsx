import {
  LayoutAnimate,
  RotateExample,
  RotateHover,
  ScrollAnimate,
} from "./motions";
export default function Page() {
  return (
    <div className="my-12">
      <section className="prose">
        <h1 className="">Why Motion for React?</h1>
        <p>
          React gives you the power to build dynamic user interfaces, but it is
          challenging to make the reactions nicely annimated. while css an be
          helpfull for some cases, when layout changes envolve React's
          re-rednering, it becomes challenging to use only css.
        </p>
        <h2>Your first animation</h2>
        <p>
          The <code>{"<motion />"}</code> component is the core API in Motion
          for React. it's a DOM element, supercharged with animation.
        </p>
        <h3>Rotate</h3>
        <div className="flex justify-center gap-4">
          <RotateExample />
          <RotateHover />
        </div>
        <h3>Fade in</h3>
        <br />
        <ScrollAnimate />
        <h3>Layout</h3>
        <LayoutAnimate />
      </section>
    </div>
  );
}
