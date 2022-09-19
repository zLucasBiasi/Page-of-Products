import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(2turn);
  }
`;

export const Loader = styled.div`
  /* animation: is-rotating 1s infinite; */
  border: 6px solid #1d71b8;
  border-radius: 50%;
  border-top-color: #f16a23;
  height: 50px;
  width: 50px;
  animation: ${rotate} 2s linear infinite;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
`;
