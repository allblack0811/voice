import React, { useState } from "react";

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
      var text = transcript;
      // alert(transcript);

      // transcript = "";
      setChats((chats) => [...chats, { text: text, icon: Img, user: true }]);
    }
    resetTranscript();
    // alert(transcript);
    setSpeak(!speak);
  };
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
