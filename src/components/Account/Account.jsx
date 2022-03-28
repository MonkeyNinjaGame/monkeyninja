import { useMoralis } from "react-moralis";
//import { useLocation } from "react-router";
//import { getEllipsisTxt } from "helpers/formatters";
//import Blockie from "../Blockie";
//import { NavLink } from "react-router-dom";
import { Button, Card, Modal, Avatar /*, Menu, Tooltip*/ } from "antd";
import { useState } from "react";
import Address from "../Address/Address";
/*import {
  SelectOutlined,
  UserOutlined , ContainerFilled,
} from "@ant-design/icons";*/
//import { getExplorer } from "helpers/networks";
import Text from "antd/lib/typography/Text";
import { connectors } from "./config";
import NativeBalance from "components/NativeBalance";
import profile_icon from "../../assets/profile-02.png";

const styles = {
  account: {
    borderRadius: "0",
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: "8px 10px 0 0",
  },
  text: {
    color: "#fff",
    background: "transparent",
    cursor: "pointer",
    padding: "10px",
    marginRight: "0",
    marginLeft: "0",
    whiteSpace: "nowrap",
    fontSize: "12px",
  },
  unauth: {
    color: "#fff",
    cursor: "pointer",
    padding: "8px",
    marginRight: "0",
    marginLeft: "0",
    whiteSpace: "nowrap",
    fontSize: "12px",
  },
  connector: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px 5px",
    cursor: "pointer",
  },
  icon: {
    alignSelf: "center",
    fill: "rgb(40, 13, 95)",
    flexShrink: "0",
    marginBottom: "8px",
    height: "30px",
  },
};

function Account() {
  //const { pathname } = useLocation();
  const { authenticate, isAuthenticated, account, /*chainId, */ logout } =
    useMoralis();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

  if (!isAuthenticated || !account) {
    return (
      <>
        <div onClick={() => setIsAuthModalVisible(true)} className="skew">
          <p style={styles.unauth}>Ninja Connect</p>
        </div>
        <Modal
          visible={isAuthModalVisible}
          footer={null}
          onCancel={() => setIsAuthModalVisible(false)}
          bodyStyle={{
            padding: "1rem",
            fontSize: "16px",
            fontWeight: "normal",
          }}
        >
          <h2>Connect Wallet</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {connectors.map(({ title, icon, connectorId }, key) => (
              <div
                style={styles.connector}
                key={key}
                onClick={async () => {
                  try {
                    await authenticate({ provider: connectorId });
                    window.localStorage.setItem("connectorId", connectorId);
                    setIsAuthModalVisible(false);
                  } catch (e) {
                    console.error(e);
                  }
                }}
              >
                <img src={icon} alt={title} style={styles.icon} />
                <Text style={{ fontSize: "12px", color: "#fff" }}>{title}</Text>
              </div>
            ))}
          </div>
        </Modal>
      </>
    );
  }

  return (
    <>
      {/* <button
        onClick={async () => {
          try {
            console.log("change")
            await web3._provider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x38" }],
            });
            console.log("changed")
          } catch (e) {
            console.error(e);
          }
        }}
      >
        Hi
      </button> */}
      <div style={styles.account} onClick={() => setIsModalVisible(true)}>
        {/*<p style={{ marginRight: "5px", ...styles.text }}>
          {getEllipsisTxt(account, 4)}
        </p>*/}
        {/*<Blockie currentWallet scale={3} />*/}
        {/*<UserOutlined />*/}
        <Avatar src={profile_icon} style={{ marginTop: "-12px" }} />
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
        <h2>Wallet</h2>
        <NativeBalance />
        <Card
          style={{
            marginTop: "-40px",
            borderRadius: "0rem",
            border: "0px",
            background: "transparent",
            color: "#fff",
            textAlign: "center",
            paddingTop: "0",
          }}
          bodyStyle={{ padding: "15px" }}
        >
          <Address
            avatar="none"
            size={6}
            copyable
            style={{ fontSize: "14px", color: "#fff" }}
          />
          {/*<div style={{ marginTop: "10px", padding: "0 10px" }}>
            <a
              href={`${getExplorer(chainId)}/address/${account}`}
              target="_blank"
              rel="noreferrer"
            >
              <SelectOutlined
                style={{ marginRight: "15px", width: "16px", height: "16px" }}
              />
              View on Explorer
            </a>
          </div>*/}
        </Card>
        {/*<Menu
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
            marginBottom: "20px",
          }}
          defaultSelectedKeys={[pathname]}
        >
          <Menu.Item key="/nftBalance" className="menuItem" icon={<ContainerFilled style={{ color: "#fff" }} />}>
            <NavLink to="/nftBalance" className="menuItem" onClick={() => setIsModalVisible(false)}>
              Inventory
            </NavLink>
          </Menu.Item>
        </Menu>*/}
        <Button
          size="large"
          type="primary"
          style={{
            width: "auto",
            marginTop: "10px",
            borderRadius: "0rem",
            fontSize: "16px",
            fontWeight: "bold",
            background: "#ffb148",
            border: "0px",
            padding: "8px 15px",
          }}
          onClick={async () => {
            await logout();
            window.localStorage.removeItem("connectorId");
            setIsModalVisible(false);
            //window.open("/", "_self");
          }}
        >
          Disconnect Wallet
        </Button>
      </Modal>
    </>
  );
}

export default Account;
