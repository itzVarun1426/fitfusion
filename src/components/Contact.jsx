import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, MapPin, Mail, Send } from 'lucide-react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {

      const apiUrl = import.meta.env.PROD
        ? '/api/contact'
        : 'http://localhost:5000/api/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {

        setSubmitStatus('success');
        setSubmitMessage(
          'Your message has been sent successfully. We will contact you soon.'
        );

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

      } else {

        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Something went wrong. Please try again.');

      }

    } catch (error) {

      setSubmitStatus('error');
      setSubmitMessage(
        'Failed to connect to the server. Please try again later.'
      );

    } finally {

      setIsSubmitting(false);

    }
  };

  return (
    <section id="contact" className="relative bg-primary overflow-hidden">

      <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

        {/* Contact Info */}
        <div className="lg:w-1/2 p-12 lg:p-24 bg-card relative overflow-hidden">

          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="relative z-10"
          >

            <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">
              CONNECT <span className="text-accent">•</span> ENGAGE <span className="text-accent">•</span> TRANSFORM
            </h2>

            <p className="text-gray-400 mb-12 max-w-md">
              Ready to take the first step? Get in touch with our team to learn more about memberships, programs, and personal training.
            </p>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 border border-white/10">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm text-gray-400 mb-1">
                    Location
                  </h4>
                  <p className="text-lg">Pune, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 border border-white/10">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm text-gray-400 mb-1">
                    Phone
                  </h4>
                  <p className="text-lg">+91 8605866254</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 border border-white/10">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm text-gray-400 mb-1">
                    Email
                  </h4>
                  <p className="text-lg">contact@fitfusiongym.com</p>
                </div>
              </div>

            </div>

          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 p-12 lg:p-24 bg-secondary">

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="+91 90000 00000"
                />
              </div>

            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="bg-primary border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="How can we help you achieve your goals?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 bg-accent text-primary p-4 font-bold uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2 group box-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >

              {isSubmitting ? 'Sending...' : 'Send Message'}

              {!isSubmitting && (
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              )}

            </button>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 mt-2 border ${submitStatus === 'success'
                  ? 'bg-green-500/10 border-green-500/30 text-green-400'
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}
              >
                {submitMessage}
              </motion.div>
            )}

          </motion.form>

        </div>

      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918605866254?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20gym%20membership."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-8 h-8 fill-current" />
      </a>

    </section>
  );
};

export default Contact;