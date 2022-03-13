import React /*, { useState }*/ from "react";
import { /*Modal, */ Button, Typography } from "antd";
//import { getEllipsisTxt } from "helpers/formatters";
//import star from "../../assets/star.png";
import "./hero.css";
import { NavLink } from "react-router-dom";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import shadow from "../../assets/hero-black01.png";
import ice from "../../assets/hero-blue01.png";
import fire from "../../assets/hero-red01.png";
//import Signup from "./Signup";

const { Paragraph } = Typography;

const Hero = () => {
  /*const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };*/

  return (
    <div className="hero">
      {/*NINJAS*/}
      <MouseParallaxContainer className="ninjas">
        <MouseParallaxChild
          factorX={0.03}
          factorY={0.05}
          className="ninja shadow"
        >
          <img src={shadow} alt="Shadow Monkey" />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.07}
          className="ninja fire"
        >
          <img src={fire} alt="Fire Monkey" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.07} factorY={0.09} className="ninja ice">
          <img src={ice} alt="Ice Monkey" />
        </MouseParallaxChild>
      </MouseParallaxContainer>

      {/*HEADING & CTA*/}
      <div className="content">
        <h1>
          Monkey <span style={{ color: "#f4db73" }}>Ninja</span>
        </h1>
        <h2>Meta Dynasty</h2>
        <h3>
          <b>FREE TO PLAY &amp; PLAY TO EARN!</b>
          <br />
          Part collectible NFT, part role play,
          <br />
          and part arcade gaming!
        </h3>
        <h5>ERC20 Contract Address:</h5>
        <Paragraph style={{ color: "#f4db73", fontSize: "12px" }} copyable>
          0xe7541aa266fa18edc1b4cfd766b814ec25d9c937
        </Paragraph>
        <NavLink to="/1inch">
          <Button
            type="primary"
            style={{ padding: "10px 20px", fontWeight: "bold" }}
          >
            Get Okane Coins Now
          </Button>
        </NavLink>

        {/*SIGNUP*/}
        {/*<div style={{ height: "40px" }}></div>
        <Button type="primary" onClick={showModal}>
          Register To Play
        </Button>
        <Modal
          centered
          footer={null}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <h2
            style={{ fontSize: "2.4rem", color: "#fff", textAlign: "center" }}
          >
            Sign Up For Early Access
          </h2>
          <Signup />
        </Modal>*/}
      </div>
      {/*SHURIKEN
      <div className="fly" id="fly">
        <img src={star} alt="Throwing Star" className="rotate" />
      </div>
      <div className="fly2" id="fly2">
        <img src={star} alt="Throwing Star" className="rotate2" />
      </div>*/}
    </div>
  );
};

export default Hero;
