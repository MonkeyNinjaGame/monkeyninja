import React from "react";
// import Text from "antd/lib/typography/Text";
import "./whitelist.css";
import Background from "assets/bg-home-01.png";
//import { Timeline } from "antd";
//import { ClockCircleOutlined } from '@ant-design/icons';
import Countdown from "react-countdown";

const Timeup = () => <span>Time has run out!</span>;

const formatTime = (time) => {
  return String(time).padStart(2, "0");
};

const formatDate = (date) => {
  return String(date).padStart(2, "0");
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Timeup />;
  } else {
    // Render a countdown
    return (
      <>
        <span>
          {formatDate(days)}:{formatTime(hours)}:{formatTime(minutes)}:
          {formatTime(seconds)}
        </span>
        <h2>Signup</h2>
        <h4>Coming soon...</h4>
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
      <h3>Get On The</h3>
      <h1>Whitelist</h1>
      <h4>
        Spots Filled:
        <br />
        <span>0/300</span>
        <br />
        Time Left:
        <br />
        <Countdown
          date={"2022-06-01T24:00:00"}
          className="timer"
          renderer={renderer}
        >
          <Timeup />
        </Countdown>
      </h4>
      {/*<p>There acurrently no whitelist spots available.</p>*/}
    </div>
  );
};

export default Whitelist;
