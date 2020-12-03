import React from "react";

type ButtonProps = {
  onClick: VoidFunction
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="font-sans font-bold py-1 px-2 rounded-md border-2 my-2 text-white text-xl">
      {children}
    </button>
  );
};
