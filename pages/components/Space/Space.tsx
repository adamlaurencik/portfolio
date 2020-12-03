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
  WebpackImage,
  NodeImage,
} from "../TechologyImages/TechnologyImages";
import { PingImage } from "../PulseImage/PulseImage";

export function Space() {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="block sm:hidden">
        <MiniSpace />
      </div>
      <div className="hidden sm:block">
        <SmallSpace />
      </div>
    </div>
  );
}

function MiniSpace() {
  return (
    <div className="flex justify-center items-center relative w-miniSpace h-miniSpace">
      <Ring
        size={80}
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
        width={60}
        height={60}
        className="rounded-full"
      />
    </div>
  );
}
function SmallSpace() {
  return (
    <div className="flex justify-center items-center relative h-smallSpace w-smallSpace">
      <Ring
        size={90}
        Images={[
          { image: ReactImage, type: "bottom" },
          { image: HTMLImage, type: "left" },
          { image: DockerImage, type: "top" },
          { image: WebpackImage, type: "right" },
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
        width={70}
        height={70}
        className="rounded-full"
      />
    </div>
  );
}
