import { Menu, Tooltip } from "antd";
import Discord from "../assets/discord.png";
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.png";
import Reddit from "../assets/reddit.png";
import Opensea from "../assets/opensea.png";
import Youtube from "../assets/youtube.png";
import Instagram from "../assets/instagram.png";

function socialItems() {
  return (
    <Menu theme="dark" mode="vertical" className="sidebarMenu">
      <div className="socialItem">
        <Tooltip placement="left" title={"Discord"}>
          <img
            src={Discord}
            className="socialImage"
            loading="lazy"
            alt="Discord"
            onClick={() =>
              window.open("https://discord.gg/Q6xzCsEUFH", "_blank")
            }
          />
        </Tooltip>
      </div>
      <div className="socialItem">
        <Tooltip placement="left" title={"Telegram"}>
          <img
            src={Telegram}
            className="socialImage"
            loading="lazy"
            alt="Telegram"
            onClick={() => window.open("https://t.me/monkeyninja", "_blank")}
          />
        </Tooltip>
      </div>
      <div className="socialItem">
        <Tooltip placement="left" title={"Twitter"}>
          <img
            src={Twitter}
            className="socialImage"
            loading="lazy"
            alt="Twitter"
            onClick={() =>
              window.open("https://twitter.com/Monkey_Ninjas", "_blank")
            }
          />
        </Tooltip>
      </div>
      <div className="socialItem">
        <Tooltip placement="left" title={"YouTube"}>
          <img
            src={Youtube}
            className="socialImage"
            loading="lazy"
            alt="YouTube"
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCFck8UbrQD4-s8N1FsZ40zQ",
                "_blank",
              )
            }
          />
        </Tooltip>
      </div>
      <div className="socialItem">
        <Tooltip placement="left" title={"Instagram"}>
          <img
            src={Instagram}
            className="socialImage"
            loading="lazy"
            alt="Instagram"
            onClick={() =>
              window.open(
                "https://www.instagram.com/monkey_ninja_nft",
                "_blank",
              )
            }
          />
        </Tooltip>
      </div>
      <div className="socialItem">
        <Tooltip placement="left" title={"Reddit"}>
          <img
            src={Reddit}
            className="socialImage"
            loading="lazy"
            alt="Reddit"
            onClick={() =>
              window.open(
                "https://www.reddit.com/user/MonkeyNinjaNFTS/",
                "_blank",
              )
            }
          />
        </Tooltip>
      </div>
      <div className="socialItem">
        <Tooltip placement="left" title={"OpenSea"}>
          <img
            src={Opensea}
            className="socialImage"
            loading="lazy"
            alt="OpenSea"
            onClick={() =>
              window.open(
                "https://opensea.io/collection/monkey-ninjas",
                "_blank",
              )
            }
          />
        </Tooltip>
      </div>
    </Menu>
  );
}

export default socialItems;
