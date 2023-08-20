"use client";
import React from "react";
import CustomeButton from "./CustomeButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car <br />- quickly and easily
        </h1>

        <p className="hero__subtitle">
          Streaming your car rental experience with out effortless booking
          process
        </p>
        <CustomeButton
          btnType="button"
          title="Explore Cars"
          containerStyles="bg-blue-700 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
