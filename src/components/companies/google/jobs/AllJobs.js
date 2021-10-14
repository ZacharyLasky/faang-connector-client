import React from 'react';
import styled from 'styled-components';
import { layouts } from '../../../../styles';
import { Layout } from '../../../global';

export const AllJobs = ({ jobs, setSelectedJob }) => {
  return (
    <Layout
      topSection={{
        heading: 'Google',
        button: 'View job source',
        customButton: () => window.open(jobs[0].jobs_url, '_blank')
      }}
      middleSection={{
        heading: 'Select a job',
        paragraph: `Selecting a job will give you more details about the role. Scroll horizontally to see all ${jobs.length} jobs.`,
        children: (
          <JobWrapper>
            {jobs.map((job) => (
              <layouts.MiddleSectionButton
                key={job.id}
                onClick={() => setSelectedJob(job.id)}
                style={{ minWidth: '300px' }}>
                {job.job_title}
              </layouts.MiddleSectionButton>
            ))}
          </JobWrapper>
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
