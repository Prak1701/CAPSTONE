import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Steps2 from './components/steps2';  // Import your Steps2 component
import EmailInput from './views/email-input';  // Import the Email Input component

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route for steps2 */}
        <Route path="/" element={<Steps2 />} />  
        
        {/* Route for the email input page */}
        <Route path="/email-input" element={<EmailInput />} />  
      </Routes>
    </Router>
  );
}

export default App;
