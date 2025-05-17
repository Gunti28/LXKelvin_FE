import React, { useState } from 'react';
import OrderDelivered from './OrderDelivered';
import ChatBot from './ChatBot';

 const ChatBotContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(prev => !prev);
    return (
        <>
            <OrderDelivered toggleChat={toggleChat} />
            <ChatBot isOpen={isOpen} toggleChat={toggleChat} />
        </>
    );
}

export default ChatBotContainer;