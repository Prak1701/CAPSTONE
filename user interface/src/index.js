import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './style.css';
<Route path="/email-input" component={EmailInput} />

// Import all your page components
import Home from './views/home';
import EmailInput from './views/email-input';
import History from './views/history';
import SignIn from './views/signin';
import NotFound from './views/not-found';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Main Pages */}
        <Route exact path="/" component={Home} />
        <Route exact path="/email-input" component={EmailInput} />
        <Route exact path="/history" component={History} />
        <Route exact path="/signin" component={SignIn} />
        
        {/* 404 Handling */}
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));