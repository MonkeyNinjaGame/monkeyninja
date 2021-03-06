import React from "react";
// import Text from "antd/lib/typography/Text";
import { Button } from "antd";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import "./whitelist.css";
import Background from "assets/bg-home-01.png";
import ice from "../../assets/blue01.png";
import fire from "../../assets/red01.png";
//import { Timeline } from "antd";
//import { ClockCircleOutlined } from '@ant-design/icons';
import Countdown from "react-countdown";

const Timeup = () => (
  <>
    <span className="light-closed">.</span>
    <span>
      Our first Whitelist has officially ended!
      <br />
      Please join us on Discord for future Whitelist opportunities.
      <br />
      You can also purchase from our official OpenSea.
    </span>
  </>
);

const formatTime = (time) => {
  return String(time).padStart(2, "0");
};

const formatDate = (date) => {
  return String(date).padStart(2, "0");
};

const renderleft = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Timeup />;
  } else {
    // Render a countdown
    return (
      <>
        <span className="light-opened">.</span>
        <h4 className="data-title">Spots Filled</h4>
        <span className="data">26/1000</span>
        <h4 className="data-title">Time Left</h4>
        <span className="data">
          {formatDate(days)}:{formatTime(hours)}:{formatTime(minutes)}:
          {formatTime(seconds)}
        </span>
      </>
    );
  }
};

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
      <MouseParallaxContainer className="ninjas">
        <MouseParallaxChild
          factorX={-0.05}
          factorY={-0.07}
          className="ninja fire"
        >
          <img src={fire} alt="Fire Monkey" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.07} factorY={0.09} className="ninja ice">
          <img src={ice} alt="Ice Monkey" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <div className="headers">
        <h5>Get On The</h5>
        <h1>Whitelist</h1>
        <h6>
          You must be a part of our Discord community to be considered for a
          Whitelist spot.
        </h6>
      </div>
      <div className="inner-left">
        <Countdown
          date={"2022-05-14T24:00:00"}
          //date={Date.now() + 5000}
          className="timer"
          renderer={renderleft}
        >
          <Timeup />
        </Countdown>
      </div>
      <div className="inner-right">
        <Button
          type="primary"
          style={{ padding: "10px 20px", fontWeight: "bold" }}
          onClick={() => window.open("https://discord.gg/hd2uhfQWCH", "_blank")}
        >
          Discord
        </Button>
        <span className="btn-spacer"></span>
        <Button
          type="primary"
          style={{ padding: "10px 20px", fontWeight: "bold" }}
          onClick={() =>
            window.open("https://opensea.io/collection/monkey-ninjas", "_blank")
          }
        >
          OpenSea
        </Button>
      </div>
    </div>
  );
};

export default Whitelist;
