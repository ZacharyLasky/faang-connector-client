import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { layouts } from '../../styles';

export const Layout = ({ topSection, middleSection }) => {
  const history = useHistory();

  return (
    <LayoutContainer className="layout-container">
      {topSection && (
        <layouts.TopSection>
          <layouts.TopSectionHeading>{topSection.heading}</layouts.TopSectionHeading>
          {topSection.button && (
            <layouts.TopSectionButton
              onClick={() => {
                topSection.buttonClick
                  ? history.push(topSection.buttonClick)
                  : topSection.customButton();
              }}>
              {topSection.button}
            </layouts.TopSectionButton>
          )}
          {topSection.children && topSection.children}
        </layouts.TopSection>
      )}
      {middleSection && (
        <layouts.MiddleSection>
          <layouts.MiddleSectionHeading>{middleSection.heading}</layouts.MiddleSectionHeading>
          {middleSection.paragraph && (
            <layouts.MiddleSectionParagraph>
              {middleSection.paragraph}
            </layouts.MiddleSectionParagraph>
          )}
          {middleSection.button && (
            <layouts.MiddleSectionButton onClick={() => history.push(middleSection.buttonClick)}>
              {middleSection.button}
            </layouts.MiddleSectionButton>
          )}
          {middleSection.sliderContent && (
            <layouts.MiddleSectionSliderWrapper>
              {middleSection.sliderContent}
            </layouts.MiddleSectionSliderWrapper>
          )}
          {middleSection.children && middleSection.children}
        </layouts.MiddleSection>
      )}
    </LayoutContainer>
  );
};

const LayoutContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
