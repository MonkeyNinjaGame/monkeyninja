import React from "react";
// import Text from "antd/lib/typography/Text";
import "./mint.css";
import Background from "assets/bg-home-01.png";
//import { Timeline } from "antd";
//import { ClockCircleOutlined } from '@ant-design/icons';
import shinobi from "../../assets/white02.png";

const Mint = () => {
  return (
    <div
      id="mint"
      className="mint"
      style={{
        backgroundImage: `url("${Background}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <h3>Monkey Ninja</h3>
      <h1>NFT Mint</h1>
      <img src={shinobi} alt="White Shinobi" style={{ margin: "0 auto 20px", maxWidth: "240px" }} />
      <button>Mint Now</button>
    </div>
  );
};

export default Mint;
