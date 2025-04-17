import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './style.css';

// Import all your page components (ADD PLUGIN HERE ▼)
import Home from './views/home';
import EmailInput from './views/email-input';
import History from './views/history';
import SignIn from './views/signin';
import NotFound from './views/not-found';
import Plugin from './views/plugin'; // <-- ADD THIS LINE

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/email-input" component={EmailInput} />
        <Route exact path="/history" component={History} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/plugin" component={Plugin} /> {/* This uses the imported component */}
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));