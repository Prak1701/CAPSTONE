import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Steps2 from './components/steps2';
import EmailInput from './views/email-input';
import Signup from './views/signup'; // <-- New Signup page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Steps2 />} />
        <Route path="/signup" element={<Signup />} /> {/* Signup route */}
        <Route path="/email-input" element={<EmailInput />} />
      </Routes>
    </Router>
  );
}

export default App;
