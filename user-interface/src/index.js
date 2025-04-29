import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './style.css';

// Import all your page components
import Landing from './views/landing';
import Signup from './views/signup';
import Home from './views/home';
import EmailInput from './views/email-input';
import History from './views/history';
import SignIn from './views/signin';
import NotFound from './views/not-found';
import Plugin from './views/plugin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/email-input" component={EmailInput} />
        <Route exact path="/history" component={History} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/plugin" component={Plugin} />
        <Route exact path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
