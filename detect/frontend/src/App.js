import React from 'react';
import EmailForm from './components/EmailForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-700 text-white py-4 text-center text-3xl font-bold">
        AI-Powered Phishing Email Detector
      </header>
      <main>
        <EmailForm />
      </main>
    </div>
  );
}

export default App;
