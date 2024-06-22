import React, { Component } from "react";
import newImage from "./../../assests/images/1.png";
export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={newImage}
        alt="Data Science"
        style={{ width: "100%", height: "auto" }}
      />
    );
  }
}
