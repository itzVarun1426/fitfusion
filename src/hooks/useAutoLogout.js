import { useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../appwrite/config';

const useAutoLogout = (timeoutMs = 30 * 60 * 1000) => { // Default to 30 minutes
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const logout = useCallback(async () => {
    try {
      await account.deleteSession('current');
      navigate('/admin/login');
    } catch (error) {
      console.error('Auto-logout failed:', error);
      // Even if session deletion fails (e.g. already deleted), redirect to login
      navigate('/admin/login');
    }
  }, [navigate]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(logout, timeoutMs);
  }, [logout, timeoutMs]);

  useEffect(() => {
    // Events that reset the timer
    const events = [
      'mousedown',
      'mousemove',
      'keydown',
      'scroll',
      'touchstart',
      'click'
    ];

    // Initialize timer
    resetTimer();

    // Add event listeners
    events.forEach(event => {
      window.addEventListener(event, resetTimer);
    });

    // Cleanup
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [resetTimer]);

  return { resetTimer };
};

export default useAutoLogout;
