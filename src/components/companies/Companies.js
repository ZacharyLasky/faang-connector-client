import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaApple, FaAmazon, FaGoogle } from 'react-icons/fa';
import { SiNetflix } from 'react-icons/si';
import { colors } from '../../styles';

export const Companies = () => {
  let history = useHistory();

  return (
    <>
      <Container className="companies-container">
        <Company className="facebook-company-wrapper" title="Facebook">
          <FaFacebookF className="facebook-company-icon" size="48px" alt="Facebook company icon" />
        </Company>
        <Company className="apple-company-wrapper" title="Apple">
          <FaApple className="apple-company-icon" size="48px" alt="Apple company icon" />
        </Company>
        <Company className="amazon-company-wrapper" title="Amazon">
          <FaAmazon className="amazon-company-icon" size="48px" alt="Amazon company icon" />
        </Company>
        <Company className="netflix-company-wrapper" title="Netflix">
          <SiNetflix className="netflix-company-icon" size="48px" alt="Netflix company icon" />
        </Company>
        <Company
          className="google-company-wrapper"
          title="Google"
          onClick={() => history.push('/companies/google')}>
          <FaGoogle className="google-company-icon" size="48px" alt="Google company icon" />
        </Company>
      </Container>
      <JobsWrapper>
        <JobsTitle>Select a FAANG company.</JobsTitle>
        <JobsParagraph>
          Available jobs will appear here after selecting a FAANG company.
        </JobsParagraph>
      </JobsWrapper>
    </>
  );
};

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  height: 230px;
  background: ${colors.black};
  width: inherit;
`;

const Company = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 3px solid black;
  border-radius: 5px 20px 5px;
  margin-bottom: 10px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  background: ${colors.mango};
  &:hover {
    background: ${colors.pumpkin};
  }

  @media (max-width: 300px) {
    width: 50px;
    height: 50px;
  }
`;

const JobsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  max-width: 400px;
`;

const JobsTitle = styled('h2')`
  font-size: 28px;
  text-align: center;
  margin: 0px;
  line-height: 200%;
  font-weight: 600;
`;

const JobsParagraph = styled('p')`
  font-size: 20px;
  text-align: center;
  margin: 0 20px;
  line-height: 200%;
  font-weight: 500;
`;
