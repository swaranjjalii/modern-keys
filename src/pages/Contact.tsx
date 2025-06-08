import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Contact = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl animate-fade-in">
        <h1 className="text-3xl font-serif font-semibold text-navy mb-6">Contact Us</h1>
        <form className="bg-white rounded-lg shadow-subtle p-6 space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded input-focus" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded input-focus" placeholder="Your Email" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea className="w-full px-3 py-2 border rounded input-focus" rows={4} placeholder="Your Message" required />
          </div>
          <button type="submit" className="button-gold w-full">Send Message</button>
        </form>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
