import React, { useState, useEffect } from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import socketIOClient from "socket.io-client";
import Img from "./res/img/icon.jpg";
import ChatPage from "./page/chat";

interface Chatting {
  text?: any;
  user?: boolean;
  icon: string;
}

function App() {
  const socket = socketIOClient("http://localhost:4000/");
  const [speak, setSpeak] = useState(false);
  const [chats, setChats] = useState<Chatting[]>([]);

  const { transcript, resetTranscript } = useSpeechRecognition();
  const Speaking = () => {
    SpeechRecognition.startListening({ continuous: true });
    if (speak && transcript) {
      SpeechRecognition.stopListening();
      socket.emit("chat-msg", transcript);
    }
    resetTranscript();

    setSpeak(!speak);
  };
  useEffect(() => {
    socket.on("chat-msg", (message: string) => {
      // alert(message);
      setChats((chats) => [...chats, { text: message, icon: Img, user: true }]);
    });
  }, []);
  return (
    <ChatPage
      Speaking={Speaking}
      transcript={speak ? transcript : ""}
      speak={speak}
      chats={chats}
    />
  );
}

export default App;
