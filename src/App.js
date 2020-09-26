import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Order from './pages/Order';
import Stock from './pages/Stock';
import SocketTest from './pages/SocketTest'
import SocketHighLevel from './pages/SocketHighLevel'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar ç/>
      <br />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stock">
          <Stock />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/sockettest">
          <SocketHighLevel />
        </Route>
        <Route path="*">
          <h1>Welcome to <font style={{color:'#26B020'}}>Pan-Lang</font>!</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
