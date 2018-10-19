import React, { Component } from "react";
import { Button } from 'antd-mobile';
import { addCounter, asyncCount } from "@src/actions/counter";
import './index.scss'
export default class Counter extends Component {
  render() {
    let { counter } = this.props;
    counter = counter || {};

    return (
      <div className="counter">
        <h2>计数器</h2>
        <div style={{ fontSize: 30, color: "#f66" }}>{counter.count}</div>

        <Button
          onClick={() => {
            this.dispatch(addCounter());
          }}
        >
          Count
        </Button>
        <Button type="primary"
          onClick = {() => {
            this.dispatch(asyncCount())
          }}
        >
          asyncCount
        </Button>
      </div>
    );
  }
}
