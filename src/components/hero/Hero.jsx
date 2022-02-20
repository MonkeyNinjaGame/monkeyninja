import React from "react";
import header_pic from "../../assets/2-2.png";
import star from "../../assets/star.png";
import "./hero.css";
import { NavLink } from "react-router-dom";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Hero = () => {
  return (
    <MouseParallaxContainer className="hero">
      <MouseParallaxChild factorX={0.03} factorY={0.05} className="inner1">
        <img
          src={header_pic}
          className="ninja-fade"
          alt="Welcome To Monkey Ninja Dynasty"
        />
      </MouseParallaxChild>
      <div className="inner2">
        <h1>Hi, Ninjas!</h1>
        <h2 style={{ marginTop: "-20px" }}>Welcome To Class</h2>
        {/*<button onClick={()=> window.open("https://discord.com/invite/Q6xzCsEUFH", "_blank")}>
                    Join Us On Discord
                </button>*/}
        <h4>
          Okane now available
          <br />
          on Quickswap!
        </h4>
        <NavLink to="/1inch">
          <button>Get Your Coins Now</button>
        </NavLink>
      </div>
      <div className="fly" id="fly">
        <img src={star} alt="Throwing Star" className="rotate" />
      </div>
      <div className="fly2" id="fly2">
        <img src={star} alt="Throwing Star" className="rotate2" />
      </div>
    </MouseParallaxContainer>
  );
};

export default Hero;
