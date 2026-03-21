import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0f05] text-white py-12 border-t border-white/5">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 text-center md:text-left">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-accent mb-4">
              TEST<span className="text-white">SITE</span>
            </h2>

            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Your Go-To For Personalized Workouts, Meal Plans, And Expert Fitness Advice
            </p>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center">

            <p className="text-accent font-semibold mb-4">Follow Us On</p>

            {/* Icons */}
            <div className="flex gap-6 mb-6">
              <div className="bg-white text-black p-3 rounded-md hover:scale-110 transition">
                <Facebook size={18} />
              </div>
              <div className="bg-white text-black p-3 rounded-md hover:scale-110 transition">
                <Linkedin size={18} />
              </div>
              <div className="bg-white text-black p-3 rounded-md hover:scale-110 transition">
                <Instagram size={18} />
              </div>
              <div className="bg-white text-black p-3 rounded-md hover:scale-110 transition">
                <Twitter size={18} />
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#home" className="hover:text-accent transition">Home</a>
              <a href="#services" className="hover:text-accent transition">Services</a>
              <a href="#about" className="hover:text-accent transition">About</a>
              <a href="#programs" className="hover:text-accent transition">Programs</a>
      
        
            </div>

          </div>

          {/* RIGHT */}
          <div className="text-center md:text-right">
            <h3 className="text-accent font-semibold mb-4">Contact</h3>

            <p className="text-gray-400 text-sm">
              Monday-Sunday
            </p>
            <p className="text-gray-400 text-sm mb-3">
              8:00 AM - 5:00 PM
            </p>

            <p className="text-gray-400 text-sm">
              E-mail
            </p>
            <p className="text-gray-400 text-sm">
              TESTEMAIL@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} Test Site. All rights reserved.
          </p>

          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <a href="/admin/login" className="hover:text-accent transition-colors">Admin Access</a>
            <span className="opacity-20">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="opacity-20">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;