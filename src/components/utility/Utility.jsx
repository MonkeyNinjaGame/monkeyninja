import React from "react";
import utility_pic from "../../assets/4-2.png";
import "./utility.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const UtilityImage = () => (
  <LazyLoadImage
    alt={"NFT Utility"}
    src={utility_pic}
    useIntersectionObserver="true"
    effect="opacity"
    delayMethod="throttle"
  />
);

const Utility = () => {
  return (
    <div className="utility">
      <div className="inner1">
        <h2>NFT Utility</h2>
        <p>
          Monkey Ninjas are the tokenized representations of characters,
          weapons, skills, and other properties you can use to play the game.
          Each character has their own stats, which differ from each other in
          unique ways that make them a fun addition to the game. Unlike regular
          NFTs, these game items have stats that players can interact with by
          actually doing something in game. These would include, health, hp,
          armour, boosts, token id, token address, and more!
        </p>
      </div>
      <div className="inner2">
        <UtilityImage />
      </div>
    </div>
  );
};

export default Utility;
