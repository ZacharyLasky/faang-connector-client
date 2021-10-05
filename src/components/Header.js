import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { RiMenuLine, RiMenuFoldLine } from 'react-icons/ri';
import { colors } from '../styles';
import walrusHead from '../assets/walrusHead.png';

export const Header = () => {
  const [menu, setMenu] = useState(true);
  const history = useHistory();

  const renderMainHeader = () => {
    return (
      <Container className="header-menu">
        <TitleWrapper onClick={() => history.push('/')}>
          <img src={walrusHead} height="50px" alt="Walrus Head" />
          <Title className="app-title">FAANG Connector</Title>
        </TitleWrapper>
        <MenuIcon
          size="25px"
          className="menu-icon"
          title="Open menu"
          onClick={() => setMenu(false)}
        />
      </Container>
    );
  };

  const renderSubheader = () => {
    return (
      <Container className="heade-folded-menu">
        <TitleWrapper onClick={() => history.push('/')}>
          <img src={walrusHead} height="50px" alt="Walrus Head" />
          <DropdownButtonWrapper>
            <JobsButton>All jobs</JobsButton>
            <CandidatesButton>All candidates</CandidatesButton>
          </DropdownButtonWrapper>
        </TitleWrapper>
        <FoldMenuIcon
          size="25px"
          className="folded-menu-icon"
          title="Close menu"
          onClick={() => setMenu(true)}
        />
      </Container>
    );
  };

  return <>{menu ? renderMainHeader() : renderSubheader()}</>;
};

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-radius: 3px;
  top: 0;
  position: sticky;
  height: 80px;
  background: white;
  width: inherit;
`;

const TitleWrapper = styled('div')`
  display: flex;
  margin: 10px;
  cursor: pointer;
`;

const Title = styled('h1')`
  margin: 10px 4px;
  font-weight: 900;
  font-size: 30px;
  color: ${colors.lilac};

  @media (max-width: 320px) {
    font-size: 25px;
    margin-top: 0px;
  }
`;

const DropdownButtonWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px 15px;
`;

const JobsButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  background: ${colors.lilac};
  cursor: pointer;
  font-size: 12px;
  margin-right: 10px;
  &:hover {
    background: ${colors.pink};
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`;

const CandidatesButton = styled(JobsButton)`
  margin-right: 0px;
`;

const MenuIcon = styled(RiMenuLine)`
  cursor: pointer;
  margin: 20px 15px;
`;

const FoldMenuIcon = styled(RiMenuFoldLine)`
  cursor: pointer;
  margin: 20px 15px;
`;
