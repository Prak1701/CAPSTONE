import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Steps2 from './components/steps2';
import EmailInput from './views/email-input';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Steps2} />
        <Route path="/signup" component={Signup} />
        <Route path="/email-input" component={EmailInput} />
      </Switch>
    </Router>
  );
}

export default App;
