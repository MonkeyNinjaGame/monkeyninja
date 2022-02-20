import React from "react";
import cta_pic from "../../assets/7-2.png";
import "./cta.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const WhiteNinja = () => (
  <LazyLoadImage
    alt={"Play Now"}
    src={cta_pic}
    useIntersectionObserver="true"
    effect="blur"
    delayMethod="throttle"
  />
);

const CTA = () => {
  return (
    <div className="cta" id="socials">
      <div className="inner1">
        <h2>Get Connected</h2>
        <p>
          Play as a Monkey Ninja warrior. Go on quests and missions, solo or
          with your clan. Create your own custom avatar, craft tools and
          weapons, fight monsters and dragons, intersct with other ninjas, be
          whoever you want. Just remember the ninja legend: "As you are now, so
          once was I; as I am now so you will be - Prepare for your future."
        </p>
        <p>Join our communities for all the latest updates!</p>
      </div>
      <div className="inner2">
        <WhiteNinja />
      </div>
    </div>
  );
};

export default CTA;
