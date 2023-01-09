import styled from "styled-components";

export const Image = styled.img`
  width: 25rem;
  height: 35rem;
  object-fit: cover;
  border-radius: 0.5rem;

  margin: 2rem;
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
`;

export const Price = styled.span`
  font-size: 2.5rem;
`;

export const Description = styled.p`
  padding: 2rem;
  font-size: 1.5rem;
  width: 90%;
  text-align: center;
`;
