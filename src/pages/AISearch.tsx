import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useAuth } from "../components/auth/AuthContext";
import Button from "../components/shared/Button";
import AuthModal from "../components/auth/AuthModal";

const AISearch = () => {
    const { user } = useAuth();
    const [authModalOpen, setAuthModalOpen] = useState(false);
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center py-16 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">AI Property Search</h1>
                {user ? (
                    <div className="flex justify-center w-full">
                        <iframe
                            src="https://swaranjalii-real-estate-agent.hf.space"
                            frameBorder="0"
                            width="850"
                            height="450"
                            title="AI Property Search"
                            className="rounded-lg shadow-lg border border-gray-200 bg-white"
                        ></iframe>
                    </div>
                ) : (
                    <div className="bg-white border border-gold/40 rounded-2xl shadow-xl p-10 max-w-md text-center flex flex-col items-center animate-fade-in">
                        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12A4 4 0 1 1 8 12a4 4 0 0 1 8 0Zm2 6a6 6 0 1 0-12 0h12Z" /></svg>
                        </div>
                        <p className="text-xl text-navy font-semibold mb-2">Sign in required</p>
                        <p className="text-gray-600 mb-6">Please sign in to access the AI Property Search feature.<br />If you don't have an account, sign up in seconds!</p>
                        <Button variant="gold" size="md" onClick={() => setAuthModalOpen(true)}>
                            Sign In / Sign Up
                        </Button>
                    </div>
                )}
            </main>
            <Footer />
            <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
        </div>
    );
};

export default AISearch;
