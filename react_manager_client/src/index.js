import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import Login from './pages/login/login'
import Admin from './pages/admin/admin';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>{/* only match one */}
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

