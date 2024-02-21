import { useState } from 'react';

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:49153/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();

      setIsLoading(false);
      setData(data);
      return data;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, data };
}
