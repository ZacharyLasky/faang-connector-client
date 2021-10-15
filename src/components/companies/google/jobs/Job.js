import React from 'react';
import styled from 'styled-components';
import { layouts } from '../../../../styles';
import { Layout } from '../../../global';

export const Job = ({ job, candidates, setRenderCandidates, resetGoogleState }) => {
  console.log({ job });
  return (
    <Layout
      topSection={{
        heading: job.job_title,
        button: 'Return to jobs',
        customButton: () => {
          resetGoogleState();
          // ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      middleSection={{
        heading: 'Job Qualifications',
        paragraph: `Scroll horizontally to see all job info`,
        children: (
          <>
            <layouts.MiddleSectionSliderWrapper>
              {job.job_qualifications.map((qualification, i) => (
                <>
                  <JobSection key={i}>
                    {qualification.slice(0, 170) + (qualification.length >= 170 ? '...' : '')}
                  </JobSection>
                  {qualification.length >= 170 && (
                    <JobSection key={i}>{'...' + qualification.slice(170)}</JobSection>
                  )}
                </>
              ))}
            </layouts.MiddleSectionSliderWrapper>
            {candidates.length ? (
              <layouts.MiddleSectionButton onClick={() => setRenderCandidates(true)}>
                {`See ${candidates.length} matching candidates`}
              </layouts.MiddleSectionButton>
            ) : (
              <NoCandidateButton>{`0 matching candidates`}</NoCandidateButton>
            )}
          </>
        )
      }}
    />
  );
};

const JobSection = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  min-width: 200px;
  border-radius: 3px;
  margin: 10px 5px;
  text-align: center;
  font-size: 14px;
  padding: 0 15px;
  overflow: scroll;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (min-width: 800px) {
    min-height: 10rem;
    min-width: 15rem;
    font-size: 1rem;
  }
`;

const NoCandidateButton = styled(layouts.MiddleSectionButton)`
  background: grey;
  cursor: not-allowed;
  &:hover {
    background: grey;
  }
`;
