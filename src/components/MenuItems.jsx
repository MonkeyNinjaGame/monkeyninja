import { useLocation } from "react-router";
import { useState } from "react";
import { Menu, Modal, Tooltip } from "antd";
import { NavLink } from "react-router-dom";
import {
  MenuOutlined,
  //HomeFilled,
  //SlidersFilled,
  //CompassFilled,
  //CalculatorFilled,
  //ShopFilled
} from "@ant-design/icons";
import TokenPrice from "components/TokenPrice";
import Account from "components/Account/Account";

function MenuItems() {
  const { pathname } = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="mobileMenu" onClick={() => setIsModalVisible(true)}>
        {/*<p style={{ marginRight: "5px", ...styles.text }}>
          {getEllipsisTxt(account, 4)}
        </p>*/}
        {/*<Blockie currentWallet scale={3} />*/}
        <MenuOutlined />
      </div>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        bodyStyle={{
          padding: "15px",
          fontSize: "20px",
          fontWeight: "500",
        }}
        style={{ fontSize: "16px", fontWeight: "500" }}
        width="400px"
      >
        <Tooltip placement="bottom" title={"Okane Price"}>
          <div className="tokenPrice">
            <TokenPrice
              address="0xe7541aa266fa18edc1b4cfd766b814ec25d9c937"
              chain="polygon"
              image="https://monkeyninja.io/static/media/6-2.bdd53fa3.png"
              size="18px"
            />
          </div>
        </Tooltip>
        <h2>Menu</h2>
        <Menu
          theme="dark"
          mode="vertical"
          overflowedIndicator={""}
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "12px",
            fontWeight: "500",
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
            background: "transparent",
            border: "0px",
            textTransform: "uppercase",
          }}
          defaultSelectedKeys={[pathname]}
        >
          <Menu.Item
            key="/"
            className="menuItem"
            //icon={<HomeFilled style={{ color: "#fff" }} />}
          >
            <NavLink
              to="/"
              className="menuItem"
              onClick={() => setIsModalVisible(false)}
            >
              Home
            </NavLink>
          </Menu.Item>
          {/*<Menu.Item key="/whitelist" className="menuItem">
            <NavLink
              to="/whitelist"
              className="menuItem"
              onClick={() => setIsModalVisible(false)}
            >
              Whitelist
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/mint" className="menuItem">
            <NavLink
              to="/mint"
              className="menuItem"
              onClick={() => setIsModalVisible(false)}
            >
              Mint
            </NavLink>
          </Menu.Item>*/}
          <Menu.Item
            key="/roadmap"
            className="menuItem"
            //icon={<CompassFilled style={{ color: "#fff" }} />}
          >
            <NavLink
              to="/roadmap"
              className="menuItem"
              onClick={() => setIsModalVisible(false)}
            >
              Roadmap
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key="/1inch"
            className="menuItem"
            //icon={<CalculatorFilled style={{ color: "#fff" }} />}
          >
            <NavLink
              to="/1inch"
              className="menuItem"
              onClick={() => setIsModalVisible(false)}
            >
              Dex
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key=""
            className="menuItem"
            //icon={<SlidersFilled style={{ color: "#fff" }} />}
            onClick={() =>
              window.open(
                "https://www.dextools.io/app/polygon/pair-explorer/0x5ca5162a426b844b7b0d6e9449c44f01d073b878",
                "_blank",
              )
            }
          >
            <NavLink
              to=""
              className="menuItem"
              onClick={() => setIsModalVisible(false)}
            >
              Chart
            </NavLink>
          </Menu.Item>
          {/*<Menu.Item key="/nftMarket" className="menuItem" icon={<ShopFilled style={{ color: "#fff" }} />}>
            <NavLink to="/nftMarket" className="menuItem">
              Market
            </NavLink>
          </Menu.Item>*/}
        </Menu>
      </Modal>
      <div className="menuContain">
        <Menu
          theme="dark"
          mode="horizontal"
          overflowedIndicator={""}
          style={{
            display: "flex",
            fontSize: "12px",
            fontWeight: "500",
            width: "100%",
            justifyContent: "right",
            background: "transparent",
            border: "0px",
            textTransform: "uppercase",
          }}
          defaultSelectedKeys={[pathname]}
        >
          <Menu.Item
            key="/"
            className="menuItem"
            //icon={<HomeFilled style={{ color: "#fff" }} />}
          >
            <NavLink to="/" className="menuItem">
              Home
            </NavLink>
          </Menu.Item>
          {/*<Menu.Item
            key="/whitelist"
            className="menuItem"
            //icon={<CompassFilled style={{ color: "#fff" }} />}
          >
            <NavLink to="/whitelist" className="menuItem">
              Whitelist
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key="/mint"
            className="menuItem"
            //icon={<CompassFilled style={{ color: "#fff" }} />}
          >
            <NavLink to="/mint" className="menuItem">
              Mint
            </NavLink>
          </Menu.Item>*/}
          <Menu.Item
            key="/roadmap"
            className="menuItem"
            //icon={<CompassFilled style={{ color: "#fff" }} />}
          >
            <NavLink to="/roadmap" className="menuItem">
              Roadmap
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key="/1inch"
            className="menuItem"
            //icon={<CalculatorFilled style={{ color: "#fff" }} />}
          >
            <NavLink to="/1inch" className="menuItem">
              Dex
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key=""
            className="menuItem"
            //icon={<SlidersFilled style={{ color: "#fff" }} />}
            onClick={() =>
              window.open(
                "https://www.dextools.io/app/polygon/pair-explorer/0x5ca5162a426b844b7b0d6e9449c44f01d073b878",
                "_blank",
              )
            }
          >
            <NavLink to="" className="menuItem">
              Chart
            </NavLink>
          </Menu.Item>
          <Menu.Item style={{ display: "none" }}>
            <Account />
          </Menu.Item>
          {/*<Menu.Item key="/nftMarket" className="menuItem" icon={<ShopFilled style={{ color: "#fff" }} />}>
            <NavLink to="/nftMarket" className="menuItem">
              Market
            </NavLink>
          </Menu.Item>*/}
          <Tooltip placement="bottom" title={"Okane Price"}>
            <Menu.Item className="tokenPrice">
              <TokenPrice
                address="0xe7541aa266fa18edc1b4cfd766b814ec25d9c937"
                chain="polygon"
                image="https://monkeyninja.io/static/media/6-2.bdd53fa3.png"
                size="18px"
              />
            </Menu.Item>
          </Tooltip>
          {/*<Menu.Item key="/dojo" className="menuItem" icon={<UserOutlined style={{ color: "#fff" }} />}>
            <NavLink to="/dojo" className="menuItem">
              Dojo
            </NavLink>
          </Menu.Item>*/}
          {/*<Menu.Item key="/nftTransactions" className="menuItem">
              <NavLink to="/nftTransactions" className="menuItem">
                Transactions
              </NavLink>
            </Menu.Item>*/}
          {/*<Menu.Item key="/wallet" style={{ color: "#fff", background: "#222" }}>
              <NavLink to="/wallet" style={{ color: "#fff", background: "#222" }}>
                Wallet
              </NavLink>
            </Menu.Item>*/}
          {/*<Menu.Item key="onramp">
            <NavLink to="/onramp">Fiat</NavLink>
            </Menu.Item>*/}
          {/*<Menu.Item key="/erc20balance">
            <NavLink to="/erc20balance">Balances</NavLink>
            </Menu.Item>*/}
          {/*<Menu.Item key="/erc20transfers">
            <NavLink to="/erc20transfers">Transfers</NavLink>
            </Menu.Item>*/}
          {/*<Menu.Item key="/contract">
            <NavLink to="/contract">Contract</NavLink>
            </Menu.Item>*/}
        </Menu>
      </div>
    </>
  );
}

export default MenuItems;
