import React from "react";
import ChatBot from "react-chatbotify";
import "../styles/MentalWellnessChatbot.css";

const MentalWellnessChatbot = () => {
  const flow = {
    start: {
      message: "Hello! I’m GrowthBot, here to support your mental well-being at GrowthFullCircle. How can I assist you today?",
      options: [
        "I’m feeling stressed",
        "Mindfulness exercises",
        "Talk to someone",
        "Explore resources",
      ],
      path: (params) => {
        switch (params.userInput) {
          case "I’m feeling stressed":
            return "stressSupport";
          case "Mindfulness exercises":
            return "mindfulness";
          case "Talk to someone":
            return "contactSupport";
          case "Explore resources":
            return "resources";
          default:
            return "start";
        }
      },
    },
    stressSupport: {
      message:
        "I’m sorry to hear you’re feeling stressed. Let’s try a quick breathing exercise: Take a deep breath in for 4 seconds, hold for 4 seconds, and exhale for 4 seconds. Repeat 3 times. How do you feel now?",
      options: ["Better", "Still stressed", "Back to main menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Better":
            return "stressBetter";
          case "Still stressed":
            return "stressMoreHelp";
          default:
            return "start";
        }
      },
    },
    stressBetter: {
      message: "I’m glad that helped! Would you like to explore more stress management tips?",
      options: ["Yes", "Back to main menu"],
      path: (params) => (params.userInput === "Yes" ? "resources" : "start"),
    },
    stressMoreHelp: {
      message:
        "Let’s try something else. Would you like to explore mindfulness exercises or speak with a professional?",
      options: ["Mindfulness exercises", "Speak with a professional", "Back to main menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Mindfulness exercises":
            return "mindfulness";
          case "Speak with a professional":
            return "contactSupport";
          default:
            return "start";
        }
      },
    },
    mindfulness: {
      message:
        "Here’s a quick mindfulness exercise: Close your eyes, focus on your breath, and notice the air moving in and out for 1 minute. Want more exercises?",
      options: ["Yes, more exercises", "Back to main menu"],
      path: (params) => (params.userInput === "Yes, more exercises" ? "moreMindfulness" : "start"),
    },
    moreMindfulness: {
      message:
        "Great! You can try a body scan: Start from your toes and slowly move your attention up to your head, noticing any tension. We also have a full guide on mindfulness on our site.",
      options: ["Visit mindfulness guide", "Back to main menu"],
      path: (params) => {
        if (params.userInput === "Visit mindfulness guide") {
          window.location.href = "/mindfulness-guide"; // Replace with your actual route
        }
        return "start";
      },
    },
    contactSupport: {
      message:
        "You can reach out to a professional via email at support@growthfullcircle.com. Would you like to send an email now?",
      options: ["Yes", "Back to main menu"],
      path: (params) => {
        if (params.userInput === "Yes") {
          window.location.href = "mailto:support@growthfullcircle.com";
        }
        return "start";
      },
    },
    resources: {
      message:
        "We have a variety of resources to support your mental wellness. Which would you like to explore?",
      options: ["Stress management tips", "Work-life balance articles", "Professional help", "Back to main menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Stress management tips":
            window.location.href = "/stress-management"; // To be replaced  with  actual route
            return "start";
          case "Work-life balance articles":
            window.location.href = "/work-life-balance"; // to be replaced with  actual route
            return "start";
          case "Professional help":
            return "contactSupport";
          default:
            return "start";
        }
      },
    },
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
        general: { embedded: false, showHeader: true, },
        header: { title: "GrowthBot",},
        chatHistory: { storageKey: "wellness_chat_history" },
        voice: { disabled: true },
        chatButton: { icon: "https://img.icons8.com/ios-filled/50/ffffff/chat.png" },
      }}
      flow={flow}
      styles={styles}
    />
  );
};

export default MentalWellnessChatbot;