import { useState, useEffect } from 'react';

export const useGlobalTimer = () => {
  const [timeLeft, setTimeLeft] = useState('00:00:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // Current UTC time
      const currentUTC = now.getTime() + (now.getTimezoneOffset() * 60000);
      
      // KZT is UTC+5, offset is 5 hours in milliseconds
      const offsetKZT = 5 * 60 * 60 * 1000;
      const currentKZT = new Date(currentUTC + offsetKZT);
      
      // Target is the coming midnight in KZT
      const targetKZT = new Date(currentKZT);
      targetKZT.setHours(24, 0, 0, 0); // Reaches 00:00:00 tomorrow
      
      const difference = targetKZT.getTime() - currentKZT.getTime();
      
      if (difference > 0) {
        const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const m = Math.floor((difference / 1000 / 60) % 60);
        const s = Math.floor((difference / 1000) % 60);

        const newTime = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        setTimeLeft(newTime);
      } else {
        setTimeLeft('00:00:00');
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};
