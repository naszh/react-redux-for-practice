import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: stretch;
  gap: 15px;
  background-color: rgba(25, 118, 210, 0.05);
  border: 2px solid rgba(25, 118, 210, 0.2);
  padding: 40px;
  border-radius: 20px;
`;

export const Header1 = styled.h1`
  margin: 0 auto;
`;

export const Header2 = styled.h2`
  margin: 0 auto;
`;

export const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
