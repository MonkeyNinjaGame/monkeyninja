import React from "react";
// import Text from "antd/lib/typography/Text";
import "./dex.css";
import Background from "assets/bg-home-01.png";
import Step1 from "../../assets/step1.png";
import Step2 from "../../assets/step2.png";
// import Step3 from '../../assets/step3.png';
// import Step4 from '../../assets/step4.png';
// import Step5 from '../../assets/step5.png';
// import ClipboardCopy from "../ClipboardCopy";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import shadow from "../../assets/black01.png";
import ice from "../../assets/blue01.png";

const DEX = () => {
  return (
    <div
      id="dex"
      className="dex"
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
          className="ninja ice"
        >
          <img src={ice} alt="Ice Monkey" />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.07}
          factorY={0.09}
          className="ninja shadow"
        >
          <img src={shadow} alt="Shadow Monkey" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <h1>Ninja Swap</h1>
      <h2>Coming soon...</h2>
      <p>To get your Okane now, follow these directions!</p>

      <span className="panel">
        <h3>
          <u>Step 1</u>
        </h3>
        <p>
          <a
            href="https://quickswap.exchange/#/swap?outputCurrency=0xe7541aa266fa18edc1b4cfd766b814ec25d9c937"
            rel="noreferrer"
            target="_blank"
          >
            Click here
          </a>{" "}
          to be redirected to QuickSwap.
          <br />
          There it will auto import the "Okane" coin by selecting "I understand"
          and continue.
          <a
            href="https://quickswap.exchange/#/swap?outputCurrency=0xe7541aa266fa18edc1b4cfd766b814ec25d9c937"
            rel="noreferrer"
            target="_blank"
          >
            <img src={Step1} className="stepImage" alt="Step 1" />
          </a>
        </p>
      </span>

      <span className="panel">
        <h3>
          <u>Step 2</u>
        </h3>
        <p>
          Swap the coin you'd like to trade for "Okane".
          {/*<div className="copyText"><ClipboardCopy copyText="0xe7541aa266fa18edc1b4cfd766b814ec25d9c937" /></div><br />*/}
          <img src={Step2} className="stepImage" alt="Step 2" />
        </p>
      </span>

      <span className="panel-last">
        <h3>
          <u>Step 3</u>
        </h3>
        <p>
          After the swap, you may need to import the "Okane" coin into your
          MetaMask in order to see your coins.
        </p>
        <ol style={{ marginTop: "10px" }}>
          <li>Go to MetaMask</li>
          <li>Tap assets</li>
          <li>Scroll to the bottom and select "Import tokens"</li>
          <li>Copy/paste Okane address in the "Token Contract Address"</li>
          <li>Press "Add Custom Token"</li>
        </ol>
      </span>
    </div>
  );
};

export default DEX;
