import React from "react";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <div>
      <div className="p-4 flex items-center justify-center bg-white text-spaceBlack">
        <h1 className="text-3xl uppercase">{title}</h1>
      </div>
      <hr className="w-full h-1 bg-red-400" />
    </div>
  );
}
