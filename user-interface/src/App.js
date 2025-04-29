import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/landing';      // <- new landing page
import Signup from './views/signup';        // <- signup page
import EmailInput from './views/email-input'; // <- email form
import History from './views/history';      // <- if you have history
import Plugin from './views/plugin';        // <- if you have plugin

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/email-input" element={<EmailInput />} />
        <Route path="/history" element={<History />} />
        <Route path="/plugin" element={<Plugin />} />
      </Routes>
    </Router>
  );
}

export default App;
