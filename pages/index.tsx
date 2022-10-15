import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/Header";
import HomeScreen from "../components/home/HomeScreen";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>FilBasket - Filipino Basketball League</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeScreen />
    </div>
  );
};

export default Home;
