import React, { Component } from "react";
import Pdf from "../assets/Monkey_Ninja_White_Paper.pdf";

class DownloadWP extends Component {
  render() {
    return (
      <p style={{ padding: "8px 0 0" }}>
        <a
          href={Pdf}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#ffffff" }}
        >
          Download White Paper
        </a>
      </p>
    );
  }
}

export default DownloadWP;
