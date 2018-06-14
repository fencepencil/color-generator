import styled from 'styled-components';
import { dFlex } from './Variables';

const Footer = styled.footer`
  ${dFlex};
  width: 100%;
  height: 4rem;
`;

const FooterNav = styled.nav`
  ${dFlex};
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > * {
    font-size: 1.4rem;
    margin: 0 1rem;
  }
  > div:first-child {
    margin-left: 0;
  }
  > div:last-child {
    margin-right: 0;
  }
`;

export { Footer, FooterNav };
