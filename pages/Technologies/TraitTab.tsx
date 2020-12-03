import React from "react";
import { Circle } from "../components/Circle/Circle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type TraitTabType = {
  title: string;
  icon: IconDefinition;
  desc: string;
};

export function TraitTab({ title, icon, desc }: TraitTabType) {
  return (
    <div
      className={`flex flex-col items-center justify-center m-1 my-2 p-2 sm:p-4 md:p-6 text-spaceBlack`}
    >
      <Circle>
        <FontAwesomeIcon
          icon={icon}
          className="text-white text-3xl lg:text-5xl"
        />
      </Circle>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="w-28 text-sm text-center">{desc}</p>
    </div>
  );
}
