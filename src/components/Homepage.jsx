// import { Card, Timeline, Typography } from "antd";
// import React, { useMemo } from "react";
// import { useMoralis } from "react-moralis";
import { Hero, About, Utility, Dynasty, Tokenomics, CTA } from "components";

// const { Text } = Typography;

/*const styles = {
  homeContain: {
    minHeight: "100vh",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};*/

export default function Homepage({ isServerInfo }) {
  // const { Moralis } = useMoralis();

  // const isInchDex = useMemo(() => (Moralis.Plugins?.oneInch ? true : false), [Moralis.Plugins?.oneInch]);

  return (
    <div className="homeContain">
      <Hero />
      <About />
      <Utility />
      <Dynasty />
      <Tokenomics />
      <CTA />
    </div>
  );
}
