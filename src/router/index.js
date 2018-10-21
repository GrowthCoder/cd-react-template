import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Counter from '../containers/counter'
import Order from '@src/components/order/header'

const Routes = () => (
  <div className="app">
    <Router>
      <div>
        <Route path="/test" component= {Counter}></Route>
        <Route path="/order" component= {Order}></Route>
      </div>
    </Router>
  </div>
)

export default Routes