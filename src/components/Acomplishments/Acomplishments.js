import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 50, text: 'Secures a position under the top 50 In the National AR-VR Hackathon organized by iHUB DivyaSampark @ IIT Roorkee in association with TechXR innovations. '},
  { number: 0, text: '--', },
  { number: 0, text: '--', },
  { number: 0, text: '--', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Accomplishments
    </SectionTitle>
    <Boxes>
      {
        data.map((card, index)=>(
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))
      }
    </Boxes>

  </Section>
);

export default Acomplishments;
