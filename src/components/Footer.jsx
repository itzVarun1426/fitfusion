import React from 'react';
import { Dumbbell, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="text-accent h-8 w-8" />
              <span className="font-heading text-2xl tracking-wider font-bold">
                FIT<span className="text-accent">FUSION</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering individuals to reach their peak physical and mental potential through elite training and community support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors">About</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-accent transition-colors">Trainers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-wider mb-6">Programs</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Cardio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Strength</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">HIIT</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Endurance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>123 Fitness Ave, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>join@testSite.com</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FitFusion. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
