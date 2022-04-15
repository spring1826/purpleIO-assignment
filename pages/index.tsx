import type { NextPage } from "next";
import Head from "next/head";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <HomeTemplate />
    </div>
  );
};

export default Home;
