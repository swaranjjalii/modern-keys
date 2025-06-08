import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import Button from '../shared/Button';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  // In a real app, these would come from a backend/API
  const [conversation, setConversation] = useState([
    { 
      role: 'bot', 
      content: 'Hello! I\'m your AI real estate assistant. How can I help you today?' 
    }
  ]);
  
  const [isAiThinking, setIsAiThinking] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    const updatedConversation = [
      ...conversation,
      { role: 'user', content: message }
    ];
    
    setConversation(updatedConversation);
    setMessage('');
    setIsAiThinking(true);
    
    try {
      // Send the user message to the backend chat endpoint
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      
      if (!response.ok) throw new Error('Failed to get AI response');
      
      const data = await response.json();
      const aiResponse = data.result || 'Sorry, I couldn\'t process your request.';
      
      setConversation([
        ...updatedConversation,
        { role: 'bot', content: aiResponse }
      ]);
    } catch (error) {
      setConversation([
        ...updatedConversation,
        { role: 'bot', content: 'Sorry, I couldn\'t process your request.' }
      ]);
    } finally {
      setIsAiThinking(false);
    }
  };
  
  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 transition-all duration-300 ${
          isOpen ? 'bg-white text-navy rotate-90' : 'bg-navy text-white hover:bg-navy-light'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-md h-[500px] glass-card shadow-lg z-50 overflow-hidden flex flex-col animate-zoom-in">
          {/* Header */}
          <div className="bg-navy text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Sparkles size={20} className="mr-2 text-gold" />
              <h3 className="font-medium">AI Real Estate Assistant</h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === 'user' 
                      ? 'bg-navy text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isAiThinking && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-800 rounded-bl-none">
                  Thinking...
                </div>
              </div>
            )}
          </div>
          
          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-navy/50"
                placeholder="Type your message..."
              />
              <Button 
                type="submit" 
                variant="gold" 
                className="rounded-l-none py-2"
                icon={isAiThinking ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                aria-label="Send message"
                disabled={isAiThinking || !message.trim()}
              >
                {/* children required by ButtonProps, but we only want the icon */}
                ""
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Powered by AI for instant answers to your real estate questions
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;
