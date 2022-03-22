import React from "react";
import dynasty_pic from "../../assets/5-2.png";
//import star from '../../assets/star.png';
import "./dynasty.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
//import border_top from "../../assets/border-top.png";
//import border_bottom from "../../assets/border-bottom.png";

const DynastyImage = () => (
  <LazyLoadImage
    alt={"Meta Dynasty"}
    src={dynasty_pic}
    class={"mountain"}
    width={"100%"}
    useIntersectionObserver="true"
    effect="blur"
    delayMethod="throttle"
  />
);

const Dynasty = () => {
  return (
    <>
      {/*<img src={border_top} className="bordertop" alt="" />*/}
      <div className="dynasty">
        <div className="inner2">
          <DynastyImage />
        </div>
        <div className="inner1">
          <h2>Meta Dynasty</h2>
          <p>
            The Meta Dynasty is a 3D virtual world full of mysterious Ninjas and
            dangerous enemies. Some live in villages located all over the Meya
            Realm, while others will be scattered throughout the Dynasty at
            various monasteries that are called "Mounts". The Meta Realm is a
            place where you will get to interact with characters and other
            players through virtual means such as keyboards and mouses. You can
            experience this on the VR Headsets, but for now it is just
            accessible on your browser. As you level up in the game you will
            recieve items (NFT Tokens) that you can use to cover your avatar,
            purchase buffs to increase your health, HP, etc... There will also
            be an in game chat room integrated with the NFT utility that runs
            Meta Dynasty so that you can chat with all of your fellow players.
          </p>
        </div>
        {/*<img src={star} alt="Throwing Star" className="dynasty-star rotate" />*/}
      </div>
      {/*<img src={border_bottom} className="borderbottom" alt="" />*/}
    </>
  );
};

export default Dynasty;
