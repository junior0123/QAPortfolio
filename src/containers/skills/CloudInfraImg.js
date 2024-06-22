import React, { Component } from "react";
import newImage from "./../../assests/images/javaprogramming.png";
export default class CloudInfraImg extends Component {
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
