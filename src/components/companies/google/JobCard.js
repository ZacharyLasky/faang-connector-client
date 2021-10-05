import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles';

export const JobCard = ({ job }) => {
  console.log({ job });
  return (
    <Container>
      <GoogleJobCard>
        <GoogleJobTitle>Requirements</GoogleJobTitle>
        <GoogleJobText>{job.job_qualifications}</GoogleJobText>
      </GoogleJobCard>
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

const GoogleJobCard = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 230px;
  background: ${colors.black};
  width: inherit;
`;

const GoogleJobTitle = styled('h2')`
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 200%;
  font-weight: 100;

  @media (min-width: 900px) {
    font-size: 2vw;
  }
`;

const GoogleJobText = styled('p')`
  color: white;
  font-size: 12px;
  text-align: center;
  line-height: 200%;
  font-weight: 100;
  margin: 0 20px;
  height: 100px;
  overflow: scroll;

  @media (min-width: 900px) {
    font-size: 1vw;
  }
`;
