import React from "react";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Features from "../Features/Features";
import Items from "../Items/Items";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Counter></Counter>
      <Items></Items>
      <WhyUs></WhyUs>
      <Features></Features>
    </div>
  );
};

export default Home;
