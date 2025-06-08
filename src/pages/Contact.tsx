import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full bg-white/90 rounded-2xl shadow-xl p-10 animate-fade-in">
          <h1 className="text-4xl font-bold text-navy mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Have questions, feedback, or need help? Our team is here to assist you. Fill out the form below or reach out using the contact details provided.
          </p>
          {submitted ? (
            <div className="text-center text-green-600 font-semibold text-lg py-8">
              Thank you for reaching out! We have received your message and will get back to you soon.
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold/50 focus:border-gold focus:outline-none" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold/50 focus:border-gold focus:outline-none" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">Message</label>
                <textarea id="message" name="message" rows={4} required value={form.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold/50 focus:border-gold focus:outline-none" placeholder="How can we help you?" />
              </div>
              <button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-3 rounded-lg shadow transition-all text-lg">Send Message</button>
            </form>
          )}
          <div className="mt-8 text-center text-gray-700">
            <div className="mb-2">Email: <a href="mailto:swaranjalishahapure004@gmail.com" className="text-gold hover:underline font-medium">swaranjalishahapure004@gmail.com</a></div>
            <div className="mb-2">Phone: <a href="tel:8007103870" className="text-gold hover:underline font-medium">8007103870</a></div>
            <div className="mb-2">Address: <span className="text-gold font-medium">EliteEstate, 101 Koregaon Park, Pune, Maharashtra 411001, India</span></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
