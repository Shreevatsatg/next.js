'use client';

import { useState } from 'react';
import Button from './Button';

interface ApiResponse {
  message: string;
  timestamp: string;
  data?: any;
}

export default function ApiDemo() {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await fetch('/api/hello');
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError('Failed to fetch data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const postData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: 'User', 
          action: 'Testing API' 
        }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError('Failed to post data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">API Demo</h2>
      
      <div className="flex gap-4 mb-6">
        <Button onClick={fetchData} variant="primary">
          GET Request
        </Button>
        <Button onClick={postData} variant="secondary">
          POST Request
        </Button>
      </div>
      
      {loading && <p className="text-gray-500">Loading...</p>}
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
          {error}
        </div>
      )}
      
      {response && (
        <div className="bg-gray-50 p-4 rounded-md overflow-auto">
          <pre className="text-sm">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
} 