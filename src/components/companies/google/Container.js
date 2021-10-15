import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import * as api from '../../../api';
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

  const allJobsRef = useRef();
  const jobRef = useRef();
  const allCandidatesRef = useRef();
  const candidateRef = useRef();

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

  useEffect(() => {
    selectedJob &&
      api
        .getCandidatesByJobId(selectedJob.id)
        .then((res) => setMatchingCandidates(res.data))
        .catch((err) => console.log({ err }));
  }, [selectedJob]);

  const renderJob = (jobId) => {
    api
      .getJobById(jobId)
      .then((res) => setSelectedJob(res.data[0]))
      .catch((err) => console.log({ err }));
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
          ref={candidateRef}
          candidate={selectedCandidate}
          resetGoogleState={() => resetGoogleState()}
          setSelectedCandidate={() => setSelectedCandidate()}
        />
      );
    }

    if (selectedJob && renderCandidates) {
      return (
        <AllCandidates
          ref={allCandidatesRef}
          selectedJob={selectedJob}
          candidates={matchingCandidates}
          setSelectedCandidate={(candidate) => setSelectedCandidate(candidate)}
          resetGoogleState={() => resetGoogleState()}
        />
      );
    }

    if (selectedJob) {
      return (
        <Job
          ref={jobRef}
          job={selectedJob}
          resetGoogleState={() => resetGoogleState()}
          setRenderCandidates={() => setRenderCandidates(true)}
          candidates={matchingCandidates}
        />
      );
    }

    return <AllJobs ref={allJobsRef} jobs={jobs} setSelectedJob={(jobId) => renderJob(jobId)} />;
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
