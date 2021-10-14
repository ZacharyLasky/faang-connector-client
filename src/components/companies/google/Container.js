import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../styles';
import * as api from '../../../api';
import { AllJobs } from './jobs/AllJobs';
import { Job } from './jobs/Job';
import { AllCandidates } from './candidates/AllCandidates';

export const Container = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState();
  const [matchingCandidates, setMatchingCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState();

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

  const renderJob = (jobId) => {
    api
      .getJobById(jobId)
      .then((res) => setSelectedJob(res.data[0]))
      .catch((err) => console.log({ err }));
  };

  const renderCandidates = (jobId) => {
    api
      .getCandidatesByJobId(jobId)
      .then((res) => setMatchingCandidates(res.data))
      .catch((err) => console.log({ err }));
  };

  const renderGoogleComponent = () => {
    if (selectedJob && matchingCandidates.length) {
      return <AllCandidates />;
    }

    if (selectedJob) {
      return (
        <Job
          job={selectedJob}
          setSelectedJob={() => setSelectedJob()}
          setMatchingCandidates={(jobId) => renderCandidates(jobId)}
        />
      );
    }

    return <AllJobs jobs={jobs} setSelectedJob={(jobId) => renderJob(jobId)} />;
  };

  return (
    <Router>
      <Switch>
        <GoogleContainer className="google-container">
          <Route path="/companies/google">{renderGoogleComponent()}</Route>
        </GoogleContainer>
      </Switch>
    </Router>
  );
};

const GoogleContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: inherit;
`;
