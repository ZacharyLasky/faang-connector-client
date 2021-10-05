import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Home } from './components/Home';
// import { AllJobs } from './components/jobs/AllJobs';
// import { AllCandidates } from './components/AllCandidates';
import { Container as Google } from './components/companies/google/Container';
import { Companies } from './components/companies/Companies';
import { About } from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <AppContainer className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/companies">
            <Companies />
          </Route>
          <Route path="/companies/google">
            <Google />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  margin: 0 auto;
  width: 100%;
`;
