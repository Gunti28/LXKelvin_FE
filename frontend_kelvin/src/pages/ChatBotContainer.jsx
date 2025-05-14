import React, { useState } from 'react';
import OrderDelivered from './OrderDelivered';
import ChatBot from './ChatBot';

export default function ChatBotContainer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(prev => !prev);

    return (
        <>
            <OrderDelivered toggleChat={toggleChat} />
            <ChatBot isOpen={isOpen} toggleChat={toggleChat} />
        </>
    );
}
