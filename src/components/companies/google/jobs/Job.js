import React from 'react';
import styled from 'styled-components';
import { layouts } from '../../../../styles';
import { Layout } from '../../../global';

export const Job = ({ job, setMatchingCandidates, setSelectedJob }) => {
  console.log(job);
  return (
    <Layout
      topSection={{
        heading: job.job_title,
        button: 'Return to jobs',
        customButton: () => setSelectedJob()
      }}
      middleSection={{
        heading: 'Job Qualifications',
        paragraph: `Scroll horizontally to see all job info`,
        children: (
          <>
            <JobWrapper>
              {job.job_qualifications.map((qualification, id) => (
                <JobSection key={id}>{qualification}</JobSection>
              ))}
            </JobWrapper>
            <layouts.MiddleSectionButton onClick={() => setMatchingCandidates(job.id)}>
              See matching candidates
            </layouts.MiddleSectionButton>
          </>
        )
      }}
    />
  );
};

const JobWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const JobSection = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  min-width: 200px;
  border-radius: 3px;
  margin: 10px 5px;
  text-align: center;
  font-size: 14px;
  padding: 0 15px;
  overflow: scroll;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
