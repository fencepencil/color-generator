import React, { Component } from 'react';
import { Container, Header, Logo, LogoSvg } from './components/Header';
import { SiteMain, Title } from './components/Site';
import { Footer, FooterNav } from './components/Footer';

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo>
            <LogoSvg />
          </Logo>
        </Header>
        <SiteMain>
          {/* <SiteTitle id="sTitle">Press The Space Bar</SiteTitle> */}
          <Title id="rgb" />
          <Title id="hex" />
        </SiteMain>
        <Footer>
          <FooterNav>
            <div>Hex to RGB</div>
            <div>
              <a
                className="github-button"
                href="https://github.com/fencepencil/color-generator"
                aria-label="Follow @fencepencil on GitHub"
              >
                @fencepencil
              </a>
            </div>
          </FooterNav>
        </Footer>
      </Container>
    );
  }
}

export default App;
