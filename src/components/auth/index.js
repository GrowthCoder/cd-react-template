import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from 'antd-mobile';
import { login } from '@src/actions/auth'

@connect(state => state.auth)

class Auth extends Component {
  
  render() {
    const { user, isAuth } = this.props

    return (
      <div>
        <h2>hi, {user}</h2>
        <h3>你没有权限，需要登录才能看</h3>
        { isAuth ? <Redirect to="/test" /> : null}
        <Button type="primary"
          onClick={() => this.dispatch(login())}>登陆</Button>
      </div>
    );
  }
}

export default Auth;