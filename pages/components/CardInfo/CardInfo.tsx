import React, { useState } from "react";
import { Button } from "../Button/Button";
import Typewriter from "typewriter-effect";

export function CardInfo() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="md:w-3/4 w-5/6 border-2 h-3/4 flex items-left justify-center border-spaceBlack flex-col p-2 md:p-10 bg-white rounded-md">
        <div className="flex-1 flex items-left justify-center flex-col">
          <h1 className="font-sans font-bold text-4xl lg:text-6xl mb-2 text">
            <Typewriter
              options={{
                delay: 30,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Frontend")
                  .pauseFor(200)
                  .deleteAll(20)
                  .typeString("Software developer")
                  .start();
              }}
            />
          </h1>
          <hr className="bg-black w-36 h-2 mb-6" />
          <p className="text-lg lg:text-xl font-bold font-sans text-justify">
            Hello, my name is Adam. Software development has been my passion
            since childhood. My programming journey started at the age of 12
            with a simple "Hello World" PASCAL program. This program was a spark
            to my desire for the computer science.
          </p>
        </div>
        <div className="flex justify-end items-end">
          <Button>Learn more</Button>
        </div>
      </div>
    </div>
  );
}
