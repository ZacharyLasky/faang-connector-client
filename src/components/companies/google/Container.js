import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import * as api from '../../../api';
import { Loading } from '../../global';
import { AllJobs } from './jobs/AllJobs';
import { Job } from './jobs/Job';
import { AllCandidates } from './candidates/AllCandidates';
import { Candidate } from './candidates/Candidate';

export const Container = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState();
  const [matchingCandidates, setMatchingCandidates] = useState([]);
  const [renderCandidates, setRenderCandidates] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState();

  useEffect(() => {
    api
      .getAllJobs('Google')
      .then((res) => {
        setJobs(res.data);
      })
      .catch(() => alert('Whoops! An error has occurred... Please refresh this page.'));
  }, []);

  useEffect(() => {
    selectedJob &&
      api
        .getCandidatesByJobId(selectedJob.id)
        .then((res) => setMatchingCandidates(res.data))
        .catch(() => alert('Whoops! An error has occurred... Please refresh this page.'));
  }, [selectedJob]);

  const renderJob = (jobId) => {
    api
      .getJobById(jobId)
      .then((res) => setSelectedJob(res.data[0]))
      .catch(() => alert('Whoops! An error has occurred... Please refresh this page.'));
  };

  const resetGoogleState = () => {
    setSelectedJob();
    setMatchingCandidates([]);
    setRenderCandidates(false);
    setSelectedCandidate();
  };

  const renderGoogleComponent = () => {
    if (selectedJob && renderCandidates && selectedCandidate) {
      return (
        <Candidate
          candidate={selectedCandidate}
          resetGoogleState={() => resetGoogleState()}
          setSelectedCandidate={() => setSelectedCandidate()}
        />
      );
    }

    if (selectedJob && renderCandidates) {
      return (
        <AllCandidates
          selectedJob={selectedJob}
          candidates={matchingCandidates}
          setSelectedCandidate={(candidate) => setSelectedCandidate(candidate)}
          resetGoogleState={() => resetGoogleState()}
        />
      );
    }

    if (selectedJob && matchingCandidates) {
      return (
        <Job
          job={selectedJob}
          resetGoogleState={() => resetGoogleState()}
          setRenderCandidates={() => setRenderCandidates(true)}
          candidates={matchingCandidates}
        />
      );
    }

    if (jobs.length) {
      return <AllJobs jobs={jobs} setSelectedJob={(jobId) => renderJob(jobId)} />;
    }

    return <Loading />;
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
