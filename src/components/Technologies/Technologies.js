import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {SiFigma, SiUnity} from 'react-icons/si';
import {CgFigma} from 'react-icons/cg';
import {GiVrHeadset} from 'react-icons/gi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked on range of Technologies in the web development domain as well as game development domain. I've also experience of working on Immersive technologies with unity engine. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={"3rem"}/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size={"3rem"}/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node and databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <CgFigma size={"2.5rem"}/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Figma and Adobe XD
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiUnity size={"2.5rem"}/>
        <ListContainer>
          <ListTitle>Game Development</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Unity and c#
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <GiVrHeadset  size={"3rem"}/>
        <ListContainer>
          <ListTitle>AR/VR</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Unity, Vuforia and ARFoundation
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
