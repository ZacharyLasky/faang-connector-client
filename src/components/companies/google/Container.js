import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles';
import * as api from '../../../api';
import { Jobs } from './Jobs';
import { JobCard } from './JobCard';

export const Container = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState();

  useEffect(() => {
    api
      .getAllJobs('Google')
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const renderJob = (jobID) => {
    api
      .getJobById(jobID)
      .then((res) => setSelectedJob(res.data))
      .catch((err) => console.log({ err }));
  };

  return (
    <GoogleContainer className="google-container">
      {selectedJob ? (
        <JobCard job={selectedJob[0]} />
      ) : (
        <GoogleCard className="google-card">
          <GoogleCardText>Google</GoogleCardText>
          <GoogleCardButton onClick={() => window.open(jobs[0]?.jobs_url)}>
            View jobs source
          </GoogleCardButton>
        </GoogleCard>
      )}
      <Jobs jobs={jobs} setSelectedJob={(jobID) => renderJob(jobID)} />
    </GoogleContainer>
  );
};

const GoogleContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: inherit;
`;

const GoogleCard = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 230px;
  background: ${colors.black};
  width: inherit;
`;

const GoogleCardText = styled('p')`
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 200%;
  font-weight: 100;

  @media (min-width: 900px) {
    font-size: 2vw;
  }
`;

const GoogleCardButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  background: ${colors.mango};
  cursor: pointer;
  text-align: center;
  margin-top: 15px;
  width: 210px;
  &:hover {
    background: ${colors.pumpkin};
  }

  @media (max-width: 300px) {
    width: 70%;
  }
`;
