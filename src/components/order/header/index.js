import React, { Component } from 'react';
import OrderList from '../orderList'
import './style.scss'

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          订单详情
        </header>

        <OrderList />
      </div>
    );
  }
}

export default Header;