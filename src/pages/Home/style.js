import { Link } from "react-router-dom";

import styled from "styled-components";

export const Image = styled.img`
  width: 20rem;
  height: 30rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const WrapperProducts = styled.div`
  width: 70rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const StyleLink = styled(Link)`
  transition: 0.5s;
  color: black;

  &:hover {
    transform: scale(1.1);
  }
`;
