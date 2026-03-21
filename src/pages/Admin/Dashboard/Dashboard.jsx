import React, { useState } from 'react';
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { account } from '../../../appwrite/config';
import { 
  LayoutDashboard, 
  Users, 
  Image as ImageIcon, 
  CreditCard, 
  LogOut, 
  ChevronRight,
  Menu,
  X,
  Codesandbox
} from 'lucide-react';
import InspireManager from './InspireManager';
import TrainersManager from './TrainersManager';
import PricingManager from './PricingManager';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navItems = [
    { name: 'Inspire Section', path: '/admin/inspire', icon: <ImageIcon className="w-5 h-5" /> },
    { name: 'Trainers', path: '/admin/trainers', icon: <Users className="w-5 h-5" /> },
    { name: 'Pricing Plans', path: '/admin/pricing', icon: <CreditCard className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-primary flex flex-col md:flex-row overflow-hidden relative">
      
      {/* Mobile Header - Sticky */}
      <div className="md:hidden sticky top-0 flex items-center justify-between p-4 bg-secondary/80 backdrop-blur-lg border-b border-white/5 z-[60] w-full">
        <div className="flex items-center gap-2">
            <Codesandbox className="text-accent h-6 w-6" />
            <span className="font-heading font-bold tracking-widest text-sm uppercase italic">
                ADMIN<span className="text-accent">DASH</span>
            </span>
        </div>
        <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-accent hover:bg-white/5 rounded-md transition-colors"
        >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>


      {/* Sidebar Overlay (Mobile) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:relative inset-y-0 left-0 bg-secondary border-r border-white/5 flex flex-col
          transition-transform duration-300 ease-in-out z-50
          ${isSidebarOpen ? 'translate-x-0 w-64 shadow-2xl' : '-translate-x-full md:translate-x-0 w-64 md:w-20'} 
        `}
      >

        <div className="p-6 hidden md:flex items-center gap-3 border-b border-white/5">
          <Codesandbox className="text-accent h-8 w-8 flex-shrink-0" />
          {isSidebarOpen && (
            <span className="font-heading font-bold tracking-widest text-lg uppercase italic">
              ADMIN<span className="text-accent">DASH</span>
            </span>
          )}
        </div>

        <nav className="flex-1 py-8 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => { if(window.innerWidth < 768) setIsSidebarOpen(false); }}
              className={`flex items-center gap-4 p-4 transition-all duration-300 group ${
                location.pathname === item.path 
                ? 'bg-accent text-primary font-bold' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className={location.pathname === item.path ? '' : 'text-accent group-hover:scale-110 transition-transform'}>
                {item.icon}
              </div>
              {(isSidebarOpen || window.innerWidth < 768) && <span className="uppercase text-xs tracking-widest">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="p-6 flex items-center gap-4 text-gray-500 hover:text-red-500 transition-colors border-t border-white/5 uppercase text-xs tracking-widest font-bold"
        >
          <LogOut className="w-5 h-5" />
          {isSidebarOpen && <span>Logout</span>}
        </button>
        
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-20 bg-accent text-primary p-1 rounded-full hover:scale-110 transition-transform hidden md:block"
        >
          {isSidebarOpen ? <ChevronRight className="w-4 h-4 rotate-180" /> : <ChevronRight className="w-4 h-4" />}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-12 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                <LayoutDashboard className="w-20 h-20 text-accent/20 mb-6" />
                <h1 className="text-3xl md:text-4xl font-heading font-bold uppercase mb-4 tracking-tighter italic">Welcome to <span className="text-accent underline decoration-white/10 underline-offset-8">Test Site CMS</span></h1>

                <p className="text-gray-400 uppercase tracking-widest text-[10px] md:text-xs font-bold">Manage your website content with ease and precision.</p>
              </div>
            } />
            <Route path="inspire" element={<InspireManager />} />
            <Route path="trainers" element={<TrainersManager />} />
            <Route path="pricing" element={<PricingManager />} />
          </Routes>
        </div>
      </main>
    </div>
  );

};

export default Dashboard;
