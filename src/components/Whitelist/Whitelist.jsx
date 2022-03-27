import React from "react";
// import Text from "antd/lib/typography/Text";
import "./whitelist.css";
import Background from "assets/bg-home-01.png";
//import { Timeline } from "antd";
//import { ClockCircleOutlined } from '@ant-design/icons';

const Whitelist = () => {
  return (
    <div
      id="whitelist"
      className="whitelist"
      style={{
        backgroundImage: `url("${Background}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <h3>Get On The</h3>
      <h1>Whitelist</h1>
      <h4>Spots Filled: 50/300<br />
      Time Left: 720:00:00</h4>
      {/*<p>There acurrently no whitelist spots available.</p>*/}
      <h2>Signup</h2>
    </div>
  );
};

export default Whitelist;
