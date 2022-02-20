import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
     <LinkColumn>
     <LinkTitle>Call</LinkTitle>
     <LinkItem href='tel:111-111-111'>111-111-111</LinkItem>
     </LinkColumn>
     <LinkColumn>
     <LinkTitle>Email</LinkTitle>
     <LinkItem href='mailto:jhavicky25@gmail.com'>jhavicky25@gmail.com</LinkItem>
     </LinkColumn>
     </LinkList>
     <SocialContainer>
       <CompanyContainer>
         <Slogan>Innovating one project at a time</Slogan>
       </CompanyContainer>
       <SocialIcons href='https://github.com'>
       <AiFillGithub/>
     </SocialIcons>
     <SocialIcons href='https://linkedin.com'>
       <AiFillLinkedin/>
     </SocialIcons>
     <SocialIcons href='https://github.com'>
       <AiFillInstagram/>
     </SocialIcons>
     </SocialContainer>
   </FooterWrapper>
  );
};

export default Footer;
