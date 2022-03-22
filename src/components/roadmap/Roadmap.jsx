import React from "react";
// import Text from "antd/lib/typography/Text";
import "./roadmap.css";
import Background from "assets/bg-home-01.png";
import { Timeline } from 'antd';
//import { ClockCircleOutlined } from '@ant-design/icons';

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="roadmap"
      style={{
        backgroundImage: `url("${Background}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <h1>Roadmap</h1>
      <h2>2021 Q4</h2>
      <h3>December</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="green">Secure MonkeyNinjas.io/Build Splash Page</Timeline.Item>
        <Timeline.Item color="green">Secure MonkeyNinjas.io/Build Splash Page</Timeline.Item>
        <Timeline.Item color="green">Create Social Channels Discord, Twitter, Reddit, etc</Timeline.Item>
        <Timeline.Item color="green">Integrate Blockchain ETH, Poly, BNB, AVA Into Website</Timeline.Item>
        <Timeline.Item color="green">Release Official Road Map</Timeline.Item>
        <Timeline.Item color="green">Release Official White Papers</Timeline.Item>
        <Timeline.Item color="green">Drop Investor NFT Collection (rare &amp; unique)</Timeline.Item>
        <Timeline.Item color="green">Drop Christmas NFT Collection (rare)</Timeline.Item>
      </Timeline>

      <h2>2022 Q1</h2>
      <h3>January</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="green">Start NFT Marketplace Development</Timeline.Item>
        <Timeline.Item color="green">Deploy ERC20 Token On Polygon Network</Timeline.Item>
        <Timeline.Item color="green">Advertising/Marketing Plan Development</Timeline.Item>
        <Timeline.Item color="green">Social Media Strategy Development (Youtube, IG, TikTok)</Timeline.Item>
        <Timeline.Item color="green">Discord 1000+ Members</Timeline.Item>
        <Timeline.Item color="green">500+ Monkey Ninja Holders</Timeline.Item>
      </Timeline>

      <h3>February</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="green">Start Game Development</Timeline.Item>
        <Timeline.Item color="green">Coin Gecko Listing</Timeline.Item>
        <Timeline.Item color="green">Launch Monkey Swap/Dex</Timeline.Item>
        <Timeline.Item color="green">Mobile Integration</Timeline.Item>
        <Timeline.Item color="green">Basic Metaverse Socket.io Integration</Timeline.Item>
      </Timeline>

      <h3>March</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="green">Private Game Testing</Timeline.Item>
        <Timeline.Item color="yellow">Coin Market Cap Listing</Timeline.Item>
        <Timeline.Item color="green">AMA</Timeline.Item>
        <Timeline.Item color="yellow">Run Social Media Ads (FB, TikTok, IG)</Timeline.Item>
        <Timeline.Item color="yellow">Drop Metaverse Real Estate Land NFTs (super rare)</Timeline.Item>
      </Timeline>

      <h2>2022 Q2</h2>
      <h3>April</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="red">Expand NFT Marketplace More NFT Drops</Timeline.Item>
        <Timeline.Item color="red">Deploy ERC20 Token On Ethereum Network (Wrapped)</Timeline.Item>
        <Timeline.Item color="red">Youtube Influencer Campaign</Timeline.Item>
        <Timeline.Item color="red">1000+ Monkey Ninja NFT Holders</Timeline.Item>
        <Timeline.Item color="red">100+ ERC20 Coin Holders</Timeline.Item>
      </Timeline>

      <h3>May</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="red">Beta Test Game</Timeline.Item>
        <Timeline.Item color="red">Citrix Audit</Timeline.Item>
        <Timeline.Item color="red">Full Metaverse Connection Between Users On Website</Timeline.Item>
        <Timeline.Item color="red">View Static Ninjas In 3D On Website</Timeline.Item>
      </Timeline>

      <h3>June</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="red">Coin Holders Vote On Charity Give Back</Timeline.Item>
        <Timeline.Item color="red">Coin Market Cap Listing</Timeline.Item>
        <Timeline.Item color="red">AMA</Timeline.Item>
        <Timeline.Item color="red">Run Ads On Dextools, ShibaSwap, More</Timeline.Item>
      </Timeline>

      <h2>2022 Q3</h2>
      <h3>July</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="red">Open Beta Game Play To Public</Timeline.Item>
        <Timeline.Item color="red">First In Game Clan Rival War</Timeline.Item>
        <Timeline.Item color="red">Deploy NFTs On Ethereum Network</Timeline.Item>
        <Timeline.Item color="red">First Metaverse Meeting With Public</Timeline.Item>
        <Timeline.Item color="red">Traditional Ads/ TV/ Print/ Billboards</Timeline.Item>
        <Timeline.Item color="red">2500+ Monkey Ninja NFT Holders</Timeline.Item>
        <Timeline.Item color="red">500+ ERC20 Coin Holders</Timeline.Item>
      </Timeline>

      <h3>August</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="red">Charity Donation Event</Timeline.Item>
        <Timeline.Item color="red">List On Uniswap</Timeline.Item>
        <Timeline.Item color="red">More NFT Drops</Timeline.Item>
        <Timeline.Item color="red">New Game Characters/Weapons</Timeline.Item>
      </Timeline>

      <h3>September</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="red">Exchange Listings LBank, SaitaMask, Etc</Timeline.Item>
        <Timeline.Item color="red">AMA</Timeline.Item>
        <Timeline.Item color="red">Run Ads On Dextools, ShibaSwap, More</Timeline.Item>
        <Timeline.Item color="red">10,000+ Discord Members</Timeline.Item>
      </Timeline>

      <h2>2022 Q4</h2>
      <h3>October</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="red">Solid Game Play</Timeline.Item>
        <Timeline.Item color="red">NFT &amp; Coin Holder Las Vegas Launch Party</Timeline.Item>
        <Timeline.Item color="red">First World Tournament Clan War</Timeline.Item>
        <Timeline.Item color="red">Rockstar Games Potential Collab</Timeline.Item>
        <Timeline.Item color="red">5000+ Monkey Ninja Holders</Timeline.Item>
      </Timeline>

      <h3>November</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="red">Intergrade VR Technology</Timeline.Item>
        <Timeline.Item color="red">10,000+ Discord Members</Timeline.Item>
        <Timeline.Item color="red">1000+ ERC20 Holders</Timeline.Item>
        <Timeline.Item color="red">Market Cap $1,000,000.00+</Timeline.Item>
      </Timeline>

      <h3>December</h3>
      <Timeline mode="alternate">
        <Timeline.Item color="red">End Of The Year Review</Timeline.Item>
        <Timeline.Item color="red">Finalize All Tax Codes and Regulations</Timeline.Item>
        <Timeline.Item color="red">Maintain Game Play</Timeline.Item>
        <Timeline.Item color="red">Holder Annual Event (Aspen Colorado) AMA</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Roadmap;
