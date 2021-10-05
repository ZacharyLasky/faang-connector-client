import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { colors } from '../styles';

export const Home = () => {
  const history = useHistory();

  return (
    <Container className="home">
      <RouteCard className="companies-card">
        <RouteCardText>Connect top tech jobs with</RouteCardText>
        <RouteCardText>top tech candidates. </RouteCardText>
        <RouteCardButton onClick={() => history.push('/companies')}>
          View FAANG companies
        </RouteCardButton>
      </RouteCard>
      <AboutWrapper>
        <AboutTitle>Learn more about</AboutTitle>
        <AboutTitle>FAANG Connector</AboutTitle>
        <AboutParagraph>
          This website uses Google's Puppeteer to scrape job postings and candidates from FAANG
          company websites and SignalHire.
        </AboutParagraph>
        <AboutButton onClick={() => history.push('/about')}>Learn more</AboutButton>
      </AboutWrapper>
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

const RouteCard = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 230px;
  background: ${colors.black};
  width: inherit;
`;

const RouteCardText = styled('p')`
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 200%;
  font-weight: 100;

  @media (min-width: 900px) {
    font-size: 2vw;
  }
`;

const RouteCardButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  background: ${colors.lilac};
  cursor: pointer;
  text-align: center;
  margin-top: 15px;
  width: 210px;
  &:hover {
    background: ${colors.pink};
  }

  @media (max-width: 300px) {
    width: 70%;
  }
`;

const AboutWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  max-width: 400px;
`;

const AboutTitle = styled('h2')`
  font-size: 28px;
  text-align: center;
  margin: 0px;
  line-height: 200%;
  font-weight: 600;
`;

const AboutParagraph = styled('p')`
  font-size: 20px;
  text-align: center;
  margin: 0 20px;
  line-height: 200%;
  font-weight: 500;
`;

const AboutButton = styled(RouteCardButton)`
  width: 300px;
  margin: 25px;

  @media (max-width: 300px) {
    width: 70%;
  }
`;
