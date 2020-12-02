import React from "react";
import Image from "next/image";
import { Ring } from "../Ring/Ring";
import {
  ReactImage,
  TypescriptImage,
  JavascriptImage,
  DockerImage,
  ReduxImage,
  HTMLImage,
  CSSImage,
} from "../TechologyImages/TechnologyImages";
import { PingImage } from "../PulseImage/PulseImage";

export function Space() {
  return (
    <div className="flex justify-center items-center relative w-smallSpace md:h-bigSpace h-smallSpace md:w-bigSpace">
      <Ring
        size={90}
        Images={[
          { image: ReactImage, type: "bottom" },
          { image: HTMLImage, type: "left" },
          { image: DockerImage, type: "top" },
        ]}
      />
      <Ring
        size={50}
        Images={[
          {
            image: TypescriptImage,
            type: "top",
          },
          {
            image: JavascriptImage,
            type: "right",
          },

          { image: CSSImage, type: "left" },
          { image: ReduxImage, type: "bottom" },
        ]}
      />
      <PingImage
        isPulsing={true}
        src="/profile.png"
        alt="My profile picture"
        width={80}
        height={80}
        className="rounded-full"
      />
    </div>
  );
}
