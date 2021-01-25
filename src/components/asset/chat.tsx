import React from "react";
import styled, { css } from "styled-components";

interface Chatprops {
  text: string;
  icon: string;
  right?: boolean;
}

function chat({ text, icon, right }: Chatprops) {
  return (
    <Wrap right={right}>
      <span>
        <img src={icon} alt="" width="100%" height="100%" />
      </span>
      <div>{text}</div>
    </Wrap>
  );
}

const Wrap = styled.div<{ right?: boolean }>`
  display: flex;
  align-items: center;
  font-family: "Helvetica Neue", " Helvetica ", "arial";
  margin: 10px 0;
  /* position:relative */
  & > span {
      /* position:absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    & > img {
      border-radius: 50%;
    }
  }
  & > div {
    font-size: 18px;
    background: white;
    min-width: 100px;
    border-radius: 0 15px 15px 15px;
    padding: 5px 10px;
    margin-left:20px;
  }
  ${({ right }) =>
    right &&
    css`
      flex-direction: row-reverse;
      /* justify-content: flex-end; */
      & > div {
        border-radius: 15px 0 15px 15px;
        margin-right:20px;
      }
    `}
`;
export default chat;
