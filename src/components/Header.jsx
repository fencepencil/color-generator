import React from 'react';
import styled from 'styled-components';
import { textColor } from './Variables';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  height: 100vh;
  margin: 0 auto;
  max-width: 1440px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  height: 6rem;
`;

const Logo = styled.div`
  color: ${textColor};
  width: 3rem;
`;

const StyledLogo = styled.svg`
  width: 3rem;
`;

const LogoSvg = () => (
  <StyledLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700">
    <rect y="100" width="200" height="200" fill="#22292c" />
    <rect x="200" y="100" width="200" height="200" fill="#22292c" />
    <rect x="400" y="100" width="200" height="200" fill="#22292c" />
    <rect y="300" width="200" height="200" fill="#22292c" />
    <rect x="200" y="300" width="200" height="200" fill="#22292c" />
    <rect y="500" width="200" height="200" fill="#22292c" />
    <polygon points="600 500 600 700 400 700 600 500" fill="#22292c" />
    <polygon
      points="400 300 400 500 200 500 200 700 400 700 600 500 600 300 400 300"
      fill="#FFFFFF"
    />
    <polygon points="200 100 0 100 100 0 200 100" fill="#22292c" />
    <polygon points="400 100 200 100 300 0 400 100" fill="#22292c" />
    <polygon points="600 100 400 100 500 0 600 100" fill="#22292c" />
  </StyledLogo>
);

export { Container, Header, Logo, LogoSvg };
