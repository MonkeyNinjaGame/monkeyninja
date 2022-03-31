import React from "react";
import will from "../../assets/fire-head-01.png";
import nate from "../../assets/shadow-head-01.png";
import daniel from "../../assets/ice-head-01.png";
import "./team.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import smokebg from "../../assets/smoke01.png";
//import border_top from "../../assets/border-top.png";
//import border_bottom from "../../assets/border-bottom.png";

const Will = () => (
  <LazyLoadImage
    alt={"Will"}
    src={will}
    useIntersectionObserver="true"
    effect="blur"
    delayMethod="throttle"
  />
);

const Nate = () => (
  <LazyLoadImage
    alt={"Nate"}
    src={nate}
    useIntersectionObserver="true"
    effect="blur"
    delayMethod="throttle"
  />
);

const Daniel = () => (
  <LazyLoadImage
    alt={"Daniel"}
    src={daniel}
    useIntersectionObserver="true"
    effect="blur"
    delayMethod="throttle"
  />
);

const Team = () => {
  return (
    <>
      {/*<img src={border_top} className="bordertop" alt="" />*/}
      <div className="team" id="socials">
        <img src={smokebg} className="smokebg" alt="" />
        <div className="inner1">
          <h2>Core Team</h2>
          <p>Our core team are all professionals in their respective fields.</p>
        </div>
        <div className="inner2">
          <div className="teamwrap">
            <Will />
            <h3>Will</h3>
            <p style={{ marginTop: "-15px" }}>(@CryptoDevWill)</p>
            <p>CEO / Game Dev / Web3 Dev / Design</p>
          </div>
          <div className="teamwrap">
            <Daniel />
            <h3>Daniel</h3>
            <p style={{ marginTop: "-15px" }}>(@Rogstixs)</p>
            <p>Co-Leader / Web3 Dev / Design</p>
          </div>
          <div className="teamwrap">
            <Nate />
            <h3>Nate</h3>
            <p style={{ marginTop: "-15px" }}>(@N8TR0N)</p>
            <p>Website / Web3 Dev / Design</p>
          </div>
        </div>
      </div>
      {/*<img src={border_bottom} className="borderbottomfoot" alt="" />*/}
    </>
  );
};

export default Team;
