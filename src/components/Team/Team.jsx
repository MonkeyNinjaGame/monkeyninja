import React from "react";
import will from "../../assets/fire-head-01.png";
import nate from "../../assets/shadow-head-01.png";
import daniel from "../../assets/ice-head-01.png";
import "./team.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
    <div className="team" id="socials">
      <div className="inner1">
        <h2>Core Team</h2>
        <p>
          Our core team are all professionals in their respective fields.
        </p>
      </div>
      <div className="inner2">
        <div className="teamwrap">
          <Will />
          <h4>Will</h4>
          <p>CEO / Game Dev / Web3 Dev / Design</p>
        </div>
        <div className="teamwrap">
          <Daniel />
          <h4>Daniel</h4>
          <p>Co-Leader / Web3 Dev / Design</p>
        </div>
        <div className="teamwrap">
          <Nate />
          <h4>Nate</h4>
          <p>Website / Web3 Dev / Design</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
