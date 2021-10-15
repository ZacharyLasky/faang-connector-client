import React from 'react';
import { useHistory } from 'react-router-dom';
import { layouts } from '../../styles';

export const Layout = ({ topSection, middleSection }) => {
  const history = useHistory();

  return (
    <>
      {topSection && (
        <layouts.TopSection>
          <layouts.TopSectionHeading>{topSection.heading}</layouts.TopSectionHeading>
          <layouts.TopSectionButton
            onClick={() => {
              topSection.buttonClick
                ? history.push(topSection.buttonClick)
                : topSection.customButton();
            }}>
            {topSection.button}
          </layouts.TopSectionButton>
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
          {middleSection.children && middleSection.children}
        </layouts.MiddleSection>
      )}
    </>
  );
};