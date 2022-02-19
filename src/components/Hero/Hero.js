import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/> 
        My Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this website is to showcase my skills in brief.
      </SectionText>
      <Button onClick={()=>window.location='htttps://google.com'} >Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;