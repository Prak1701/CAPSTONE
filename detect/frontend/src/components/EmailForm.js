import React, { useState } from 'react';

export default function EmailForm() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    content: ''
  });

  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      setResult(data.result);
    } catch (err) {
      setResult('Error analyzing email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl border">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Submit Email for Analysis</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email ID</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Content</label>
          <textarea
            name="content"
            required
            value={formData.content}
            onChange={handleChange}
            rows="6"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          {loading ? 'Analyzing...' : 'Submit'}
        </button>
      </form>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 text-gray-800 rounded-lg shadow">
          <h3 className="font-semibold">Analysis Result:</h3>
          <p className="mt-2 text-lg font-bold">{result}</p>
        </div>
      )}
    </div>
  );
}
