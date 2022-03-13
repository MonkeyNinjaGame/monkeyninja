import React from "react";
// import Text from "antd/lib/typography/Text";
import "./roadmap.css";
import Background from "assets/bg-home-01.png";

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
      <ul className="rmlist">
        <li>Launch First NFT Collections/Airdrop 100+ Addresses</li>
        <li>Secure MonkeyNinjas.io/Build Splash Page</li>
        <li>Create Social Channels Discord, Twitter, Reddit, etc</li>
        <li>Integrate Blockchain ETH, Poly, BNB, AVA Into Website</li>
        <li>Release Official Road Map</li>
        <li>Release Official White Papers</li>
        <li>Drop Investor NFT Collection (rare &amp; unique)</li>
        <li>Drop Christmas NFT Collection (rare)</li>
      </ul>

      <h2>2022 Q1</h2>
      <h3>January</h3>
      <ul className="rmlist">
        <li>Start NFT Marketplace Development</li>
        <li>Deploy ERC20 Token On Polygon Network</li>
        <li>Advertising/Marketing Plan Development</li>
        <li>Social Media Strategy Development (Youtube, IG, TikTok)</li>
        <li>Discord 1000+ Members</li>
        <li>500+ Monkey Ninja Holders</li>
      </ul>

      <h3>February</h3>
      <ul className="rmlist">
        <li>Start Game Development</li>
        <li>Coin Gecko Listing</li>
        <li>Launch Monkey Swap/Dex</li>
        <li>Mobile Integration</li>
        <li>Basic Metaverse Socket.io Integration</li>
      </ul>

      <h3>March</h3>
      <ol>
        <li>Private Game Testing</li>
        <li>Coin Market Cap Listing</li>
        <li>AMA</li>
        <li>Run Social Media Ads (FB, TikTok, IG)</li>
        <li>Drop Metaverse Real Estate Land NFTs (super rare)</li>
      </ol>

      <h2>2022 Q2</h2>
      <h3>April</h3>
      <ol>
        <li>Expand NFT Marketplace More NFT Drops</li>
        <li>Deploy ERC20 Token On Ethereum Network (Wrapped)</li>
        <li>Youtube Influencer Campaign</li>
        <li>Discord 5000+ Members</li>
        <li>1000+ Monkey Ninja NFT Holders</li>
        <li>100+ ERC20 Coin Holders</li>
      </ol>

      <h3>May</h3>
      <ol>
        <li>Beta Test Game</li>
        <li>Citrix Audit</li>
        <li>Full Metaverse Connection Between Users On Website</li>
        <li>View Static Ninjas In 3D On Website</li>
      </ol>

      <h3>June</h3>
      <ol>
        <li>Coin Holders Vote On Charity Give Back</li>
        <li>Coin Market Cap Listing</li>
        <li>AMA</li>
        <li>Run Ads On Dextools, ShibaSwap, More</li>
      </ol>

      <h2>2022 Q3</h2>
      <h3>July</h3>
      <ol>
        <li>Open Beta Game Play To Public</li>
        <li>First In Game Clan Rival War</li>
        <li>Deploy NFTs On Ethereum Network</li>
        <li>First Metaverse Meeting With Public</li>
        <li>Traditional Ads/ TV/ Print/ Billboards</li>
        <li>2500+ Monkey Ninja NFT Holders</li>
        <li>500+ ERC20 Coin Holders</li>
      </ol>

      <h3>August</h3>
      <ol>
        <li>Charity Donation Event</li>
        <li>List On Uniswap</li>
        <li>More NFT Drops</li>
        <li>New Game Characters/Weapons</li>
      </ol>

      <h3>September</h3>
      <ol>
        <li>Exchange Listings LBank, SaitaMask, Etc</li>
        <li>AMA</li>
        <li>Run Ads On Dextools, ShibaSwap, More</li>
        <li>10,000+ Discord Members</li>
      </ol>

      <h2>2022 Q4</h2>
      <h3>October</h3>
      <ol>
        <li>Solid Game Play</li>
        <li>NFT & Coin Holder Las Vegas Launch Party</li>
        <li>First World Tournament Clan War</li>
        <li>Rockstar Games Potential Collab</li>
        <li>5000+ Monkey Ninja Holders</li>
      </ol>

      <h3>November</h3>
      <ol>
        <li>Intergrade VR Technology</li>
        <li>10,000+ Discord Members</li>
        <li>1000+ ERC20 Holders</li>
        <li>Market Cap $1,000,000.00+</li>
      </ol>

      <h3>December</h3>
      <ol>
        <li>End Of The Year Review</li>
        <li>Finalize All Tax Codes and Regulations</li>
        <li>Maintain Game Play</li>
        <li>Holder Annual Event (Aspen Colorado) AMA</li>
      </ol>
    </div>
  );
};

export default Roadmap;
