import React from "react";
import { Tooltip } from "antd";
import "./dojo.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import empty from "./images/empty01.png";
import myNinja from "./images/white02.png";
import BG from "assets/bg-dojo-01.png";
import fireMonkey from "./images/red01.png";
import iceMonkey from "./images/blue01.png";
import shadowMonkey from "./images/black01.png";
import katana from "./images/katana01.png";
import katana2 from "./images/katana02.png";
import shuriken from "./images/shuriken01.png";
import shuriken2 from "./images/shuriken02.png";
import kunai from "./images/kunai01.png";
import kunai2 from "./images/kunai02.png";
import noArmor from "./images/armor.png";
import noSkill from "./images/skill.png";

const NoSkill = () => (
  <Tooltip placement="top" title={"Skill"}>
    <LazyLoadImage
      alt={"No Skill"}
      src={noSkill}
      useIntersectionObserver="true"
      effect="blur"
      delayMethod="throttle"
      className="unused"
    />
  </Tooltip>
);

const NoArmor = () => (
  <Tooltip placement="left" title={"Armor"}>
    <LazyLoadImage
      alt={"No Armor"}
      src={noArmor}
      useIntersectionObserver="true"
      effect="blur"
      delayMethod="throttle"
      className="unused"
    />
  </Tooltip>
);

window.onload = function () {
  // NINJA
  var mainImg = document.getElementById("MyNinja");
  document.getElementById("Shadow").onclick = function () {
    mainImg.src = shadowMonkey;
    mainImg.classList.add("newNinja");
    //alert('black clicked');
  };
  document.getElementById("Ice").onclick = function () {
    mainImg.src = iceMonkey;
    //alert('blue clicked');
  };
  document.getElementById("Fire").onclick = function () {
    mainImg.src = fireMonkey;
    //alert('red clicked');
  };
  // KATANA
  var katanaImg = document.getElementById("MyKatana");
  document.getElementById("Katana").onclick = function () {
    katanaImg.src = katana2;
    //alert('katana equiped');
  };
  // KUNAI
  var kunaiImg = document.getElementById("MyKunai");
  document.getElementById("Kunai").onclick = function () {
    kunaiImg.src = kunai2;
    //alert('kunai equiped');
  };
  // SHURIKEN
  var shurikenImg = document.getElementById("MyShuriken");
  document.getElementById("Shuriken").onclick = function () {
    shurikenImg.src = shuriken2;
    //alert('kunai equiped');
  };
  // RESET
  document.getElementById("Reset").onclick = function () {
    mainImg.src = myNinja;
    katanaImg.src = empty;
    kunaiImg.src = empty;
    shurikenImg.src = empty;
    //alert('ninja reset');
  };
};

const Dojo = () => {
  return (
    <div
      id="dojo"
      className="dojo"
      style={{
        backgroundImage: `url("${BG}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="heading">
        <h1>My Ninja</h1>
        <button id="Reset" className="reset">
          RESET
        </button>
      </div>
      <div className="character">
        <div className="ninja">
          <Tooltip placement="bottom" title={"Shadow Monkey"}>
            <img
              id="Shadow"
              src={shadowMonkey}
              className="unused"
              alt="Shadow Monkey"
            />
          </Tooltip>
          <Tooltip placement="bottom" title={"Ice Monkey"}>
            <img id="Ice" src={iceMonkey} className="unused" alt="Ice Monkey" />
          </Tooltip>
          <Tooltip placement="bottom" title={"Fire Monkey"}>
            <img
              id="Fire"
              src={fireMonkey}
              className="unused"
              alt="Fire Monkey"
            />
          </Tooltip>
        </div>
        <div className="weapon">
          <Tooltip placement="right" title={"Katana"}>
            <img id="Katana" src={katana} className="unused" alt="Katana" />
          </Tooltip>
          <Tooltip placement="right" title={"Kunai"}>
            <img id="Kunai" src={kunai} className="unused" alt="Kunai" />
          </Tooltip>
          <Tooltip placement="right" title={"Shuriken"}>
            <img
              id="Shuriken"
              src={shuriken}
              className="unused"
              alt="Shuriken"
            />
          </Tooltip>
        </div>
        <div className="preview">
          <img id="MyKatana" src={empty} className="useKatana" alt="Katana" />
          <img id="MyKunai" src={empty} className="useKunai" alt="Kunai" />
          <img
            id="MyShuriken"
            src={empty}
            className="useShuriken"
            alt="Shuriken"
          />
          <img
            id="MyNinja"
            src={myNinja}
            className="inuse"
            alt="White Shinobi"
          />
        </div>
        <div className="armor">
          <NoArmor />
          <NoArmor />
          <NoArmor />
        </div>
        <div className="skill">
          <NoSkill />
          <NoSkill />
          <NoSkill />
        </div>
      </div>
    </div>
  );
};

export default Dojo;
