import React from "react";
import about_pic from "../../assets/7-3.png";
import "./about.css";
import "../../animation.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import smokebg from "../../assets/smoke01.png";
//import border_bottom from "../../assets/border-bottom.png";

const WhiteNinja = () => (
  <LazyLoadImage
    alt={"About Monkey Ninja"}
    src={about_pic}
    useIntersectionObserver="true"
    effect="blur"
    delayMethod="throttle"
  />
);

const About = () => {
  return (
    <>
      {/*<img src={border_top} className="bordertop" alt="" />*/}
      <div className="about">
        <img src={smokebg} className="smokebg" alt="" />
        <div className="inner1">
          <h2>
            What Is
            <br />
            Monkey Ninja?
          </h2>
          <p>
            Monkey Ninja is a new concept in the world of decentralized gaming.
            It's both action-packed and strategy-driven. It's part collectible
            NFT, part role play, and part arcade gaming. You're a member of the
            Monkey Ninja Army, a brigade of troops defending The Meta Dynasty
            from evil monkeys, dragons, and other characters of the dark forces.
            With your NFT character and skills you can fight together with your
            friends to defeat the opposite team in this real time multiplayer
            game!
          </p>
        </div>
        <div className="inner2">
          <WhiteNinja />
          {/*<img src={about_pic} alt="About Monkey Ninja" className="zoom" />*/}
        </div>
      </div>
      {/*<img src={border_bottom} className="borderbottom" alt="" />*/}
    </>
  );
};

export default About;
