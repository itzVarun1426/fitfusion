import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { account } from '../appwrite/config';
import useAutoLogout from '../hooks/useAutoLogout';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useAutoLogout(); // Auto-logout after inactivity

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-accent text-xl animate-pulse uppercase tracking-widest font-bold">
          Verifying Admin...
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default ProtectedRoute;
