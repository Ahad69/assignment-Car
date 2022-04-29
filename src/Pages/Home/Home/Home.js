import React from "react";
import Header from "../../Shered/Header/Header";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Items from "../Items/Items";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Counter></Counter>
      <Items></Items>
    </div>
  );
};

export default Home;
