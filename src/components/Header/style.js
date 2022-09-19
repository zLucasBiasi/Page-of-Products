import { Link } from "react-router-dom";

import styled from "styled-components";

export const ListNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const StyleLink = styled(Link)`
  background-color: gray;
  padding: 1rem 3rem;
  margin: 0 2rem;
  color: white;
  font-size: 1.6rem;
  border-radius: 0.5rem;
`;

export const Container = styled.div`
  margin: 2rem;
`;
