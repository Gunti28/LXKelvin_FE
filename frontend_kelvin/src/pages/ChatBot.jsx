import React, { useState, useEffect, useRef } from 'react';
import styles from '../css/ChatBot.module.css';


 const ChatBot = ({ isOpen, toggleChat }) => { 
    const chatFlow = {
    start: {
        message: "👋 Hi there! Welcome to *Organic*. How can I assist you today?",
        options: [
            { label: "🥬 View Organic Products", next: "viewProducts" },
            { label: "🚚 Track My Order", next: "trackOrder" },
            { label: "📦 Return an Item", next: "returnItem" },
            { label: "🌱 Organic Benefits", next: "benefits" },
            { label: "🖼️ Show Promo", next: "showPromo" }
        ]
    },
    viewProducts: {
        message: "Choose a product category:",
        dropdown: {
            prompt: "Select a category",
            options: [
                { label: "Fruits", response: "🍎 Fresh apples, bananas, berries and more!" },
                { label: "Vegetables", response: "🥕 Organic carrots, spinach, broccoli, etc." },
                { label: "Dairy & Eggs", response: "🥚 Organic milk, eggs, paneer from local farms." },
                { label: "Grains & Pulses", response: "🌾 Brown rice, lentils, millets available!" }
            ]
        },
        options: [{ label: "🔁 Back to Main Menu", next: "start" }]
    },
    trackOrder: {
        message: "Please enter your Order ID.",
        input: true,
        next: "orderStatus"
    },
    orderStatus: {
        message: "✅ Your order #ORG456 is out for delivery and will arrive by 6 PM today!",
        options: [{ label: "🔁 Back to Main Menu", next: "start" }]
    },
    returnItem: {
        message: "📦 To return an item, go to 'My Orders' → 'Return'. For perishables, initiate within 24 hours.",
        options: [{ label: "🔁 Back to Main Menu", next: "start" }]
    },
    benefits: {
        message: "🌿 Going organic reduces pesticide exposure, supports farmers, and boosts your health!",
        options: [{ label: "🔁 Back to Main Menu", next: "start" }]
    },
    showPromo: {
        message: "🎉 Here's our promo of the week!",
        image: "",
        options: [{ label: "🔁 Back to Main Menu", next: "start" }]
    }
};


    const [chatHistory, setChatHistory] = useState([{ id: "start", fromUser: false }]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [dropdownReply, setDropdownReply] = useState("");
    const chatEndRef = useRef(null);

    const currentStep = chatFlow[chatHistory[chatHistory.length - 1]?.id];

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [chatHistory, isTyping]);

    const addBotMessage = (id) => {
        setIsTyping(true);
        setTimeout(() => {
            setChatHistory((prev) => [...prev, { id, fromUser: false }]);
            setIsTyping(false);
        }, 800);
    };

    const handleOptionClick = (nextId) => {
        setDropdownReply("");
        addBotMessage(nextId);
    };

    const handleInputSubmit = () => {
        if (input.trim()) {
            const lastId = chatHistory[chatHistory.length - 1].id;
            setChatHistory([...chatHistory, { text: input, fromUser: true }]);
            setInput('');
            addBotMessage(chatFlow[lastId].next);
        }
    };

    const handleDropdownSelect = (e) => {
        const selected = chatFlow.viewProducts.dropdown.options.find(
            (opt) => opt.label === e.target.value
        );
        setDropdownReply(selected?.response || "");
    };

    return (
        <>
            <button className="btn btn-success position-fixed bottom-0 end-0 m-4 rounded-pill shadow px-4 py-2" onClick={toggleChat}>
                💬 Chat
            </button>

            <div className={`bg-white border-start ${styles.chatPanel} ${isOpen ? styles.show : ''}`}>
                <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-light">
                    <strong>🧺 Customer Support</strong>
                    <button className="btn-close" onClick={toggleChat}></button>
                </div>

                <div className={`p-3 overflow-auto flex-grow-1 ${styles.chatBody}`}>
                    {chatHistory.map((item, index) => {
                        if (item.fromUser) {
                            return (
                                <div key={index} className={`text-end mb-2 ${styles.fadeIn}`}>
                                    <span className="badge bg-success">{item.text}</span>
                                </div>
                            );
                        } else {
                            const step = chatFlow[item.id];
                            return (
                                <div key={index} className={`mb-3 ${styles.fadeIn}`}>
                                    <div className="badge bg-secondary d-block text-start mb-2" dangerouslySetInnerHTML={{ __html: step.message }} />
                                    {step.image && (
                                        <img src={step.image} alt="promo" className="img-fluid rounded mb-2 border" />
                                    )}
                                    {step.dropdown && (
                                        <>
                                            <select className="form-select mb-2" onChange={handleDropdownSelect} defaultValue="">
                                                <option value="" disabled>{step.dropdown.prompt}</option>
                                                {step.dropdown.options.map((opt, i) => (
                                                    <option key={i}>{opt.label}</option>
                                                ))}
                                            </select>
                                            {dropdownReply && (
                                                <div className="alert alert-success py-2">{dropdownReply}</div>
                                            )}
                                        </>
                                    )}
                                </div>
                            );
                        }
                    })}

                    {isTyping && (
                        <div className={`mb-2 ${styles.fadeIn}`}>
                            <span className={`badge bg-light text-muted ${styles.typingIndicator}`}>
                                Typing<span className={styles.dot}>.</span><span className={styles.dot}>.</span><span className={styles.dot}>.</span>
                            </span>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                <div className="p-3 border-top bg-light">
                    {currentStep.input ? (
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Order ID"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleInputSubmit()}
                            />
                            <button className="btn btn-success" onClick={handleInputSubmit}>Send</button>
                        </div>
                    ) : (
                        currentStep.options?.map((opt, idx) => (
                            <button
                                key={idx}
                                className="btn btn-outline-success w-100 mb-2"
                                onClick={() => handleOptionClick(opt.next)}
                                disabled={isTyping}
                            >
                                {opt.label}
                            </button>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default ChatBot;
