"use client"; 

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp
        end={amount}
        prefix="₹"
        decimals={2} 
        duration={1.5}
        separator="," 
      />
    </div>
  );
};

export default AnimatedCounter;
