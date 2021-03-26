import React from "react";
import styled from "styled-components";
import colors from "../contants/colors";

import Chat from "../components/asset/chat";

interface ChatProps {
  Speaking: () => void;
  chats: {
    text?: any;
    user?: boolean;
    icon: string;
  }[];
  speak: boolean;
  transcript: string;
}
const ChatPage = ({ Speaking, chats, speak, transcript }: ChatProps) => {
  return (
    <Wrap>
      <div className="chat">
        {chats.map((data) => (
          <Chat text={data.text} icon={data.icon} right={data.user} />
        ))}
      </div>
      <div
        className={speak ? "input loading-container" : "input"}
        onClick={() => {
          Speaking();
        }}
      >
        <span className={speak ? "nowspeak" : "notspeak"} id="loading-text" />

        <div className={speak ? "loading" : ""} />

        <div className={transcript ? "preview" : "preview nonpreview"}>
          {transcript}
        </div>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(46deg, #6ac1c5, #bda5ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 100vh;
  & > .chat {
    width: 100%;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex-basis: 80%;
    overflow-y: auto;
  }
  & > .input {
    flex-basis: 20%;
    /* height: 100px/; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
      background: rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 48px;
      max-height: 48px;
      width: 100%;
      height: 100%;
      &.notspeak {
        &::before {
          font-family: "Material Icons";
          content: "keyboard_voice";
          font-size: 25px;
          transition: color 0.5s;
        }
        &:hover {
          &::before {
            color: ${colors.primary};
          }
        }
      }
      &.nowspeak {
        &::before {
          font-family: "Material Icons";
          content: "record_voice_over";
          font-size: 25px;
          transition: color 0.5s;
        }
        &:hover {
          &::before {
            color: red;
          }
        }
      }
    }
  }
  & > .loading-container {
    position: relative;
    width: 100px;
    /* border-radius: 100%; */
    /* margin: 40px auto; */
    transition: all 0.5s ease-in-out;
    & > .loading {
      height: 100px;
      position: relative;
      width: 100px;
      border-radius: 100%;
      border: 2px solid transparent;
      border-color: transparent white transparent white;
      animation: rotate-loading 1.5s linear 0s infinite normal;
      transform-origin: 50% 50%;
      transition: all 0.5s ease-in-out;
    }

    & > #loading-text {
      animation: loading-text-opacity 2s linear 0s infinite normal;
      color: ${colors.primary};

      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
    }
  }
`;
export default ChatPage;
