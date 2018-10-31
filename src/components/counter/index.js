import React, { Component } from "react";
import { connect } from 'react-redux'
import { Button } from 'antd-mobile';
import { Redirect } from 'react-router-dom'
import { addCounter, asyncCount } from "@src/actions/counter";
import { logout } from '@src/actions/auth'

import './index.scss'

@connect(state => state)

class Counter extends Component {
  render() {
    const { isAuth } = this.props.auth
    return isAuth? this.renderCounter() : this.renderLogin()
  }

  renderCounter(){
    let { counter } = this.props;
    const { auth } = this.props
    counter = counter || {};

    return (
      <div className="counter">
        <h1>hello,{auth.user}</h1>
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
        <Button type="warning" onClick={() => {
          this.dispatch(logout())
          }}>登出</Button>
      </div>
    )
  }

  renderLogin() {
    return (
      <Redirect to='/login'></Redirect>
    )
  }
}

export default Counter