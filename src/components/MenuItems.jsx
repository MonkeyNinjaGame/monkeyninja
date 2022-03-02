import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import {
  MenuOutlined,
  HomeFilled,
  SlidersFilled,
  CompassFilled,
  CalculatorFilled /* ShopFilled,*/,
} from "@ant-design/icons";
import TokenPrice from "components/TokenPrice";

const styles = {
  menuItem: {
    color: "#fff",
    background: "#222",
  },
};

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <div className="menuContain">
      <Menu
        theme="dark"
        mode="horizontal"
        overflowedIndicator={<MenuOutlined />}
        style={{
          display: "flex",
          fontSize: "14px",
          fontWeight: "500",
          width: "100%",
          justifyContent: "right",
          background: "#222",
          border: "0px",
          textTransform: "uppercase",
        }}
        defaultSelectedKeys={[pathname]}
      >
        <Menu.Item
          key="/"
          style={styles.menuItem}
          icon={<HomeFilled style={{ color: "#fff" }} />}
        >
          <NavLink to="/" style={styles.menuItem}>
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item
          key="/roadmap"
          style={styles.menuItem}
          icon={<CompassFilled style={{ color: "#fff" }} />}
        >
          <NavLink to="/roadmap" style={styles.menuItem}>
            Roadmap
          </NavLink>
        </Menu.Item>
        <Menu.Item
          key="/1inch"
          style={styles.menuItem}
          icon={<CalculatorFilled style={{ color: "#fff" }} />}
        >
          <NavLink to="/1inch" style={styles.menuItem}>
            Dex
          </NavLink>
        </Menu.Item>
        <Menu.Item
          key=""
          style={styles.menuItem}
          icon={<SlidersFilled style={{ color: "#fff" }} />}
          onClick={() =>
            window.open(
              "https://www.dextools.io/app/polygon/pair-explorer/0x5ca5162a426b844b7b0d6e9449c44f01d073b878",
              "_blank",
            )
          }
        >
          <NavLink to="" style={styles.menuItem}>
            Chart
          </NavLink>
        </Menu.Item>
        <Menu.Item className="tokenPrice">
          <TokenPrice
            address="0xe7541aa266fa18edc1b4cfd766b814ec25d9c937"
            chain="polygon"
            image="https://monkeyninja.io/static/media/6-2.bdd53fa3.png"
            size="25px"
          />
        </Menu.Item>
        {/*<Menu.Item key="/nftMarket" style={styles.menuItem} icon={<ShopFilled style={{ color: "#fff" }} />}>
          <NavLink to="/nftMarket" style={styles.menuItem}>
            Market
          </NavLink>
        </Menu.Item>*/}
        {/*<Menu.Item key="/dojo" style={styles.menuItem} icon={<UserOutlined style={{ color: "#fff" }} />}>
          <NavLink to="/dojo" style={styles.menuItem}>
            Dojo
          </NavLink>
        </Menu.Item>*/}
        {/*<Menu.Item key="/nftBalance" style={styles.menuItem}>
            <NavLink to="/nftBalance" style={styles.menuItem}>
              My NFTs
            </NavLink>
          </Menu.Item>*/}
        {/*<Menu.Item key="/nftTransactions" style={styles.menuItem}>
            <NavLink to="/nftTransactions" style={styles.menuItem}>
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
  );
}

export default MenuItems;
