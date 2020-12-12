import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import Main from './containers/main/main';
import Login from './containers/login/login'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route component={Main}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

