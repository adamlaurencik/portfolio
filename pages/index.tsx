import Head from "next/head";
import Image from "next/image";
import { Space } from "./components/Space/Space";
import { CardInfo } from "./components/CardInfo/CardInfo";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-spaceBlack to-spacePurple flex">
      <div className="w-1/2 flex items-center justify-center h-full">
        <CardInfo />
      </div>
      <div className="w-1/2 flex items-center justify-center h-full">
        <Space />
      </div>
    </div>
  );
}
