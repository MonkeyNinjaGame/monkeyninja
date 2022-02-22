import React from "react";
import tokenomics_pic from "../../assets/6-2.png";
import "./tokenomics.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const TokenomicsImage = () => (
  <LazyLoadImage
    alt={"Okane Coin Tokenomics"}
    src={tokenomics_pic}
    useIntersectionObserver="true"
    effect="opacity"
    delayMethod="throttle"
  />
);

const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <div className="inner1">
        <TokenomicsImage />
      </div>
      <div className="inner2">
        <h2>Tokenomics</h2>
        <h3>Okane Coin</h3>
        <h4 style={{ textAlign: "center" }}>
          <b>
            <u>Total Supply</u>
          </b>
          <br />
          1,000,000,000
        </h4>
        <h4 style={{ textAlign: "center", wordBreak: "break-all" }}>
          <b>
            <u>Contract Address</u>
          </b>
          <br />
          0xe7541aa266fa18edc1b4cfd766b814ec25d9c937
        </h4>
        <p style={{ marginTop: "10px" }}>
          What is the Okane Coin? It's the currency used by all of the Monkey
          Ninjas in the Meta Dynasty. All players carry their own stash of Okane
          coins, which can be bought and sold, used to purchase weapons, skins,
          and other in-game items. We will have a secure swap and transfer
          system with additional experimental features as time goes on.
        </p>
        <p>
          <button
            onClick={() =>
              window.open(
                "https://www.dextools.io/app/polygon/pair-explorer/0x5ca5162a426b844b7b0d6e9449c44f01d073b878",
                "_blank",
              )
            }
          >
            View Chart
          </button>
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;