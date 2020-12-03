import React from "react";

export const Circle: React.FC = ({ children }) => {
  return <div className="rounded-full w-20 h-20 lg:w-28 lg:h-28 bg-spacePurple flex justify-center items-center">
    {children}
    </div>;
};
