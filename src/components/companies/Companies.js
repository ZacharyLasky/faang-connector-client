import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaApple, FaAmazon, FaGoogle } from 'react-icons/fa';
import { SiNetflix } from 'react-icons/si';
import { colors, layouts } from '../../styles';
import { Layout } from '../global';

export const Companies = () => {
  const history = useHistory();

  return (
    <>
      <Layout
        topSection={{
          heading: `What's FAANG?`,
          button: 'Learn more',
          buttonClick: '/companies'
        }}
        middleSection={{
          heading: 'Select a FAANG company.',
          paragraph: `Selecting a FAANG company will show you jobs sourced directly from the FAANG companies
          website.`,
          children: (
            <ButtonContainer>
              <CompanyButton className="facebook-company-wrapper" title="Facebook">
                <FaFacebookF
                  className="facebook-company-icon"
                  size="24px"
                  alt="Facebook company icon"
                />
              </CompanyButton>
              <AppleButton className="apple-company-wrapper" title="Apple">
                <FaApple className="apple-company-icon" size="24px" alt="Apple company icon" />
              </AppleButton>
              <AmazonButton className="amazon-company-wrapper" title="Amazon">
                <FaAmazon className="amazon-company-icon" size="24px" alt="Amazon company icon" />
              </AmazonButton>
              <NetflixButton className="netflix-company-wrapper" title="Netflix">
                <SiNetflix
                  className="netflix-company-icon"
                  size="24px"
                  alt="Netflix company icon"
                />
              </NetflixButton>
              <GoogleButton
                className="google-company-wrapper"
                title="Google"
                onClick={() => history.push('/companies/google')}>
                <FaGoogle className="google-company-icon" size="24px" alt="Google company icon" />
              </GoogleButton>
            </ButtonContainer>
          )
        }}
      />
    </>
  );
};

const ButtonContainer = styled('div')`
  display: flex;
`;

const CompanyButton = styled(layouts.MiddleSectionButton)`
  width: 50px;
`;

const AppleButton = styled(CompanyButton)`
  background: ${colors.mango};
  &:hover {
    background: ${colors.pumpkin};
  }
`;

const AmazonButton = styled(CompanyButton)`
  background: ${colors.opal};
  &:hover {
    background: ${colors.blueGreen};
  }
`;

const NetflixButton = styled(CompanyButton)`
  background: ${colors.lightPink};
  &:hover {
    background: ${colors.darkPink};
  }
`;

const GoogleButton = styled(CompanyButton)`
  background: ${colors.gold};
  &:hover {
    background: ${colors.darkGold};
  }
`;
