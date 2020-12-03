import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import {
  faLightbulb,
  faTachometerAlt,
  faLock,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { TraitTab } from "./TraitTab";
import { Space } from "../components/Space/Space";
import Image from "next/image";
import { Roll, Zoom } from "react-awesome-reveal";
import { Footer } from "../menu/Footer";

export function Technologies() {
  return (
    <div
      id="technologies"
      className="min-h-screen w-full flex flex-col items-center justify-start"
    >
      <Header title="I create web Apps" />
      <div className="w-full flex-grow flex flex-col justify-around items-center">
        <div className="flex flex-wrap items-center w-full justify-around max-w-7xl">
          <div className="flex lg:flex-wrap justify-around items-start flex-1">
            <Roll triggerOnce={true} delay={500}>
              <TraitTab
                title="Fast"
                desc="Performance and speed is my top priority."
                icon={faTachometerAlt}
              />
              <Roll triggerOnce={true} delay={1000}>
                <TraitTab
                  title="Usable"
                  desc="User Experience at the highest level."
                  icon={faLightbulb}
                />
              </Roll>
            </Roll>
          </div>
          <div className="flex lg:flex-wrap justify-around items-start flex-1">
            <Roll triggerOnce={true} delay={1500}>
              <TraitTab
                title="Secure"
                desc="Building apps that value data privacy."
                icon={faLock}
              />
            </Roll>

            <Roll triggerOnce={true} delay={2000}>
              <TraitTab
                title="Responsive"
                desc="Apps that fits all screen sizes."
                icon={faMobileAlt}
              />
            </Roll>
          </div>
        </div>
        <div className="flex-grow w-full bg-spacePurple text-white">
          <div className="flex flex-wrap max-w-7xl m-auto">
            <div className="flex content-center justify-center items-center flex-col flex-grow py-6">
              <div className="text-center mx-8 my-2 max-w-xl flex items-center justify-center flex-col lg:flex-col">
                <div className="">
                  <Zoom delay={500} triggerOnce={true} >
                    <Image
                      src="/about.jpg"
                      layout="intrinsic"
                      width={250}
                      height={250}
                      className="polygonal"
                    />
                  </Zoom>
                </div>
                <h1 className="text-2xl text-center md:text-3xl font-bold mt-4">
                  About me
                </h1>
                <p className="max-w-md mx-4 my-2">
                  Software development has been my passion since childhood. My
                  programming journey started at the age of 12 with a simple
                  "Hello World" PASCAL program, which was a spark to my computer
                  science curiosity. I am skilled in UI development and
                  algorithms and currently gaining knowledge about machine
                  learning and artificial inteligence.
                </p>
              </div>
            </div>
            <div className="flex content-center justify-center items-center flex-col flex-grow py-6">
              <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">
                Technologies
              </h1>
              <Zoom delay={500} triggerOnce={true}>
                <Space />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
