import React, { useCallback } from "react";
import { Background } from "./Background";
import { Button } from "../components/Button/Button";
import { scroller } from "react-scroll";
import Typewriter from "typewriter-effect";

export function Landing() {
  const scrollToTechnologies = useCallback(() => {
    scroller.scrollTo("technologies", {
      smooth: true,
    });
  }, []);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center justify-center z-10">
        <div className="mx-10 text-white text-2xl">
          <div className="my-1">Hello, </div>
          <div className="my-1">
            I'm <span className="text-red-400 font-bold">Adam Laurenčík</span>.
          </div>
          <div className="my-1">
            I'm a
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(w) =>
                w
                  .typeString("Web developer.")
                  .deleteAll()
                  .typeString("Software engineer")
                  .deleteAll()
                  .typeString("React developer")
                  .deleteAll()
                  .start()
              }
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <Button onClick={scrollToTechnologies}>Learn more</Button>
          </div>
        </div>
      </div>
      <Background />
    </div>
  );
}
