import styled from 'styled-components';
import { colors } from './colors';

const NavFooter = styled('nav')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 60px;
  width: inherit;
  background: ${colors.black};
  position: fixed;
  bottom: 0;

  @media (min-width: 800px) {
    height: 12%;
  }
`;

const Nav = styled(NavFooter)`
  position: absolute;
  top: 0;
  background: white;
`;

const NavButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 25px;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  background: ${colors.lilac};
  cursor: pointer;
  font-size: 10px;
  margin: 0 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:hover {
    background: ${colors.pink};
  }

  @media (max-width: 300px) {
    width: 100%;
  }

  @media (min-width: 800px) {
    width: 20rem;
    height: 3rem;
    font-size: 1.3rem;
  }
`;

const TopSection = styled('div')`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 180px;
  background: ${colors.black};
  width: inherit;

  @media (min-width: 800px) {
    height: 30vh;
  }
`;

const TopSectionHeading = styled('h2')`
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: 100;
  line-height: 200%;
  margin: 0 20px;

  @media (min-width: 800px) {
    font-size: 3vw;
  }
`;

const TopSectionButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  background: ${colors.lilac};
  cursor: pointer;
  text-align: center;
  width: 210px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:hover {
    background: ${colors.pink};
  }

  @media (min-width: 800px) {
    width: 50%;
    height: 4rem;
    font-size: 1.5rem;
  }
`;

const MiddleSection = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 250px;
  text-align: center;

  @media (min-width: 800px) {
    height: 40rem;
  }
`;

const MiddleSectionHeading = styled('h2')`
  font-size: 20px;
  text-align: center;
  margin: 0px;
  font-weight: 600;
  line-height: 200%;
  margin: 0 20px;

  @media (min-width: 800px) {
    font-size: 5rem;
  }
`;

const MiddleSectionParagraph = styled('p')`
  font-size: 15px;
  margin: 0 20px;
  line-height: 120%;
  font-weight: 500;

  @media (min-width: 800px) {
    font-size: 2rem;
    width: 40%;
  }
`;

const MiddleSectionSliderWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 300px) {
    max-width: 260px;
  }

  @media (min-width: 800px) {
    max-width: 40%;
  }
`;

const MiddleSectionButton = styled(TopSectionButton)`
  width: 300px;
  margin: 0 5px;
  font-size: 15px;

  @media (max-width: 300px) {
    width: 70%;
  }

  @media (min-width: 800px) {
    font-size: 1.3rem;
  }
`;

export const layouts = {
  TopSection,
  TopSectionHeading,
  TopSectionButton,
  Nav,
  NavFooter,
  NavButton,
  MiddleSection,
  MiddleSectionHeading,
  MiddleSectionParagraph,
  MiddleSectionSliderWrapper,
  MiddleSectionButton
};
