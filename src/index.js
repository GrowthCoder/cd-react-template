import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import store from './store'
import Counter from './components/counter';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/test" component= {Counter}></Route>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
