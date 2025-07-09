import React, { useState } from "react";
import ChatBot from "react-chatbotify";
import "../styles/MentalWellnessChatbot.css";

const MentalWellnessChatbot = () => {
  const [flow, setFlow] = useState({
    start: {
      message: "Hello! I’m GrowthBot, here to support your mental well-being at GrowthFullCircle. How can I assist you today?",
      options: [
        "I'm feeling stressed",
        "I'm struggling with anxiety",
        "I'm feeling sad or low",
        "I'm having trouble sleeping",
        "I'm feeling overwhelmed or burnt out",
        "I'd like mindfulness tips",
      ],
    },
  });

  const handleUserInput = async (message) => {
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      return { message: data.response || "Sorry, I couldn't process that. Please try again." };
    } catch (error) {
      console.error('Error fetching response:', error);
      return { message: "Sorry, there was an issue. Please try again later." };
    }
  };

  const styles = {
    chatWindowStyle: {
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    headerStyle: {
      background: "linear-gradient(to right, #09906f, #264653)",
      color: "#fff",
      padding: "10px",
      fontSize: "1.2rem",
    },
    messageStyle: {
      background: "#27AE60",
      borderRadius: "8px",
      padding: "8px",
      margin: "5px 0",
      color: "#fff",
    },
    botBubbleStyle: {
      background: "#09906F",
    },
    userMessageStyle: {
      background: "#09906F",
      color: "#fff",
      borderRadius: "8px",
      padding: "8px",
      margin: "5px 0",
    },
    botOptionStyle: {
      background: "white",
      color: "black",
      borderRadius: "15px",
      padding: "8px",
      margin: "5px",
      cursor: "pointer",
    },
    chatButtonStyle: {
      background: "#09906F",
      color: "#fff",
    },
    sendButtonStyle: {
      background: "#09906F",
    },
    sendButtonHoveredStyle: {
      background: "#FFB347",
    },
  };

  return (
    <ChatBot
      settings={{
        general: { embedded: false, showHeader: true },
        header: { title: "GrowthBot" },
        chatHistory: { storageKey: "wellness_chat_history" },
        voice: { disabled: true },
        chatButton: { icon: "https://img.icons8.com/ios-filled/50/ffffff/chat.png" },
      }}
      flow={flow}
      onSendMessage={handleUserInput}
      styles={styles}
    />
  );
};

export default MentalWellnessChatbot;