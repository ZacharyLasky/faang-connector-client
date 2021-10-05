import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles';

export const Jobs = ({ jobs, setSelectedJob }) => {
  return (
    <JobContainer>
      {jobs.map((job, i) => {
        return (
          <Job key={i} onClick={() => setSelectedJob(job.id)}>
            <h2>{job.job_title}</h2>
          </Job>
        );
      })}
    </JobContainer>
  );
};

const JobContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  max-width: 400px;
`;

const Job = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 50%;
  margin-bottom: 10px;
  width: 160px;
  height: 160px;
  cursor: pointer;
  background: ${colors.mango};
  text-align: center;
  color: white;
  &:hover {
    background: ${colors.pumpkin};
  }
`;
