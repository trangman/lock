'use client';
import { useState, useEffect, useRef } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon, BellIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/site';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: siteConfig.leadGen.chat.welcomeMessage,
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [unreadCount, setUnreadCount] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { contact, leadGen } = siteConfig;

  // Request notification permission on component mount
  useEffect(() => {
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission);
      if (Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
          setNotificationPermission(permission);
        });
      }
    }
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Play notification sound
  const playNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  // Show browser notification
  const showNotification = (title: string, body: string) => {
    if (notificationPermission === 'granted' && !isOpen) {
      new Notification(title, {
        body,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        tag: 'locksmith-yorkshire-chat',
        requireInteraction: false,
        silent: false
      });
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate agent response
      setTimeout(() => {
        const agentResponse: Message = {
          id: messages.length + 2,
          text: leadGen.chat.responseMessage.replace('0800-123-4567', contact.emergency.display),
          sender: 'agent',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, agentResponse]);
        
        // Add notification and sound for agent response
        if (!isOpen) {
          setUnreadCount(prev => prev + 1);
          playNotificationSound();
          showNotification(
            'New Message from Locksmith Yorkshire',
            'We have responded to your inquiry. Click to view the message.'
          );
        }
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setUnreadCount(0);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const handleMinimizeChat = () => {
    setIsMinimized(true);
  };

  const handleMaximizeChat = () => {
    setIsMinimized(false);
  };

  return (
    <>
      {/* Audio element for notification sound */}
      <audio ref={audioRef} preload="auto">
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT" type="audio/wav" />
      </audio>

      {/* Floating Chat Button with Notification Badge */}
      <button
        onClick={handleOpenChat}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 relative"
        aria-label="Open live chat"
      >
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Minimized Chat Window */}
      {isMinimized && (
        <div className="fixed bottom-20 right-6 bg-white rounded-lg shadow-xl border z-50 w-80">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              <span className="font-semibold text-sm">Live Chat</span>
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </div>
            <div className="flex space-x-1">
              <button
                onClick={handleMaximizeChat}
                className="text-white hover:text-blue-200 transition-colors p-1"
                aria-label="Maximize chat"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
              <button
                onClick={handleCloseChat}
                className="text-white hover:text-blue-200 transition-colors p-1"
                aria-label="Close chat"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="p-3 text-sm text-gray-600">
            {unreadCount > 0 ? (
              <div className="flex items-center space-x-2">
                <BellIcon className="h-4 w-4 text-blue-600" />
                <span>{unreadCount} new message{unreadCount > 1 ? 's' : ''}</span>
              </div>
            ) : (
              <span>Chat is active</span>
            )}
          </div>
        </div>
      )}

      {/* Full Chat Overlay */}
      {isOpen && !isMinimized && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-end p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                <div>
                  <h3 className="font-semibold">Live Chat Support</h3>
                  <p className="text-sm text-blue-100">We&apos;re here to help!</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <button
                  onClick={handleMinimizeChat}
                  className="text-white hover:text-blue-200 transition-colors p-1"
                  aria-label="Minimize chat"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <button
                  onClick={handleCloseChat}
                  className="text-white hover:text-blue-200 transition-colors p-1"
                  aria-label="Close chat"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <PaperAirplaneIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-gray-500">
                  For urgent emergencies, call {contact.emergency.display}
                </p>
                {notificationPermission === 'default' && (
                  <button
                    onClick={() => Notification.requestPermission().then(setNotificationPermission)}
                    className="text-xs text-blue-600 hover:text-blue-700 flex items-center space-x-1"
                  >
                    <BellIcon className="h-3 w-3" />
                    <span>Enable notifications</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 