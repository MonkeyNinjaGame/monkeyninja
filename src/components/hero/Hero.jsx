import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import star from "../../assets/star.png";
import "./hero.css";
import { NavLink } from "react-router-dom";
import { MouseParallaxContainer, MouseParallaxChild, } from "react-parallax-mouse";
import shadow from "../../assets/hero-black01.png";
import ice from "../../assets/hero-blue01.png";
import fire from "../../assets/hero-red01.png";

const Hero = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    
    <MouseParallaxContainer className="hero">

      {/*NINJA TRIO*/}
      <MouseParallaxChild factorX={0.03} factorY={0.05} className="inner1 shadow">
        <img src={shadow} className="ninja-fade" alt="Monkey Ninja" />
      </MouseParallaxChild>
      <MouseParallaxChild factorX={0.05} factorY={0.07} className="inner1 fire">
        <img src={fire} className="ninja-fade" alt="Monkey Ninja" />
      </MouseParallaxChild>
      <MouseParallaxChild factorX={0.07} factorY={0.09} className="inner1 ice">
        <img src={ice} className="ninja-fade" alt="Monkey Ninja" />
      </MouseParallaxChild>

      {/*SPACER*/}
      <div className="inner0"></div>

      {/*HEADING & CTA*/}
      <div className="inner2">
        <h1>Hi, Ninjas!</h1>
        <h2 style={{ marginTop: "-20px" }}>Welcome To Class</h2>
        <h4>
          Okane now available
          <br />
          on Quickswap!
        </h4>
        <NavLink to="/1inch">
          <Button type="primary">
            Get Your Coins Now
          </Button>
        </NavLink><br />

        {/*REGISTRATION*/}
        <div style={{ height: "40px" }}></div>
        <Button type="primary" onClick={showModal}>
          Register To Play
        </Button>
        <Modal centered title="Register For Early Access" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Input type="email" name="" id="email" placeholder="Email"></Input>
          <Input type="password" name="" id="password" placeholder="Password"></Input>
          <Button type="primary" id="signup">
            Register
          </Button>
          <script src='reg.js'></script>
        </Modal>
      </div>

      {/*SHURIKEN*/}
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
