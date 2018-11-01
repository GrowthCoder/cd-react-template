import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Counter from '@src/components/counter'
import Order from '@src/components/order/header'
import Auth from '@src/components/auth'
import Login from '@src/components/login'
import Register from '@src/components/register'

const Routes = () => (
  <div className="app">
    <Router>
      <Switch>
          <Route path="/login" component={Auth}></Route>
          <Route path="/register" component={Register}></Route>
          {/* <Route path="/login" component={Auth}></Route> */}
          <Route path="/test" component= {Counter}></Route>
          <Route path="/order" component= {Order}></Route>
          {/* 如果上面没有命中 则 */}
          <Redirect to="/login" component={Auth}></Redirect>
      </Switch>
    </Router>
  </div>
)

export default Routes