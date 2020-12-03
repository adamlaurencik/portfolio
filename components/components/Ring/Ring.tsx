import React from "react";

type RingProps = {
  size: number;
  Images: {
    image: React.ReactElement;

    type?: "top" | "right" | "left" | "bottom";
  }[];
};

export const Ring = ({ size, Images }: RingProps) => {
  return (
    <div
      className={`border-2 border-gray-500 rounded-full flex items-center justify-center absolute animate-spin slow-animation`}
      style={{ width: `${size}%`, height: `${size}%` }}
    >
      {Images.map(({ image, type }, index) => (
        <div
          key={index}
          className={`absolute ${type}-0 -m-4  w-8 h-8  md:-m-5 md:w-10 md:h-12 animate-spin slow-animation reverse-animation`}
        >
          {image}
        </div>
      ))}
    </div>
  )
};
