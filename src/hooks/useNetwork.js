import { useState, useEffect } from 'react';


const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }

  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.addEventListener('online', handleChange);
      window.addEventListener('offline', handleChange);
    };
  }, [])

  return status;
}

export default useNetwork;