import React from "react";

type ButtonProps = {};

export const Button: React.FC = ({ children }) => {
  return (
    <button className="font-sans h-auto font-bold p-2 rounded-md bg-opacity-50 border-spacePurple border-2 my-2 hover:border-spaceBlack hover:text-spaceBlack">
      {children}
    </button>
  );
};
