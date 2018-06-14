import styled from 'styled-components';
import { device } from './Variables';

export const SiteMain = styled.section`
  width: 30rem;
  margin: 0 auto;

  @media ${device.tabletM} {
    width: 20rem;
  }
`;

export const SiteTitle = styled.h1`
  font-size: 2.8rem;
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  border: solid 3px rgba(34, 41, 44, 0.3);
  padding: 1rem 2rem;
  font-size: 2.6rem;
  background: transparent;
  user-select: all;
  transition: background 0.3s ease, border 0.3s ease, font-size 0.3s ease;
  &:hover {
    cursor: pointer;
    border: solid 3px rgba(34, 41, 44, 0.4);
    background: rgba(34, 41, 44, 0.1);
  }

  @media ${device.tabletM} {
    font-size: 1.7rem;
  }
`;
