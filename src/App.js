import React, { Component } from "react";
import Page from "./components/Page";
import "./App.css";
import "./stars.scss";

export default class App extends Component {
  render() {
    return (
      <div className="stars">
        <div className="twinkling">
          <div className="App">
            <Page />
          </div>
        </div>
      </div>
    );
  }
}
