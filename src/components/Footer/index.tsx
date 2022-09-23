import React from 'react';
import { Container, FooterNav, FooterNavItem } from './styles';

const Footer: React.FC = () => {
   return (
      <>
        <Container>
          <FooterNav>
            <FooterNavItem> Terms and Conditions </FooterNavItem>
            <FooterNavItem> Privacy Notice </FooterNavItem>
          </FooterNav>
        </Container>
      </>
    );
}

export default Footer;
