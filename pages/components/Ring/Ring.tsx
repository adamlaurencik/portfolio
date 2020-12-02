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
      className={`border-2 border-border-white rounded-full flex items-center justify-center absolute animate-spin slow-animation`}
      style={{ width: `${size}%`, height: `${size}%` }}
    >
      {Images.map(({ image, type }, index) => (
        <div
          key={index}
          className={`absolute ${type}-0 -m-6 w-12 h-12 animate-spin slow-animation reverse-animation`}
        >
          <span className="hover:animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          {image}
        </div>
      ))}
    </div>
  );
};
