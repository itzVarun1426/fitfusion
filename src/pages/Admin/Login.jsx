import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../../appwrite/config';
import { motion } from 'framer-motion';
import { Lock, Mail, Codesandbox } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        await account.get();
        // Session active, redirect to dashboard
        navigate('/admin');
      } catch (error) {
        // No session, stay on login
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await account.createEmailPasswordSession(email, password);
      navigate('/admin');
    } catch (err) {
      if (err.message?.includes('prohibited when a session is active')) {
        // Session already exists, redirect to dashboard
        navigate('/admin');
      } else {
        setError(err.message || 'Invalid credentials');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 transform skew-x-12 z-0 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full z-10"
      >
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Codesandbox className="text-accent h-10 w-10" />
            <span className="font-heading text-3xl tracking-wider font-bold text-white">
              TEST<span className="text-accent"> SITE</span>
            </span>

          </div>
          <h2 className="text-gray-400 uppercase tracking-[0.3em] text-sm font-bold">Admin Portal</h2>
        </div>

        <div className="bg-secondary p-8 border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 text-sm font-medium uppercase tracking-wider">
                {error}
              </div>
            )}

            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-primary border border-white/10 p-4 pl-12 text-white outline-none focus:border-accent transition-colors font-body"
                  placeholder="admin@fitfusion.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-primary border border-white/10 p-4 pl-12 text-white outline-none focus:border-accent transition-colors font-body"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-primary p-4 font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 disabled:opacity-50 box-glow-hover"
            >
              {loading ? 'Authenticating...' : 'Access Dashboard'}
            </button>
          </form>
        </div>
        
        <div className="mt-8 text-center">
            <a href="/" className="text-gray-500 hover:text-accent transition-colors text-xs uppercase tracking-widest font-bold">
                ← Back to Site
            </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
