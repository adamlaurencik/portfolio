import { Landing } from "../components/landing/Landing";
import { Technologies } from "../components/Technologies/Technologies";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam's Laurencik Portfolio</title>
      </Head>
      <Landing />
      <Technologies />
    </>
  );
}
