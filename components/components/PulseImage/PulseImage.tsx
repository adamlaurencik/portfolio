import React from "react";
import Image, { ImageProps } from "next/image";

type PingImageProps = ImageProps & {
  isPulsing: boolean;
};

export function PingImage({ isPulsing, ...imgProps }: PingImageProps) {
  return (
    <div>
      <div
        className={`bg-white animate-ping bg-opacity-50 absolute rounded-full`}
        style={
          imgProps.width
            ? { width: `${imgProps.width}px`, height: `${imgProps.height}px` }
            : undefined
        }
      />
      <Image {...imgProps} />
    </div>
  );
}
