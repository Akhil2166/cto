import { useEffect, useState } from 'react';

export function useLondonTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const london = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now);
      setLondon(london);
    };
    // We need the function name to match
    function setLondon(val: string) {
      setTime(val);
    }
    
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return time;
}