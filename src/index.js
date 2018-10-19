import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd-mobile/dist/antd-mobile.css'
import Routers from '@src/router'
import store from '@src/store'
import '@src/common/styles/common.scss'

// 组件里面注入公共方法
const RCP = React.Component.prototype
RCP.dispatch = store.dispatch

ReactDOM.render(
  // Provider组件 默认子组件可以拿到state
  <Provider store={store}>
    <Routers />
  </Provider>
  , document.getElementById('root')
);
