import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Counter from '../pages/counter'

const Routes = () => (
  <div className="app">
    <Router>
      <div>
        <Route path="/test" component= {Counter}></Route>
      </div>
    </Router>
  </div>
)

export default Routes