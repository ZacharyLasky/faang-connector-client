import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Candidate = ({ candidate }) => {
  return (
    <Container>
      <GoogleCandidateCard>
        <GoogleCandidateName>{candidate.name}</GoogleCandidateName>
        <GoogleCandidateButton>Button</GoogleCandidateButton>
      </GoogleCandidateCard>
    </Container>
  );
};

const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: inherit;
`;

const GoogleCandidateCard = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 230px;
  background: ${colors.black};
  width: inherit;
`;
const GoogleCandidateName = styled('p')`
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 200%;
  font-weight: 100;

  @media (min-width: 900px) {
    font-size: 2vw;
  }
`;

const GoogleCandidateText = styled('p')`
  color: white;
  font-size: 12px;
  text-align: center;
  line-height: 200%;
  font-weight: 100;
  margin: 0 20px;
  height: 40px;
  overflow: scroll;

  @media (min-width: 900px) {
    font-size: 1vw;
  }
`;

const GoogleCandidateButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  background: ${colors.mango};
  cursor: pointer;
  text-align: center;
  margin-top: 15px;
  width: 210px;
  &:hover {
    background: ${colors.pumpkin};
  }

  @media (max-width: 300px) {
    width: 70%;
  }
`;
