import { MdArrowBack } from 'react-icons/md';
import { RiDislikeLine } from 'react-icons/ri';
import styled from 'styled-components';

export const GoBack = styled.div`
  font-size: 18px;
  margin: 10px;
`;

export const ArrowBack = styled(MdArrowBack)`
  font-size: 28px;
  vertical-align: sub;
`;

export const FavFilmBlock = styled.div`
  margin: 15px;
  padding: 15px;
  border: 1px solid;
  border-radius: 20px;
  position: relative;
`;

export const DislikeHeart = styled(RiDislikeLine)`
  font-size: 28px;
  vertical-align: sub;
  position: absolute;
  right: 15px;
  cursor: pointer;
`;
